import { Box, Text } from "@chakra-ui/react";
import { UsersTable } from "apps/web/src/components/users-table/users-table";

export default function Users() {
  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="lg"
      p={6}
      maxW="800px"
      mx="auto"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center" color="gray.700">
        Usuários
      </Text>
      <UsersTable />
    </Box>
  )
}