'use client'

import { Table } from "@chakra-ui/react";
import { UsersTableRow } from "./users-table-row";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../lib/api/get-users";

export function UsersTable() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  if (isLoading) return <p>Carregando...</p>

  return (
    <Table.Root variant='outline' size="lg">
      <Table.Header bg="gray.50">
        <Table.Row>
          <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
            Nome
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
            Usuário
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
            Perfil
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
            Status
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
            Ação
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data && data.map((user) => (
          <UsersTableRow key={user.id} payload={user} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}