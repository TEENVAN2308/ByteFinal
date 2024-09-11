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
        const sourceCodeSend=sourceCode.current.getValue();
        const teamName=localStorage.getItem("teamName");
        console.log("sourceCode",sourceCodeSend);
        console.log("language",language);
        console.log()
        try {
            const response = await fetch('http://localhost:3000/api/questions/submit-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    teamName:teamName ,
                    questionId:1,
                    code: sourceCodeSend,
                    language:language,
                }),
            }).then((response) => response.json())
                .then((json) => console.log(json));
            if (response.ok) {
                const result = await response.json();
                console.log('Data successfully sent!', result); // Success
            } else {
                console.error('Error sending data:', response.statusText); // Handle errors
            }
        } catch (error) {
            console.error('Network error:', error); // Handle network errors
        }
    };


    return (
        <button type='submit' onClick={handleSubmit} className='submit'>submit</button>
    );
}

export default Submit;