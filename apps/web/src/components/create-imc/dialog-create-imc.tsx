'use client'

import {
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react"
import { CreateImcForm } from "./create-imc-form"

interface AddImcProps {
  open: boolean
  onClose: () => void
}

export function DialogCreateImc({ open, onClose }: AddImcProps) {
  return (
    <Dialog.Root lazyMount open={open}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color='gray.900'>Adicionar avaliação</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <CreateImcForm onClose={onClose} />
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={onClose} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
