import { AbsoluteCenter } from '@chakra-ui/react';
import Base from '../../components/base';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
function Round2end() {
    const navigate = useNavigate();
    const [secondsRemaining, setSecondsRemaining] = useState(() => {
        const stored2Time = window.localStorage.getItem("round2ResultTimer");
        return stored2Time ? JSON.parse(stored2Time) : 20;
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
                        navigate('/about3');
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
                <AbsoluteCenter >
                    <div className="round1resultMainBox ">
                        <h2 >ROUND 2 WILL START IN</h2>
                        <h1 >{formatTime(secondsRemaining)}</h1>

                    </div>
                </AbsoluteCenter>
            </Base>




        </>
    );
}

export default Round2end;