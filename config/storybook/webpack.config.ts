import path from 'path'
import webpack from 'webpack'
import { styleLoaders } from '../build/styleLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'))
  config.resolve?.extensions?.push('.ts', '.tsx')

  const { scss } = styleLoaders(true)
  config.module?.rules?.push(scss)

  return config
}
