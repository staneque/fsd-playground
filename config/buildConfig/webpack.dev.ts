import { merge } from 'webpack-merge'
import { commonConfig } from './webpack.common'
import { devServer } from './devServer'
import { BuildEnv } from './types/config'

export default (env: BuildEnv) =>
  merge(commonConfig(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: devServer({
      port: env.PORT,
    }),
  })
