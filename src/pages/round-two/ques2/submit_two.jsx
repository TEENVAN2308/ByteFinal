import React from 'react'
import "../../../stylesheet/ques.css"
import { useNavigate } from 'react-router-dom';

const Submit = ({ sourceCode, language }) => {
    const navigate = useNavigate();

    const handleSubmit_two = async () => {

        // Show confirmation alert
        const confirmed = window.confirm("Are you sure you want to submit? You cannot resubmit again!");

        if (confirmed) {
            navigate("/about3");
            sendtobacks();
        }
    };
        //ye hai sendback function
        const sendtobacks = async () => {
            const questionId=localStorage.getItem("r2q2");
        const sourceCodeSend=sourceCode.current.getValue();
        const teamName=localStorage.getItem("teamName");
            try {
                const response = await fetch('http://localhost:3000/api/questions/submit-code', {
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
        <button type='submit' onClick={handleSubmit_two} className='submit-two'>submit-two</button>
    )
};
export default Submit;