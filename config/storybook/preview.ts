import { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

const preview: Preview = {
  decorators: [StyleDecorator, RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
