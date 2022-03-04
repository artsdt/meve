import { ensureDir, readdirSync, readFileSync, writeFile } from 'fs-extra'
import {
  SRC_DIR,
  HL_MD,
  HL_API_RE,
  HL_COMPONENT_NAME_RE,
  HL_TITLE_ATTRIBUTES_RE,
  HL_TITLE_EVENTS_RE,
  HL_TITLE_SLOTS_RE,
  HL_WEB_TYPES_JSON,
  HL_DIR,
  HL_TAGS_JSON,
  HL_ATTRIBUTES_JSON,
  CLI_PACKAGE_JSON,
} from '../shared/constant'
import { resolve } from 'path'
import { isDir, isMD } from '../shared/fsUtils'
import { get } from 'lodash'
import { getMeveConfig } from '../config/meve.config'

const TABLE_HEAD_RE = /\s*\|.*\|\s*\n\s*\|.*---+\s*\|\s*\n+/
const TABLE_FOOT_RE = /(\|\s*$)|(\|\s*\n(?!\s*\|))/

export const replaceDot = (s: string) => s.replace(/`/g, '')

export const replaceUnderline = (s: string) => s.replace(/_/g, '')

export function parseTable(table: string) {
  const rows = table.split('\n').filter(Boolean)
  return rows.map((row) => {
    const cols = row.split('|')
    cols.shift()
    cols.pop()
    return cols.map((col) => col.replace(/__meve_axis__/g, '|').trim())
  })
}

export function compileTable(md: string, titleRe: RegExp): string {
  const apiMatched = md.match(HL_API_RE)
  if (!apiMatched) {
    return ''
  }
  md = md.slice((apiMatched.index as number) + apiMatched[0].length)

  const titleMatched = md.match(titleRe)
  if (!titleMatched) {
    return ''
  }
  md = md.slice((titleMatched.index as number) + titleMatched[0].length)

  const tableHeadMatched = md.match(TABLE_HEAD_RE)
  if (!tableHeadMatched) {
    return ''
  }
  md = md.slice((tableHeadMatched.index as number) + tableHeadMatched[0].length)

  const tableFootMatched = md.match(TABLE_FOOT_RE)
  if (!tableFootMatched) {
    return ''
  }
  md = md.slice(0, (tableFootMatched.index as number) + tableFootMatched[0].length)

  return md.replace(/\\\|/g, '__meve_axis__').trim()
}

export function compileTags(
  table: Record<string, any>,
  tags: Record<string, any>,
  componentName: string,
  meveConfig: Record<string, any>
) {
  tags[`${get(meveConfig, 'namespace')}-${componentName}`] = {
    attributes: table.attributesTable.map((row: any) => replaceDot(row[0])),
  }
}

export function compileAttributes(
  table: Record<string, any>,
  attributes: Record<string, any>,
  componentName: string,
  meveConfig: Record<string, any>
) {
  table.attributesTable.forEach((row: any) => {
    const attrNamespace = `${get(meveConfig, 'namespace')}-${componentName}/${replaceDot(row[0])}`
    attributes[attrNamespace] = {
      type: replaceUnderline(row[2]),
      description: `${row[1]} 默认值：${replaceDot(row[3])}`,
    }
  })
}

export function compileWebTypes(
  table: Record<string, any>,
  webTypes: Record<string, any>,
  componentName: string,
  meveConfig: Record<string, any>
) {
  const { attributesTable, eventsTable, slotsTable } = table

  const attributes = attributesTable.map((row: any) => ({
    name: replaceDot(row[0]),
    description: row[1],
    default: replaceDot(row[3]),
    value: {
      type: replaceUnderline(row[2]),
      kind: 'expression',
    },
  }))

  const events = eventsTable.map((row: any) => ({
    name: replaceDot(row[0]),
    description: row[1],
  }))

  const slots = slotsTable.map((row: any) => ({
    name: replaceDot(row[0]),
    description: row[1],
  }))

  webTypes.contributions.html.tags.push({
    name: `${get(meveConfig, 'namespace')}-${componentName}`,
    attributes,
    events,
    slots,
  })
}

export function compileMD(
  path: string,
  tags: Record<string, any>,
  attributes: Record<string, any>,
  webTypes: Record<string, any>,
  meveConfig: Record<string, any>
) {
  if (!path.endsWith(HL_MD)) {
    return
  }

  const md = readFileSync(path, 'utf-8')

  const componentName = path.match(HL_COMPONENT_NAME_RE)![2]

  const attributesTable = parseTable(compileTable(md, HL_TITLE_ATTRIBUTES_RE))
  const eventsTable = parseTable(compileTable(md, HL_TITLE_EVENTS_RE))
  const slotsTable = parseTable(compileTable(md, HL_TITLE_SLOTS_RE))

  const table = {
    attributesTable,
    eventsTable,
    slotsTable,
  }

  compileWebTypes(table, webTypes, componentName, meveConfig)
  compileTags(table, tags, componentName, meveConfig)
  compileAttributes(table, attributes, componentName, meveConfig)
}

export function compileDir(
  path: string,
  tags: Record<string, any>,
  attributes: Record<string, any>,
  webTypes: Record<string, any>,
  meveConfig: Record<string, any>
) {
  const dir = readdirSync(path)

  dir.forEach((filename) => {
    const filePath = resolve(path, filename)

    isDir(filePath) && compileDir(filePath, tags, attributes, webTypes, meveConfig)
    isMD(filePath) && compileMD(filePath, tags, attributes, webTypes, meveConfig)
  })
}

export async function compileTemplateHighlight() {
  await ensureDir(HL_DIR)

  const meveConfig = getMeveConfig()
  const tags: Record<string, any> = {}
  const attributes: Record<string, any> = {}
  const webTypes: Record<string, any> = {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'vue',
    version: require(CLI_PACKAGE_JSON).version,
    name: get(meveConfig, 'name').toUpperCase(),
    contributions: {
      html: {
        tags: [],
        'types-syntax': 'typescript',
      },
    },
  }

  compileDir(SRC_DIR, tags, attributes, webTypes, meveConfig)

  await Promise.all([
    writeFile(HL_WEB_TYPES_JSON, JSON.stringify(webTypes, null, 2)),
    writeFile(HL_TAGS_JSON, JSON.stringify(tags, null, 2)),
    writeFile(HL_ATTRIBUTES_JSON, JSON.stringify(attributes, null, 2)),
  ])
}
