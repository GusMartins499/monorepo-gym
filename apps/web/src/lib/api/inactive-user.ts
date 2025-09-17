import { clientAPI } from "../client-axios"

interface InactiveUserProps {
  id: string
}

export async function inactiveUser({ id }: InactiveUserProps) {
  await clientAPI.patch(`/users/${id}/inactive`)
}