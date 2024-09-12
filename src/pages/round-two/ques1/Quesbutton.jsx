// QuesButtons.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../stylesheet/QuesButtons.css";  // Add styles here

const QuesButtons = () => {
  return (
    <div className="ques-buttons">
      
      <Link to="/ques-one"> <button className="ques-btn">Ques1</button></Link>
    
    <Link to="/ques-two"> <button className="ques-btn">Ques2</button></Link>
        
      
      
    </div>
  );
};

export default QuesButtons;
