import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@doro-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Descrição teste',
  },
} as Meta<ToastProps>

export const Primary: StoryObj = {}
