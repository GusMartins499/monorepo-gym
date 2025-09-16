'use client'

import {
  Dialog,
  Portal,
  CloseButton,
} from "@chakra-ui/react"
import { useDialogStore } from "../app/store/dialog-store"

export function DialogApp() {
  const { open, title, content, closeDialog } = useDialogStore()

  return (
    <Dialog.Root lazyMount open={open}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color="gray.900">{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{content}</Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={closeDialog} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
