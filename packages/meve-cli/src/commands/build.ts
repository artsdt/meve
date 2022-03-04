import { ensureDirSync } from 'fs-extra'
import { SRC_DIR } from '../shared/constant'
import { build as buildVite } from 'vite'
import { getBuildConfig } from '../config/vite.config'
import { getMeveConfig } from '../config/meve.config'
import { buildSiteEntry } from '../compiler/compileSiteEntry'

export async function build() {
  process.env.NODE_ENV = 'production'

  ensureDirSync(SRC_DIR)
  await buildSiteEntry()
  const meveConfig = getMeveConfig()
  const buildConfig = getBuildConfig(meveConfig)

  await buildVite(buildConfig)
}
