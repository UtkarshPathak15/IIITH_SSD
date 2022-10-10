import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3000/";

function Student(props) {
    const navigate = useNavigate();
    return(
       <div className="qb">
       <div className="wrap">
        <h1>FEEDBACK</h1>
        <button className="btn" onClick={()=>
        navigate("/query")}>Add new query</button>
        </div> 
       </div>
    );
}

export default Student;