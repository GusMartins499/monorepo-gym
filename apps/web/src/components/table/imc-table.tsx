'use client'

import { Table } from "@chakra-ui/react";
import { IMCTableRow } from "./imc-table-row";
import { ImcFilter } from "./imc-filter";
import { useQuery } from "@tanstack/react-query";
import { getImcs } from "../../lib/api/get-imcs";

export function ImcTable() {
  const { data, isLoading } = useQuery({
    queryKey: ['imcs'],
    queryFn: getImcs
  })

  if (isLoading) return <p>Carregando...</p>

  return (
    <>
      <ImcFilter />
      <Table.Root variant='outline' size="lg">
        <Table.Header bg="gray.50">
          <Table.Row>
            <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
              Aluno
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
              Altura
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
              Peso
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
              IMC
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
              Classificação
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
              Realizado em
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data && data.map((item) => (
            <IMCTableRow key={item.id} payload={item} />
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}