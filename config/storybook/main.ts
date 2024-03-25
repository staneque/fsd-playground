import type { StorybookConfig } from '@storybook/react-webpack5'
import { styleLoaders } from '../build/styleLoaders'
import path from 'path'
import webpack, { RuleSetRule } from 'webpack'

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
    // Override any existing SVG loader
    const fileLoaderRule = config.module?.rules?.find(
      (rule: webpack.RuleSetRule) => {
        if (rule.test instanceof RegExp) {
          return rule.test.test('.svg')
        }
      }
    ) as webpack.RuleSetRule

    fileLoaderRule.exclude = /\.svg$/

    config.module?.rules?.push(svg, scss)

    return {
      ...config,
      module: {
        ...config.module,
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
