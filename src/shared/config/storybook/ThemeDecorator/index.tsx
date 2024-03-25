import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator =
  (theme: Theme, fullHeight: boolean) => (Story: StoryFn) => (
    <div
      className={`app ${theme}`}
      style={{ height: fullHeight ? '100vh' : 'auto', padding: '50px' }}
    >
      <Story />
    </div>
  )
