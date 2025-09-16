import { clientAPI } from "../client-axios"

interface DeleteImcProps {
  id: string
}

export async function deleteImc({ id }: DeleteImcProps) {
  await clientAPI.delete(`/imc/${id}`)
}