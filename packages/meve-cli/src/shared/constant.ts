import { resolve } from 'path'

export const CWD = process.cwd()
export const MEVE_CONFIG = resolve(CWD, 'meve.config.js')
export const SRC_DIR = resolve(CWD, 'src')
export const ES_DIR = resolve(CWD, 'es')
export const LIB_DIR = resolve(CWD, 'lib')
export const UMD_DIR = resolve(CWD, 'umd')
export const TYPES_DIR = resolve(CWD, 'types')
export const ROOT_DOCS_DIR = resolve(CWD, 'docs')
export const ESLINT_EXTENSIONS = ['.vue', '.ts', '.js', '.mjs', '.tsx', '.jsx']
export const VITE_RESOLVE_EXTENSIONS = ['.vue', '.tsx', '.ts', '.jsx', '.js', '.less', '.css']
export const SCRIPTS_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']
export const PUBLIC_DIR_INDEXES = ['index.vue', 'index.tsx', 'index.ts', 'index.jsx', 'index.js']
export const EXAMPLE_DIR_NAME = 'example'
export const STYLE_DIR_NAME = 'style'
export const DOCS_DIR_NAME = 'docs'
export const TESTS_DIR_NAME = '__tests__'
export const UI_PACKAGE_JSON = resolve(CWD, 'package.json')
export const CLI_PACKAGE_JSON = resolve(__dirname, '../../package.json')

// site
export const SITE = resolve(__dirname, '../../site')
export const SITE_OUTPUT_PATH = resolve(CWD, 'site')
export const SITE_PUBLIC_PATH = resolve(CWD, 'public')
export const SITE_DIR = resolve(CWD, '.meve/site')
export const SITE_ROUTES = resolve(CWD, '.meve/routes.ts')
export const SITE_CONFIG = resolve(CWD, '.meve/site.config.json')

// template highlight
export const HL_COMPONENT_NAME_RE = /.*(\/|\\)(.+)(\/|\\)docs(\/|\\)/
export const HL_API_RE = /##\s*API\n+/
export const HL_TITLE_ATTRIBUTES_RE = /###\s*属性\s*\n+/
export const HL_TITLE_EVENTS_RE = /###\s*事件\s*\n+/
export const HL_TITLE_SLOTS_RE = /###\s*插槽\s*\n+/
export const HL_MD = 'zh-CN.md'
export const HL_DIR = resolve(CWD, 'highlight')
export const HL_TAGS_JSON = resolve(HL_DIR, 'tags.json')
export const HL_ATTRIBUTES_JSON = resolve(HL_DIR, 'attributes.json')
export const HL_WEB_TYPES_JSON = resolve(HL_DIR, 'web-types.json')

// jest
export const JEST_CONFIG = resolve(__dirname, '../config/jest.config.js')
export const JEST_MEDIA_MOCK = resolve(__dirname, '../config/jest.media.mock.js')
export const JEST_STYLE_MOCK = resolve(__dirname, '../config/jest.style.mock.js')
