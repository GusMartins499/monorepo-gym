'use client'

import { IconButton } from "@chakra-ui/react"
import { useMutation } from "@tanstack/react-query"
import { LuTrash } from "react-icons/lu"
import { deleteImc } from "../../lib/api/delete-imc"
import { queryClient } from "../../lib/tankstack-client"

export function DeleteImc({ id }: { id: string }) {
  const { mutateAsync } = useMutation({
    mutationFn: deleteImc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['imcs'] })
    }
  })

  const handleDeleteImc = () => {
    mutateAsync({ id })
  }

  return (
    <IconButton
      size="xs"
      bg="red.600"
      onClick={handleDeleteImc}
    >
      <LuTrash />
    </IconButton>
  )
}