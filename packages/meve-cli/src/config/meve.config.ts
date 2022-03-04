import { pathExistsSync } from 'fs-extra'
import { merge } from 'lodash'
import { MEVE_CONFIG, SITE_CONFIG } from '../shared/constant'
import { outputFileSyncOnChange } from '../shared/fsUtils'

export function getMeveConfig(emit = false): Record<string, any> {
  let config: any = {}

  if (pathExistsSync(MEVE_CONFIG)) {
    delete require.cache[require.resolve(MEVE_CONFIG)]
    config = require(MEVE_CONFIG)
  }
  delete require.cache[require.resolve('../../meve.default.config.js')]
  const defaultConfig = require('../../meve.default.config.js')

  const mergedConfig = merge(defaultConfig, config)

  if (emit) {
    const source = JSON.stringify(mergedConfig, null, 2)
    outputFileSyncOnChange(SITE_CONFIG, source)
  }

  return mergedConfig
}
