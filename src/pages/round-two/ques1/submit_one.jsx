import React from 'react'
import "../../../stylesheet/ques.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Submit = ({sourceCode,language, questions}) => {
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
        const questionId=localStorage.getItem("r2q1");
        const sourceCodeSend=sourceCode.current.getValue();
        const teamName=localStorage.getItem("teamName");
        try {
            const response = await fetch('https://byte-0dmt.onrender.com/api/questions/submit-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    teamName:teamName ,
                    questionId,
                    code: sourceCodeSend,
                    language:language,
                }),
            }).then((response) => response.json())
                // .then((json) => console.log(json));
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
        <button type='submit' onClick={handleSubmit} className='submit'>submit</button>
    );
}

export default Submit;