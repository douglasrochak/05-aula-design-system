import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@doro-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj = {
  args: {
    prefix: 'cal.com',
  },
}
