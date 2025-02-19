import "./adminfile.css"
import { Navigate, useNavigate} from "react-router-dom";

const AdminPanel = ({ setPageMode }) => {
  const navigate=useNavigate();
  // function makeQuestions(){
  //     setPageMode(2)
  // }

  function viewResults(){
      navigate("/viewRes");
  } 


  return (
    <div className="mt-20 ml-40" id='menuContainer'>
      {/* <h3 className="text-6xl text-yellow-500"> BYTE -2024 </h3> */}
      <br />
      <h3 className="text-5xl"> Admin Panel </h3>
      <br /> <br /> <br /> 
      <div>
    <button className="text-3xl bg-violet-500 p-4 admin-buttons mt-5 w-3/4" onClick={viewResults}> View Results </button>
      </div>
    </div>
  )
}

export default AdminPanel