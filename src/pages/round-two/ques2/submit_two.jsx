import React from 'react'
import "../../../stylesheet/ques.css"
import { useNavigate } from 'react-router-dom';

const Submit = (output) => {
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
            console.log("Output", output);  
            try {
                const response = await fetch('http://localhost:5000/api/compile/compile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        outputs: output,
                        teamName: localStorage.getItem("teamName"),
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
        <button type='submit' onClick={handleSubmit_two} className='submit-two'>submit-two</button>
    )
};
export default Submit;