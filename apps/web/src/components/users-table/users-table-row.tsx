import { Button, Table } from "@chakra-ui/react";
import { LuUserX } from "react-icons/lu";

export function UsersTableRow() {
  return (
    <Table.Row _hover={{ bg: "gray.50" }}>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        Gustavo
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        gusmartins
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        Admin
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        Ativo
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="600">
        <Button bg='red.500'>
          <LuUserX />
          Inativar
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}