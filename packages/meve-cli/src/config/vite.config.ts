import md from '@meve/markdown-vite-plugin'
import { createVuePlugin } from 'vite-plugin-vue2'
import { injectHtml } from 'vite-plugin-html'
import {
  CWD,
  ES_DIR,
  SITE_CONFIG,
  SITE_DIR,
  SITE_OUTPUT_PATH,
  SITE_PUBLIC_PATH,
  SITE_ROUTES,
  UMD_DIR,
  VITE_RESOLVE_EXTENSIONS,
} from '../shared/constant'
import { InlineConfig, PluginOption } from 'vite'
import { get, kebabCase } from 'lodash'
import { resolve } from 'path'
import { readFileSync, removeSync, writeFileSync } from 'fs-extra'

export function getDevConfig(meveConfig: Record<string, any>): InlineConfig {
  const defaultLanguage = get(meveConfig, 'defaultLanguage')
  const host = get(meveConfig, 'host')

  return {
    root: SITE_DIR,
    resolve: {
      extensions: VITE_RESOLVE_EXTENSIONS,
      alias: {
        '@config': SITE_CONFIG,
        '@routes': SITE_ROUTES,
      },
    },
    server: {
      port: get(meveConfig, 'port'),
      host: host === 'localhost' ? '0.0.0.0' : host,
    },
    publicDir: SITE_PUBLIC_PATH,
    plugins: [
      createVuePlugin({
        include: [/\.vue$/, /\.md$/],
        jsx: true,
      }),
      md({ style: get(meveConfig, 'highlight.style') }),
      injectHtml({
        data: {
          title: get(meveConfig, `title['${defaultLanguage}']`),
          logo: get(meveConfig, `logo`),
          baidu: get(meveConfig, `analysis.baidu`, ''),
        },
      }),
    ],
  }
}

export function getBuildConfig(meveConfig: Record<string, any>): InlineConfig {
  const devConfig = getDevConfig(meveConfig)

  return {
    ...devConfig,
    base: './',
    build: {
      outDir: SITE_OUTPUT_PATH,
      brotliSize: false,
      emptyOutDir: true,
      cssTarget: 'chrome61',
      rollupOptions: {
        input: {
          main: resolve(SITE_DIR, 'index.html'),
        },
      },
    },
  }
}

function inlineCSS(fileName: string, dir: string): PluginOption {
  return {
    name: 'meve-inline-css-vite-plugin',
    apply: 'build',
    closeBundle() {
      const cssFile = resolve(dir, 'style.css')
      const jsFile = resolve(dir, fileName)
      const cssCode = readFileSync(cssFile, 'utf-8')
      const jsCode = readFileSync(jsFile, 'utf-8')
      const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(/\\/g, '\\\\')}\`));\
var head=document.querySelector('head');head.appendChild(style)})();`
      removeSync(cssFile)
      writeFileSync(jsFile, `${injectCode}${jsCode}`)
    },
  }
}

function clear(): PluginOption {
  return {
    name: 'meve-clear-vite-plugin',
    apply: 'build',
    closeBundle() {
      removeSync(resolve(CWD, 'dist'))
    },
  }
}

export function getUMDConfig(meveConfig: Record<string, any>): InlineConfig {
  const name = get(meveConfig, 'name')
  const fileName = `${kebabCase(name)}.js`

  return {
    logLevel: 'silent',
    build: {
      emptyOutDir: true,
      lib: {
        name,
        formats: ['umd'],
        fileName: () => fileName,
        entry: resolve(ES_DIR, 'umdIndex.js'),
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          dir: UMD_DIR,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    plugins: [inlineCSS(fileName, UMD_DIR), clear()],
  }
}
