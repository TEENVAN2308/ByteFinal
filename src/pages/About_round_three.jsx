import '../stylesheet/About.css'
import Base from '../components/base';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
function About3() {
    return (
        <>
            
            <Base>
           
            <div className="about-box2 mt-3">
                    <h2 style={{ fontSize: '5rem', marginTop: '3rem' }}>Phase 3: Mystery Hackathon </h2>
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}>1.The third round is a mystery hackathon, where three hidden challenges will be displayed on the finalist screens.
                    </p>
                    <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>2.After selecting any single problem among those three, the team have to solve this particular challenge within 100 
                    minutes</p>
                    <h2 className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>3:Teams may use IDE on the basis of their choice of programming language</h2>
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}>4:The efficiency, task completion, and approach to solving the problem will be the criteria for the judgement and the
judgement given by jury members will be final.
</p>
                    <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>5.The top 3 teams from this round will be declared as the winners. </p>

                </div>

            <div className="about-box3 ">
                <Link to="/round3" className='btn btn-danger ' style={{fontSize:'2rem'}} >Round 3</Link>
            </div>
            
            </Base>
           

            

        </>
    );
}

export default About3;
