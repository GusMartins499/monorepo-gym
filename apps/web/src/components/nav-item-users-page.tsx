'use client'

import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from "next/link"
import { useAuthStore } from '../app/store/auth'
import { USER_ROLE } from '../app/utils/user-role'

export function NavItemUsersPage() {
  const user = useAuthStore(({ user }) => user)
  const isAdmin = user?.role === USER_ROLE.ADMIN

  if (isAdmin) {
    return (
      <ChakraLink
        asChild
        fontSize="md"
        color="gray.600"
        _hover={{ color: "gray.800", textDecoration: "none" }}
        fontWeight="500"
      >
        <NextLink href="/users">Usuários</NextLink>
      </ChakraLink>
    )
  }
}