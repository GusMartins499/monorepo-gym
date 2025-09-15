import { create } from "zustand"
import { ReactNode } from "react"

type DialogState = {
  open: boolean
  title?: string
  content?: ReactNode
  payload?: any
  openDialog: (title: string, content: ReactNode, payload?: any) => void
  closeDialog: () => void
}

export const useDialogStore = create<DialogState>((set) => ({
  open: false,
  title: undefined,
  content: undefined,
  payload: undefined,
  openDialog: (title, content, payload) =>
    set({ open: true, title, content, payload }),
  closeDialog: () =>
    set({ open: false, title: undefined, content: undefined, payload: undefined }),
}))
