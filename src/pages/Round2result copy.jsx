import '../stylesheet/round1result.css'
import Base from '../components/base';
// import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
function Round2result() {
    const navigate = useNavigate();
    const [secondsRemaining, setSecondsRemaining] = useState(() => {
        const storedTime = window.localStorage.getItem("round2ResultTimer");
        return storedTime ? JSON.parse(storedTime) : 1200;
    });

    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect(() => {
        window.localStorage.setItem("round2ResultTimer", JSON.stringify(secondsRemaining));
    }, [secondsRemaining]);


    useEffect(() => {
        // Navigate immediately if the timer is already 0
        if (secondsRemaining === 0) {
            navigate('/about3');
            return;
        }

        let timer;
        if (isTimerRunning && secondsRemaining > 0) {
            timer = setInterval(() => {
                setSecondsRemaining((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        clearInterval(timer);
                        setIsTimerRunning(false);
                        navigate('/rules');
                        return 0;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, secondsRemaining, navigate]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsPart = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
    };

    

    return (
        <>

            <Base>
                <div className="round1resultMainBox mt-3">
                    <div className="round1resultTimer shadow-lg" style={{ marginTop:'15rem', color:'white' }}>
                        <h1 style={{color:"red", fontSize:'7rem'}}>{formatTime(secondsRemaining)}</h1>
                        <h1 style={{fontFamily:"sans-serif"}}>ROUND 3 WILL START IN</h1>
                    </div>
                    {/* <div className="round1YourResult" style={{color:"white"}}>
                        <h1>your result</h1>
                    </div> */}

                </div>




            </Base>




        </>
    );
}

export default Round2result;
