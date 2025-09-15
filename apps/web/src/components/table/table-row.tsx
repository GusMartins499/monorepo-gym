import { Table, Text } from "@chakra-ui/react";

interface IMCTableRowProps {
  payload: {
    id: string
    height: number
    weight: number
    imc: number
    classification: string
  }
}

export function IMCTableRow({ payload }: IMCTableRowProps) {
  return (
    <Table.Row key={payload.id} _hover={{ bg: "gray.50" }}>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.height.toFixed(2)}m
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.weight}kg
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="600" color="blue.600">
        {payload.imc.toFixed(1)}
      </Table.Cell>
      <Table.Cell textAlign="center">
        <Text
          fontWeight="600"
          color={
            payload.classification === 'NORMAL' ? 'green.600' :
              payload.classification === 'OVERWEIGHT' ? 'orange.600' :
                payload.classification === 'OBESE_I' ? 'red.600' :
                  'gray.600'
          }
        >
          {payload.classification}
        </Text>
      </Table.Cell>
    </Table.Row>
  )
}