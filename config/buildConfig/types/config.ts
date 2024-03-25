export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  PORT: string
  DEVELOPMENT: boolean
}

export interface DevServerOptions {
  port?: string
  open?: boolean
}
