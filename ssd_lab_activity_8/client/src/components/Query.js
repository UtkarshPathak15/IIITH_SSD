import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const BACKEND_URI = "http://localhost:3000/";

function Query(props) {
    const navigate = useNavigate();
    const[exam,setExam]=useState("");
    const[course,setCourse]=useState("");
    const[qNo,setQNo]=useState("");
    const[comment,setComment]=useState("");

async function handleQuery(){
    const requestOptions = {
        credentials : 'include',
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({exam,course,qNo,comment })
    };

    var res = await fetch(BACKEND_URI + "query", requestOptions);
                alert((await res.json())["msg"]);
                setExam("");
                setCourse("");
                setQNo("");
                setComment("");

                if(res.status == 200) {
                   // sessionStorage.removeItem("curr_email");
                    navigate('/student');
                }

    } 
    return(
    <div className="con">    
    <h1>QUERY FORM</h1>
       <div className="wrap">
        <label name="roll" className="label">Exam Name</label>
        <input type="text" className="id3"  id="exam" placeholder="Exam" value={exam} onChange={(e) => setExam(e.target.value)}/>
        
        <label name="password" className="label">Course Name</label>
        <input type="text" className="id3"  id="ques" placeholder="Question No" value={course} onChange={(e) => setCourse(e.target.value)}/>

        <label name="password" className="label"><b>Question No</b></label>
        <input type="password" className="id3"  id="ques" placeholder="Question No" value={qNo} onChange={(e) => setQNo(e.target.value)}/>
        
        <label name="password" className="label">Comments</label>
        <input type="password" className="id3"  id="comment" placeholder="Comments" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button className="button" onClick={handleQuery}>Post</button>
        </div> 
      </div>
    );
}

export default Query;