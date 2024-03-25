import path from 'path'
import { BuildPaths } from './types/config'

export const paths: BuildPaths = {
  entry: path.resolve('src', 'index'),
  build: path.resolve('buildConfig'),
  html: path.resolve('public', 'index.html'),
  src: path.resolve('src'),
}
