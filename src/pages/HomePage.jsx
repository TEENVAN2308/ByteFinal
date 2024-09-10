import { React, useState } from 'react';
import { postTeam } from '../utils/postTeam'

import classes from '../stylesheet/Home.module.scss';

import { Outlet, Link, useNavigate } from "react-router-dom";
import adminlogo from '../assets/logo/user.png';
import { background } from '@chakra-ui/react';

function Home() {
    const [teamName, setTeamName] = useState('');
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            // Call your API request here
            await handleTeamSubmit();

            // After successful request, redirect to /rules
            navigate('/rules');
        } catch (error) {
            console.error('Error submitting team:', error);
        }
    };

    const handleTeamSubmit = async (event) => {
        const input = document.getElementById("team").value;
        console.log("Input", input)
        setTeamName(input);

        try {
            await postTeam(input);
            localStorage.setItem("teamName", input);
            console.log("Team Name", input)
        } catch (error) {
            console.log("Error", error)
        }
    };
    return (
        <>

            {/* pageCover */}
            <div className={classes.pageCover}>


                <div className={`shadow-lg position-absolute top-50 start-50 translate-middle ${classes.box}`}>
                    <div className={classes.box1}>

                    </div>
                    <div className={classes.box2}>

                    </div>
                </div>

                <div className={`position-absolute top-50 start-50 translate-middle ${classes.innerBorder1}`}>

                </div>
                <div className={`shadow-lg position-absolute top-50 start-50 translate-middle ${classes.innerBorder2}`}>
                    <div className={classes.mainInner1}>
                        <div className={`mt-5 ms-5 p-5 ps-5 container`} style={{ color: "white" }}>
                            <h1 className={`pb-3 ${classes.byte_title}`} style={{ fontSize: '6rem' }}>BYTE <p style={{ color: "white", fontSize: '2rem' }}>2024</p> </h1>

                            <div className="mb-3">
                                <div className="mb-3 w-50 inputbox">

                                    <input type="text" id="team" className="w-85" style={{ fontSize: '1.7rem', color: "white", }}  placeholder='Team Name' />
                                </div>
                            </div>
                            <button onClick={handleClick}>
                                <Link
                                    type="button"
                                    to="#"
                                    style={{ color: "white", fontSize: '2rem', marginTop: '1.5rem' }}
                                    className={`btn ${classes.custombtn} rounded-pill ps-5 pe-5`}
                                >
                                    Start
                                </Link>
                            </button>


                        </div>
                        <div className={classes.homecodexlogo}>

                        </div>
                    </div>
                    <div className={classes.mainInner2}>
                        <div className="admin" >
                            <img src={adminlogo} style={{ margin: '2rem' }} height={"50px"} width={"50px"} alt="" />
                            <Link className='admin-button' to={'/admin'}>Admin</Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Home;
