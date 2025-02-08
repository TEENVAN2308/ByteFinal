
import { React, useState } from 'react';
import { postTeam } from '../utils/postTeam'
import "../stylesheet/ques.css"
import "../stylesheet/Homepage.css"
import { Outlet, Link, useNavigate } from "react-router-dom";
import adminlogo from '../assets/logo/user.png';
import logo from "../assets/logo/main_logo.gif"
import Admin from './Admin';
function Home() {
    const [teamName, setTeamName] = useState('');
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const teamName = document.getElementById("team").value;
            if(teamName) {
                await handleTeamSubmit();
                navigate('/rules'); 
            } else {
                alert("Please Fill The Team Name!")
            }
            // After successful request, redirect to /rules
        } catch (error) {
            console.error('Error submitting team:', error);
        }
    };

    const handleTeamSubmit = async (event) => {
        const input = document.getElementById("team").value;
        // console.log("Input", input)
        setTeamName(input);

        try {
            await postTeam(input);
            localStorage.setItem("teamName", input);
            // console.log("Team Name", input)
        } catch (error) {
            console.log("Error", error)
        }
    };
    return (
        <>
       <div className='container'>
        <div className='image-container'>
        <div class="inner-container">
        <div class="box">
            <div class="form-container">
                <h1>  Byte 2024</h1>
                <div class="form-group">
                    <label for="teamName">Team Name</label>
                    <input type="text" id="team"  placeholder="Enter team name"/>
                </div>
                <button onClick={handleClick} class="submit-btn">Start</button>
            </div>
            <img src={logo} alt="Logo" class="logo"/>
        </div>
    </div>

        </div>

       </div>
       <div className="admin">
        <Link to='badmin'>
        <img  height={30}  src={adminlogo} alt="" />
        </Link>
        </div>
        </>
    );
}

export default Home;
