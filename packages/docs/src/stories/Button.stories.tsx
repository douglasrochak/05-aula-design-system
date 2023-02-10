import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, Text } from '@doro-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: <Text>Send</Text>,
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      type: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    variant: 'secondary',
    children: <Text>Create New</Text>,
  },
}

export const Tertiary: StoryObj = {
  args: {
    variant: 'tertiary',
    children: <Text>Cancel</Text>,
  },
}

export const Small: StoryObj = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj = {
  args: {
    children: (
      <>
        <Text>Proximo passo</Text>
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}
