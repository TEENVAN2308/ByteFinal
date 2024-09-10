import React from 'react';
import { Box } from "@chakra-ui/react";
import Navbar from '../../../components/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import CodeEditor from './CodeEditor';
import theme from './theme';
import One from '../../../components/one';
import Submit from './submit_one';
const First = () => {
  return (
    <>
      <ChakraProvider theme={theme} >
        <Navbar />
        <One />
        <Box w="80%" minH="90vh" bg="#0f0a19a6" top="50vh" left="10vw" position="absolute" color="gray.500" px={5} py={8}>
        <CodeEditor/>
        </Box>
      </ChakraProvider>

    </>
  );
};

export default First;