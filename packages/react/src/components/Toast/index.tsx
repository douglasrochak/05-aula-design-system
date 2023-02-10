import * as ToastRadix from '@radix-ui/react-toast'
import { ComponentProps, ReactNode } from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import { ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: ReactNode
  description: ReactNode
}

export function Toast({ title, description }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastContainer>
        <Box>
          <ToastRadix.Title>
            <Text>{title}</Text>
          </ToastRadix.Title>
          <ToastRadix.Description>
            <Text size={'sm'}>{description}</Text>
          </ToastRadix.Description>
        </Box>

        <ToastRadix.Close />
      </ToastContainer>

      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
