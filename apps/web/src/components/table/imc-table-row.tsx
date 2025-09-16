import { IconButton, Table, Text } from "@chakra-ui/react";
import { LuPencil, LuTrash } from "react-icons/lu";
import { useDialogStore } from "../../app/store/dialog-store";
import { UpdateImcForm } from "../update-imc-form";
import { useAuthStore } from "../../app/store/auth";
import { DeleteImc } from "./delete-imc-button";

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
  const user = useAuthStore(({ user }) => user)
  const isAdmin = user?.role === "ADMIN"

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
            payload.classification === 'UNDERWEIGHT' ? 'gray.400' :
              payload.classification === 'NORMAL' ? 'green.400' :
                payload.classification === 'OVERWEIGHT' ? 'yellow.600' :
                  payload.classification === 'OBESE_I' ? 'orange.500' :
                    payload.classification === 'OBESE_II' ? 'orange.700' :
                      payload.classification === 'OBESE_III' ? 'red.600' : 'gray.600'
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
          marginX={2}
          size="xs"
          bg="orange.600"
          onClick={() =>
            openDialog("Editar avaliação", <UpdateImcForm payload={payload} />)
          }
        >
          <LuPencil />
        </IconButton>
        {isAdmin ? (
          <DeleteImc id={payload.id} />
        ) : null}
      </Table.Cell>
    </Table.Row>
  )
}