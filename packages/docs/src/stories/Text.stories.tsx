import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@doro-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, doloribus provident. Dignissimos delectus, suscipit quaerat facere fuga ullam optio, placeat sint dicta ipsa atque? Omnis facere tenetur aliquid accusantium veritatis.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
