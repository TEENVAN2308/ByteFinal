import { getAdmins } from "../../../utils/requester";
import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Heading,
  VStack,
  useToast,
  FormControl,
  FormLabel,
  Container,
} from "@chakra-ui/react";

const Login = ({ setLogged, setPageMode }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const changeName = (event) => setName(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);
console.log(changeName)
console.log(changePassword)
  const formError = () => {
    toast({
      title: "Login failed",
      description: "Invalid username or password.",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const formSuccess = () => {
    setLogged(true);
    setPageMode(1);
  };

  async function formSubmission() {
    try {
      const loginPassed = await getAdmins({ name, password });
      if (loginPassed) formSuccess();
      else formError();
    } catch (err) {
      formError();
    }
  }

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bg="gray.100"
  >
    <VStack
      spacing={5}
      p={8}
      boxShadow="lg"
      bg="white"
      borderRadius="md"
      width={{ base: "90%", md: "400px" }}
    >
      <Heading fontSize="2xl">Admin Login</Heading>
      <Input
        placeholder="Admin Name"
        value={name}
        onChange={changeName}
        fontSize="lg"
        p={4}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={changePassword}
        fontSize="lg"
        p={4}
      />
      <Button colorScheme="blue" fontSize="lg" p={4} width="full">
        Login
      </Button>
    </VStack>
  </Box>
);
};

export default Login;
