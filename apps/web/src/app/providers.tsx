'use client'

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../lib/tankstack-client"

export default function Providers(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </ChakraProvider>
  )
}