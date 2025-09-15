import { Box, Text } from "@chakra-ui/react";
import { NavBar } from "../components/nav-bar";
import { ImcTable } from "../components/table/imc-table";

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50">
      <NavBar />
      <Box p={8}>
        <Box
          bg="white"
          shadow="md"
          borderRadius="lg"
          p={6}
          maxW="800px"
          mx="auto"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center" color="gray.700">
            Avaliações de IMC
          </Text>
          <ImcTable />
        </Box>
      </Box>
    </Box>
  )
}
