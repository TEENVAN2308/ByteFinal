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
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}>1.The third round is a mystery hackathon, where five hidden challenges will be displayed on the finalist screens.
                    </p>
                    <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>2.After selecting any single problem among those five, the team have to solve this particular challenge within 100 
                    minutes</p>
                    <h2 className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>3.Teams may use IDE(offline compiler only) on the basis of their choice of programming language</h2>
                    <p className='mt-4' style={{ fontSize: '2rem', marginTop: '3rem' }}> Judging Criteria: <br />
                    -<strong> Task completion(10 marks) :</strong> Does the Software/System work as intended? Does it perform the desired task or solve the problem?
                     <br/> -<strong> Approach to solving the problem(10 marks) :</strong> Defines algorithm used to solve the problem, and is the code well-organised,readable and maintainable? <br />
                    -<strong> Efficiency(10 marks)</strong></p>
                     <p className='mt-3' style={{ fontSize: '2rem', marginTop: '3rem' }}>4:Jugdement given by jury members will be final. </p>
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
