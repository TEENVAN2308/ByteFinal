import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
const Submit = ({ sourceCode, language }) => {
    const navigate = useNavigate();

    const handleSubmit_two = async () => {

        // Show confirmation alert
        const confirmed = window.confirm("Are you sure you want to submit? You cannot resubmit again!");

        if (confirmed) {
            navigate("/round2end");
            sendtobacks();
        }
    };
        //ye hai sendback function
        const sendtobacks = async () => {
            const questionId=localStorage.getItem("r2q2");
        const sourceCodeSend=sourceCode.current.getValue();
        const teamName=localStorage.getItem("teamName");
            try {
                const response = await fetch('https://byte-0dmt.onrender.com/api/questions/submit-code', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    code: sourceCodeSend,
                    teamName:teamName ,
                    language:language,
                    questionId:questionId,
                    }),
                }).then((response) => response.json())
                    .then((json) => console.log(json));
                // if (response.ok) {
                //     const result = await response.json();
                //     console.log('Data successfully sent!', result); // Success
                // } else {
                //     console.error('Error sending data:', response.statusText); // Handle errors
                // }
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
                        <button type='submit' onClick={handleSubmit_two} className='submit-two'>Submit</button>
                        </Button>
                    </Flex>
                </>
        //
    )
};
export default Submit;