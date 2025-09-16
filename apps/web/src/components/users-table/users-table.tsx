import { Table } from "@chakra-ui/react";
import { UsersTableRow } from "./users-table-row";

export function UsersTable() {
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
        <UsersTableRow />
      </Table.Body>
    </Table.Root>
  )
}