import { ensureDir, readdir, writeFile, writeFileSync } from 'fs-extra'
import { TYPES_DIR } from '../shared/constant'
import { relative, resolve } from 'path'

export function generateReference(moduleDir: string) {
  writeFileSync(
    resolve(moduleDir, 'index.d.ts'),
    `\
export * from '${relative(moduleDir, TYPES_DIR)}'
`
  )
}

export async function compileTypes() {
  await ensureDir(TYPES_DIR)

  const dir = await readdir(TYPES_DIR)
  const ignoreEntryDir = dir.filter((filename) => filename !== 'index.d.ts')
  const exports: string[] = []

  ignoreEntryDir.forEach((filename) => {
    const componentName = filename.slice(0, filename.indexOf('.d.ts'))
    exports.push(`export * from './${componentName}'`)
  })

  const template = `\
import type { VueConstructor } from 'vue'

export const install: (app: VueConstructor) => void

${exports.join('\n')}
`

  await writeFile(resolve(TYPES_DIR, 'index.d.ts'), template)
}
