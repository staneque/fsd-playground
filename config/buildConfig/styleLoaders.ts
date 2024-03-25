import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const styleLoaders = (isDev: boolean) => {
  const css = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: '[path][name]__[local]-[hash:base64:5]',
          },
        },
      },
    ],
  }

  const scss = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: '[path][name]__[local]-[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  }

  return { css, scss }
}
