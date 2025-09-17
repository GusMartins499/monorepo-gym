import { clientAPI } from "../client-axios"

interface PatchUserProps {
  id: string
}

export async function patchUser({ id }: PatchUserProps) {
  await clientAPI.patch(`/users/${id}`)
}