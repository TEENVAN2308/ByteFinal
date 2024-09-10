import '../stylesheet/About.css'
import Base from '../components/base';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
function About() {
    return (
        <>

            <Base>

                <div className="about-box2 mt-3">
                    <h2 style={{ fontSize: '5rem', marginTop: '3rem' }}>Phase 1: Quiz Round</h2>
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}>1. The first round is a Psuedo Code Based Quiz round where all participants will be tested on their foundational
                        knowledge of programming languages, such as C, C++, python, and java.
                    </p>
                    <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>2.The Quiz will consist of 20 multiple-choice questions, which must be answered within 30 minutes.</p>
                    <h2 className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>3:Each question carry one mark.</h2>
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}>4:Winners will be determined based on the total marks a team earns. In the case of a tie, the submission time will be 
                    considered</p>
                    <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>5.Only the top 20 teams will qualify for the second round. </p>

                </div>

                <div className="about-box3 ">
                    <Link to="/" className='btn btn-warning' style={{ fontSize: '2rem' }}>Go Back</Link>
                    <Link to="/round1new" className='btn btn-success' style={{ fontSize: '2rem' }}>Round 1</Link>
                </div>

            </Base>




        </>
    );
}

export default About;
