'use client'

import { Button } from "@chakra-ui/react"
import { useAuthStore } from "../app/store/auth"
import { redirect } from "next/navigation"

export function SignOutButton() {
  const { logout } = useAuthStore()

  const handleSignOut = () => {
    logout()
    localStorage.removeItem('authToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('auth-storage')
    redirect('/sign-in')
  }

  return (
    <Button
      onClick={handleSignOut}
      bg="blue.400"
      color="white"
      size="md"
      borderRadius="md"
      px={6}
      _hover={{ bg: "blue.500" }}
      _active={{ bg: "blue.600" }}
    >
      Sign Out
    </Button>
  )
}