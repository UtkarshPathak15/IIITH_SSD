import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../common.css"

const BACKEND_URI = "http://localhost:3000/";

// functional component
function SignUpForm(props) {
    const [roll, setrollno] = useState("");
    const [password, setPassword] = useState("");
    const [role,setRole] = useState("STD"); 

    const navigate = useNavigate();
    const navigateToLogin=()=>{
        navigate('/login');
    }

    return (
    <div className="center-div">
        <h1 className='text-center'>Re-Eval Portal</h1>
        <form className='form-group'>
            <label className='m-2 form-label'></label>
            <br/>
            <input className='m-2 form-control' type="text" name="rollno" placeholder="Roll No" value={roll} onChange={(e) => setrollno(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'></label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>  
            <select className='m-2 form-control' value={role} onChange={(e)=>setRole(e.target.value)} required>
            <option value="STD">Student</option>
            <option value="TA">TA</option>            
            </select>       
        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ roll, password,role})
                };

                var res = await fetch(BACKEND_URI+"signup", requestOptions);
                alert((await res.json())["msg"]);
                setrollno("");
                setPassword("");
                if(res.status==200){
                    sessionStorage.setItem("ROLL",roll);
                navigate('/login');  
                }
            }}>Sign Up</button>
            {/* <button className='m-4'><Link to='/login'>Login Here</Link></button>  */}
    </div>);
}

export default SignUpForm;