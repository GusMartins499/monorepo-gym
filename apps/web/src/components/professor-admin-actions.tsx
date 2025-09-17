'use client'

import { Flex, Button } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import { CreateImcForm } from "./create-imc-form";
import { CreateUserForm } from "./create-user";
import { useDialogStore } from "../app/store/dialog-store";
import { useAuthStore } from "../app/store/auth";

export function ProfessorOrAdminActions() {
  const { openDialog } = useDialogStore()
  const user = useAuthStore(({ user }) => user)
  const isAdmin = user?.role === "ADMIN"

  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} mb='1.5rem'>
      {isAdmin ? (
        <Button bg='blue.500' onClick={() =>
          openDialog("Adicionar usuário", <CreateUserForm />)
        }>
          <LuPlus />
          Usuário
        </Button>
      ) : null}
      <Button bg='blue.500' onClick={() =>
        openDialog("Adicionar avaliação", <CreateImcForm />)
      }>
        <LuPlus />
        Avaliação
      </Button>
    </Flex>
  )
}