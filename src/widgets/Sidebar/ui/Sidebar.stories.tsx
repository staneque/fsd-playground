import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorato'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const LightTheme: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const DarkTheme: Story = {
  decorators: [ThemeDecorator(Theme.DARK, true)],
}
