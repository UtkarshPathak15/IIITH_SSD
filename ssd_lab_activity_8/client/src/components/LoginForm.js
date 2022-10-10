import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3000/";

// functional component
function LoginForm(props) {
    const [roll, setrollno] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const navigateToStudent = () => {
        navigate('/student');
    }

    return (
    <div className="center-div">
        <h1 className='text-center'>Re-Eval Portal</h1>
        <form className='form-group'>
            <label className='m-2 form-label' value="Roll No"></label>
            <br/>
            <input className='m-2 form-control' type="text" name="rollno" value={roll} onChange={(e) => setrollno(e.target.value)}/>
            <br/>
            <label className='m-2 form-label' value=""></label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>         
        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    credentials : 'include',
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({roll,password })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setrollno("");
                setPassword("");
                if(res.status == 200) {
                    sessionStorage.setItem("curr_rollno", roll);
                    navigateToStudent();
                }
            }}>Login</button>
            <br/>
            <button className="btn" onClick={()=>
            navigate('/signup')}>Sign Up</button>
            
    </div>);
    
}

export default LoginForm;