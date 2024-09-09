import React from 'react';
import { Box } from "@chakra-ui/react";
import Navbar from '../../../components/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import CodeEditor from './CodeEditor2';
import theme from './theme';
import Two from '../../../components/two';
import Submit from './submit_two';
const Second = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Two />
        <Box w="80%" minH="90vh" bg="#0f0a19" top="50vh" left="10vw" position="absolute" color="gray.500" px={5} py={8}>
          <CodeEditor />
        </Box>
      </ChakraProvider>

    </>
  );
};

export default Second;