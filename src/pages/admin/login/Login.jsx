import { getAdmins } from "../../../utils/requester";
import { useState } from "react";
import '../../../stylesheet/loginpage.css'

const Login = ({ setLogged, setPageMode }) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  function formError(){
    const elements = document.querySelectorAll('.login-input');
    const errClass = 'login-err';

    elements.forEach(element=>{
      element.classList.add(errClass);
      setTimeout(function() {
        element.classList.remove(errClass);
      }, 1000);
    });
  }

  function formSuccess(){
    setLogged(true);
    setPageMode(1);
  }

  async function formSubmission(){
    try{
      const loginPassed = await getAdmins({
        "name": name, "password": password
      });
      if(loginPassed)
        formSuccess();
    }
    catch(err){
      formError();
      console.log(name,password)
    }
  }

  return (
    <div id='loginContainer' 
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
      }}>
      <div 
      className="shadow-lg"
      style={{
        padding: "40px", 
        borderRadius: "8px", 
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
        width: "400px", 
        textAlign: "center",
        border:'1px solid black'
      }}>
        <h2 style={{ marginBottom: "20px", color: "#007bff" }}>Admin Registration</h2>

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", fontSize:'2rem' }}>
          Username
        </label>
        <input 
          className="login-input" 
          type="text" 
          placeholder="Enter Admin Username" 
          onChange={changeName} 
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "4px", border: "1px solid #ccc"}}
        />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", fontSize:'2rem' }}>
          Password
        </label>
        <input 
          className="login-input" 
          type="password" 
          placeholder="Enter Admin Password" 
          onChange={changePassword} 
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "4px", border: "1px solid #ccc" }}
        />

        <button 
          id="login-btn" 
          onClick={formSubmission} 
          style={{ 
            backgroundColor: "#007bff", 
            color: "white", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer",
            fontSize:'2rem'
          }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
