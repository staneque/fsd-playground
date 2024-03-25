import webpack from 'webpack'
import { BuildPaths } from './types/config'

export function getResolveOptions(paths: BuildPaths): webpack.ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
