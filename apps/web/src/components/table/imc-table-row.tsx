import { IconButton, Table, Text, useDisclosure } from "@chakra-ui/react";
import { LuPencil } from "react-icons/lu";
import { useDialogStore } from "../../app/store/dialog-store";
import { UpdateImcForm } from "../update-imc-form";

interface IMCTableRowProps {
  payload: {
    id: string
    height: string
    weight: string
    imc: string
    classificationLabel: string
    classification: string
    createdAt: string
    student: string
    studentId: string
  }
}

export function IMCTableRow({ payload }: IMCTableRowProps) {
  const { openDialog } = useDialogStore()

  return (
    <Table.Row key={payload.id} _hover={{ bg: "gray.50" }}>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.student}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.height}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="500" color='gray.600'>
        {payload.weight}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="600" color="blue.600">
        {payload.imc}
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
          {payload.classificationLabel}
        </Text>
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="600" color="blue.600">
        {payload.createdAt}
      </Table.Cell>
      <Table.Cell textAlign="center" fontWeight="600">
        <IconButton
          size="xs"
          bg="orange.600"
          onClick={() =>
            openDialog("Editar avaliação", <UpdateImcForm payload={payload} />)
          }
        >
          <LuPencil />
        </IconButton>
      </Table.Cell>
    </Table.Row>
  )
}