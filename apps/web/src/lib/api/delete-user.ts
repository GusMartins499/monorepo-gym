import { clientAPI } from "../client-axios"

interface DeleteUserProps {
  id: string
}

export async function deleteUser({ id }: DeleteUserProps) {
  await clientAPI.delete(`/users/${id}`)
}