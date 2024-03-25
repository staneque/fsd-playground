import { merge } from 'webpack-merge'
import { commonConfig } from './webpack.common'
import { BuildEnv } from './types/config'

export default (env: BuildEnv) =>
  merge(commonConfig(env), {
    mode: 'production',
  })
