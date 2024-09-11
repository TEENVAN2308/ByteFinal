import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from './navbar';
import "../stylesheet/ques.css";

const One = () => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/questions/round2');
        console.log("response", response.data);

        // Assuming the response data is an array of questions
        if (response.data.length > 0) {
          setQuestionData(response.data[0]); // Set the first question
          localStorage.setItem("r2q1",response.data[0]._id);
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
    <div style={{ fontSize: '2.2rem' }} className="ques ques-one-box">
      <h1>Ques-1</h1>
      {/* <p><strong>Question ID:</strong> {questionData ? questionData._id : 'No ID available'}</p> */}
      <p>{questionData ? questionData.question : 'No question data available'}</p>
    </div>
  );
}

export default One;
