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
        <Box w="95%" minH="60vh"  bg="#0f0a19a6" margin={{base:'5',md: '40px',lg:'50px'}} color="gray.500" px={5} py={8} marginRight={9} >
          <CodeEditor />
        </Box>
        <div h="80%"> </div>
      </ChakraProvider>

    </>
  );
};

export default Second;