import React from 'react'
// import "../../../stylesheet/ques.css";
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
const Submit = ({ sourceCode, language, questions }) => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const confirmed = window.confirm("Are you sure you want to submit? You cannot resubmit again!");
        if (confirmed) {
            navigate("/ques-two", { replace: true });
            sendtobacks();
        }
    };
    //ye hai sendback function
    const sendtobacks = async () => {
        const questionId = localStorage.getItem("r2q1");
        const sourceCodeSend = sourceCode.current.getValue();
        const teamName = localStorage.getItem("teamName");
        try {
            const response = await fetch('https://byte-0dmt.onrender.com/api/questions/submit-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    teamName: teamName,
                    questionId,
                    code: sourceCodeSend,
                    language: language,
                }),
            }).then((response) => response.json())
        } catch (error) {
            console.error('Network error:', error); // Handle network errors
        }
    };


    return (
        <>
            <Flex direction={'column'} >
                <Text mb={1} ml={1} color={'white'} fontSize={{ base: "13px", lg: "15px", md: "16px" }}>
                    Submit only once!:
                </Text>
                <Button _hover={{ bg: "black.700" }} fontSize="2xl" bg={'black'} mx="10px" mr="5vw"  mb={4} p={10} >
                    <button type='submit' onClick={handleSubmit} className='submit'>Submit</button>
                </Button>
            </Flex>
        </>
        /**
         * <Box ml={2} mb={4} borderRadius={70} width="100%" >
      <Text mb={2} ml={4} fontSize={{base:"1rem",lg:"2rem",md:"3rem"}}>
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton ml={2} mb={4} p={10} fontSize="2xl"  as={Button}>{language}</MenuButton>
         */

    );
}

export default Submit;