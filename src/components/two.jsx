import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from './navbar';
import "../stylesheet/ques.css";
import starlogo from "./../assets/images/star_pattern.png";
const Two = () => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get('https://byte-0dmt.onrender.com/api/questions/round2');
        // console.log("response", response.data);

        // Assuming the response data is an array of questions
        if (response.data.length > 1) {
          setQuestionData(response.data[1]); // Set the second question (index 1)
          localStorage.setItem("r2q2",response.data[1]._id);
        } else {
          setQuestionData(null); // Not enough questions available
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
    <div style={{ fontSize: '1.2rem' }} className="ques ques-one-box">
      <h1>Ques-2</h1>
      <p>{questionData ? questionData.question : 'No question data available'}</p>
      <img src={starlogo} alt="" />
    </div>
  );
}

export default Two;
