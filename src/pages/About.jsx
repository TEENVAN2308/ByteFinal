import '../stylesheet/About.css'
import Base from '../components/base';
import React from 'react';
function About() {
    return (
        <>
            
            <Base>
            <div className="about-box2">
                <h2>Preliminary Round -3- minutes</h2>
                <p className='mt-4'>1. This is a preliminary round consisting 20 question under 30 minutes</p>
                <p className='mt-3'>2. Given a programm, assess it and debut it or choose the best option</p>
                <hr />
                <h2 className='mt-3'>Contest Rules</h2>
                <p className='mt-4'>1. Each team can have maximum of two members</p>
                <p className='mt-3'>2. Only c,c++ and java programming Languages are alowed</p>
                <p className='mt-3'>3. The round's results are not subject to discussion</p>
                <p className='mt-3'>4. The decision of the judges is final</p>

            </div>

            <div className="about-box3 w-50 container">
                <a href="/" className='btn btn-warning'>Go Back</a>
                <a href="/" className='btn btn-success'>Round 1</a>
                <a href="/" className='btn btn-danger'>Round 2</a>
            </div></Base>
           

            

        </>
    );
}

export default About;
