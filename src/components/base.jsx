import React from 'react'
import CustomNavbar from './navbar';

const Base = ({children }) => {
  return (
    <div className="container-fluid">
  
       <CustomNavbar/>

        { children }
        
        </div>
  );
}

export default Base;