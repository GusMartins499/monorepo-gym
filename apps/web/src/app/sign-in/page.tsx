import { Flex } from "@chakra-ui/react";
import { LoginForm } from "../../components/sign-in-form";

export default function SignIn() {
  return (
    <Flex
      minH={'100vh'}
      align='center'
      justify='center'
      direction='column'>
      <LoginForm />
    </Flex>
  )
}