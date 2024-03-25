import { Configuration as DevServerConfig } from 'webpack-dev-server'
import { DevServerOptions } from './types/config'

export function devServer(options: DevServerOptions): DevServerConfig {
  const { port = 3000, open = true } = options

  return {
    port,
    open,
    historyApiFallback: true,
  }
}
