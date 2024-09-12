import React from "react";

const SendBack = ({output}) => {
     const sendtobacks = async () => {
        try {
            const response = await fetch('http://localhost:5173/ques-one/getname', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set content type to JSON
                },
                body: JSON.stringify({
                    outputs:output,
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
        <>
            <div className="hi"></div>
        </>
    );
};
export default SendBack;