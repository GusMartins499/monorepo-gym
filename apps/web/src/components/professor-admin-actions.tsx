'use client'

import { Flex, Button } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import { CreateImcForm } from "./create-imc-form";
import { CreateUserForm } from "./create-user";
import { useDialogStore } from "../app/store/dialog-store";

export function ProfessorOrAdminActions() {
  const { openDialog } = useDialogStore()

  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} mb='1.5rem'>
      <Button bg='blue.500' onClick={() =>
        openDialog("Adicionar usuário", <CreateUserForm />)
      }>
        <LuPlus />
        Usuário
      </Button>
      <Button bg='blue.500' onClick={() =>
        openDialog("Adicionar avaliação", <CreateImcForm />)
      }>
        <LuPlus />
        Avaliação
      </Button>
    </Flex>
  )
}