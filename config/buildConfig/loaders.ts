import webpack from 'webpack'
import { styleLoaders } from './styleLoaders'

export function getLoaders(isDev: boolean): webpack.RuleSetRule[] {
  console.log('IS DEVELOPMENT', isDev)
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // }

  const svg = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const file = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babel = {
    test: /\.(?:js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
      },
    },
  }

  const { scss } = styleLoaders(isDev)

  return [babel, scss, svg, file]
}
