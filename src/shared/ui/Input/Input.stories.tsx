import { Meta, StoryObj } from '@storybook/react'
import { Input } from 'shared/ui/Input/Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Password',
  },
}
