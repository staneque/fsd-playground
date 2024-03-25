import webpack from 'webpack'
import { getPlugins } from './plugins'
import { getLoaders } from './loaders'
import { getResolveOptions } from './resolveOptions'
import { devServer } from './devServer'
import { paths } from './paths'
import { BuildEnv } from './types/config'

const isDev = process.env.NODE_ENV === 'development'

export const commonConfig = (env: BuildEnv): webpack.Configuration => {
  return {
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: getPlugins(paths),
    module: {
      rules: getLoaders(isDev),
    },
    resolve: getResolveOptions(paths),
  }
}
