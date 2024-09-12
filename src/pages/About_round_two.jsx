import '../stylesheet/About.css'
import Base from '../components/base';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
function About2() {
    return (
        <>
            
            <Base>
           
            <div className="about-box2 mt-3">
                    <h2 style={{ fontSize: '5rem', marginTop: '3rem' }}>Phase 2: Competitive Coding Round</h2>
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}>1.The second round is a logic-based case study coding challenge designed to assess participant’s logic-building skills.
                    </p>
                    <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>2.This round will consist 2 case-study based questions, to be solved within 30 minutes..</p>
                    <h2 className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>3:Each question will be worth 10 points, with 5 points allocated for task completion and 5 points for code efficiency.</h2>
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}>4:The top 5 teams will qualify for the next phase</p>
                    {/* <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>5.Only the top 20 teams will qualify for the second round. </p> */}

                </div>

            <div className="about-box3 ">
            <Link to="/ques-one" className='btn btn-danger ' style={{fontSize:'2rem'}} >Round 2</Link>
            </div>
            
            </Base>
           

            

        </>
    );
}

export default About2;
