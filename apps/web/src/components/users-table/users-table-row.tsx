import { Button, Flex, IconButton, Table } from "@chakra-ui/react";
import { LuTrash, LuUserCheck, LuUserX } from "react-icons/lu";
import { USER_ROLE, USER_ROLE_TO_LABEL } from "../../app/utils/user-role";
import { deleteUser } from "../../lib/api/delete-user";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../lib/tankstack-client";
import { toaster } from "../ui/toaster";
import { USER_STATUS, USER_STATUS_TO_LABEL } from "../../app/utils/user-status";
import { patchUser } from "../../lib/api/patch-user";

interface UsersTableRowProps {
  payload: {
    id: string
    name: string
    username: string
    role: USER_ROLE
    status: USER_STATUS
  }
}

export function UsersTableRow({ payload }: UsersTableRowProps) {
  const { mutateAsync: deleteUserFn } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      return toaster.error({ description: error?.response?.data?.error?.message, type: "error" })
    }
  })
  const { mutateAsync: patchUserFn } = useMutation({
    mutationFn: patchUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.invalidateQueries({ queryKey: ['students'] })
      queryClient.invalidateQueries({ queryKey: ['professors'] })
    },
    onError: (error) => {
      return toaster.error({ description: error?.response?.data?.error?.message, type: "error" })
    }
  })

  const handleDeleteUser = () => {
    deleteUserFn({ id: payload.id })
  }

  const handlePatchUser = () => {
    patchUserFn({ id: payload.id })
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
        {USER_ROLE_TO_LABEL[payload.role]}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {USER_STATUS_TO_LABEL[payload.status]}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="600">
        <Flex alignItems={'center'} justifyContent={'center'} gap={2}>
          <Button
            onClick={handlePatchUser}
            bg='orange.500'
            disabled={payload.status === USER_STATUS.INACTIVE}>
            <LuUserX />
            Inativar
          </Button>
          <Button
            onClick={handlePatchUser}
            bg='green.500'
            disabled={payload.status === USER_STATUS.ACTIVE}>
            <LuUserCheck />
            Ativar
          </Button>
          <IconButton
            size="md"
            bg="red.500"
            onClick={handleDeleteUser}
          >
            <LuTrash />
          </IconButton>
        </Flex>
      </Table.Cell>
    </Table.Row>
  )
}