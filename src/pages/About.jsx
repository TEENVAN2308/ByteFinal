import '../stylesheet/About.css'
import Base from '../components/base';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
function About() {
    return (
        <>
            
            <Base>
           
            <div className="about-box2 mt-3">
                <h2 style={{fontSize:'5rem', marginTop:'3rem'}}>Preliminary Round -3- minutes</h2>
                <p className='mt-4' style={{fontSize:'2rem', marginTop:'3rem'}}>1. This is a preliminary round consisting 20 question under 30 minutes</p>
                <p className='mt-3' style={{fontSize:'2rem', marginTop:'3rem'}}>2. Given a programm, assess it and debut it or choose the best option</p>
                <hr />
                <h2 className='mt-3' style={{fontSize:'5rem', marginTop:'3rem'}}>Contest Rules</h2>
                <p className='mt-4' style={{fontSize:'2rem', marginTop:'3rem'}}>1. Each team can have maximum of two members</p>
                <p className='mt-3' style={{fontSize:'2rem', marginTop:'3rem'}}>2. Only c,c++ and java programming Languages are alowed</p>
                <p className='mt-3' style={{fontSize:'2rem', marginTop:'3rem'}}>3. The round's results are not subject to discussion</p>
                <p className='mt-3' style={{fontSize:'2rem', marginTop:'3rem'}}>4. The decision of the judges is final</p>

            </div>

            <div className="about-box3 ">
                <Link to="/" className='btn btn-warning' style={{fontSize:'2rem'}}>Go Back</Link>
                <Link to="/round1" className='btn btn-success' style={{fontSize:'2rem'}}>Round 1</Link>
                <Link to="/round3" className='btn btn-danger ' style={{fontSize:'2rem'}} >Round 2</Link>
            </div>
            
            </Base>
           

            

        </>
    );
}

export default About;
