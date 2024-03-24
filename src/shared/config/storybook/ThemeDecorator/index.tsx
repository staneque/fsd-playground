import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div className={`app ${theme}`} style={{ height: 'auto', padding: '100px' }}>
    <Story />
  </div>
)
