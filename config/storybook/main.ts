import type { StorybookConfig } from '@storybook/react-webpack5'
import { styleLoaders } from '../build/styleLoaders'
import path from 'path'

const { scss } = styleLoaders(true)
const svg = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
}

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...(config.module?.rules || []), scss, svg],
      },
      resolve: {
        ...config.resolve,
        modules: [
          ...(config.resolve?.modules || []),
          path.resolve(__dirname, '..', '..', 'src'),
        ],
        extensions: [...(config.resolve?.extensions || []), '.ts', '.tsx'],
      },
    }
  },
}

export default config
