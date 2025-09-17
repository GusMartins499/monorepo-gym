import { Button, IconButton, Table } from "@chakra-ui/react";
import { LuTrash, LuUserX } from "react-icons/lu";
import { USER_ROLE, USER_STATUS_TO_LABEL } from "../../app/utils/user-role";
import { deleteUser } from "../../lib/api/delete-user";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../lib/tankstack-client";
import { toaster } from "../ui/toaster";

interface UsersTableRowProps {
  payload: {
    id: string
    name: string
    username: string
    role: USER_ROLE
    status: string
  }
}

export function UsersTableRow({ payload }: UsersTableRowProps) {
  const { mutateAsync } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      return toaster.error({ description: error?.response?.data?.error?.message, type: "error" })
    }
  })

  const handleDeleteUser = () => {
    mutateAsync({ id: payload.id })
  }
  return (
    <Table.Row _hover={{ bg: "gray.50" }}>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.name}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.username}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {USER_STATUS_TO_LABEL[payload.role]}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.status}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="600">
        <Button bg='red.500' marginX={2}>
          <LuUserX />
          Inativar
        </Button>
        <IconButton
          size="md"
          bg="red.500"
          onClick={handleDeleteUser}
        >
          <LuTrash />
        </IconButton>
      </Table.Cell>
    </Table.Row>
  )
}