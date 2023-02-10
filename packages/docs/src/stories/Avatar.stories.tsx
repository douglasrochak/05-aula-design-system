import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@doro-ui/react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj = {
  args: {
    src: 'https://github.com/douglasrochak.png',
    alt: 'Douglas Rochak',
  },
}

export const WithFallback: StoryObj = {}
