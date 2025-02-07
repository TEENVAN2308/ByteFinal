import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "./api";
import axios from "axios";
import Submit from "./submit_one";
const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      if(result.output){
        setOutput("code has been compiled");
      }
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="90vw" mt="10vh">
      <hr />
      <Text mb={2} p={10} fontSize="4xl" >
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
        fontSize="2xl"
        padding="20px"
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        fontSize="2xl"
        padding="20px"
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowX="hidden"
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
     
    </Box>

  );
};
export default Output;
