import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from './navbar';
import { Box } from '@chakra-ui/react';
// import "../stylesheet/ques.css";

const One = () => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get('https://byte-0dmt.onrender.com/api/questions/round2');
        // console.log("response", response.data);

        // Assuming the response data is an array of questions
        if (response.data.length > 0) {
          setQuestionData(response.data[0]); // Set the first question
          localStorage.setItem("r2q1", response.data[0]._id);
        } else {
          setQuestionData(null); // No questions available
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading question: {error.message}</p>;

  return (
    <Box margin={{base:'5',md: '40px',lg:'50px'}}>
      <h1>Ques-1</h1>
      <p>{questionData ? questionData.question : 'No question data available'}</p>
    </Box>
  );
}

export default One;
