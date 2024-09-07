
import { React, useState } from 'react';
import Base from '../components/base'
// import './style.css'

import '../stylesheet/Home.css';
import Navbar from '../components/navbar';
import { Outlet, Link } from "react-router-dom";

function Home() {
    const [teamName, setTeamName] = useState('');

    const handleInputChange = (event) => {
        setTeamName(event.target.value);
    };
    return (
        <>
       
            {/* <Base> */}
          
            <div className="box">
                <div className="box1">

                </div>
                <div className="box2">

                </div>
            </div>

            <div className="innerBorder1">

            </div>
            <div className="innerBorder2">
             
                <div className="mainInner1">
                    <div className='container'>
                         <div className='byte_title'>BYTE 1.0</div>

                        <div className="">
                            <div className="inputbox">

                                <input type="text" className="w-85" id="exampleInputPassword1" placeholder='Team Number' />
                            </div>
                        </div>
                        <Link type="button" to={'/rules'} style={{color:"white"}} className="butt">Start</Link>

                    </div>
                </div>
                <div className="mainInner2"></div>
            </div>
            <div className="esi">
            </div>
        {/* </Base> */}
                
            
            
        </>
    );
}

export default Home;
