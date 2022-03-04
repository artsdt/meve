import chokidar, { FSWatcher } from 'chokidar'
import logger from '../shared/logger'
import { createServer, ViteDevServer } from 'vite'
import { ensureDirSync, pathExistsSync } from 'fs-extra'
import { SRC_DIR, MEVE_CONFIG, SITE } from '../shared/constant'
import { buildSiteEntry } from '../compiler/compileSiteEntry'
import { getDevConfig } from '../config/vite.config'
import { getMeveConfig } from '../config/meve.config'
import { merge } from 'lodash'

let server: ViteDevServer
let watcher: FSWatcher

async function startServer(force: boolean | undefined) {
  const isRestart = Boolean(server)
  logger.info(`${isRestart ? 'Res' : 'S'}tarting server...`)

  // close all instance
  server && (await server.close())
  watcher && (await watcher.close())

  // build all config
  await buildSiteEntry()
  const meveConfig = getMeveConfig()
  const devConfig = getDevConfig(meveConfig)
  const inlineConfig = merge(devConfig, force ? { server: { force: true } } : {})

  // create all instance
  server = await createServer(inlineConfig)
  await server.listen()
  server.printUrls()

  const watchPaths = [SITE]
  pathExistsSync(MEVE_CONFIG) && watchPaths.push(MEVE_CONFIG)
  watcher = chokidar.watch([SITE, MEVE_CONFIG])
  watcher.on('change', () => startServer(force))

  logger.info(`${isRestart ? 'Res' : 'S'}tart successfully!!!`)
}

export async function dev(cmd: { force?: boolean }) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)

  await startServer(cmd.force)
}
