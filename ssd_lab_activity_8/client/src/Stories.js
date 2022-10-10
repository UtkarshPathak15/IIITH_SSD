import React, { useEffect,useContext,useState } from "react";
import { AppContext } from "./context";

const Stories=()=>{
const [img,setImg] = useState("");

useEffect(() => {
    const interval = setInterval(()=>{
        fetch("https://picsum.photos/200/1000/").then((res)=>{
            setImg(res.url)
        })
    },3000);
},[]);


const {hits,isLoading,removePost,Img}= useContext(AppContext);
if(isLoading)
{
    return(
        <>
        <h1>It's Loading......</h1>
        </>
    )
}



return(
<>
    
    
   
    <img class="side1" src={img}/>
    <img class="side2" src={img}/>
   
    <div className="stories-div">
    
     {hits.map((curPost)=>{
     const {title,author,objectID,url,num_comments}=curPost;
     return (
     <div className="card" key={objectID}>
        <h2>{title}</h2>
        <p>
        By <span> {author}</span> | <span> {num_comments} </span> comments  
        </p>
        <div className="card-button">
        <a href={url} target="_blank">
            Read More
        </a>
        <a href="#" onClick={() => removePost(objectID)}>Remove</a>
        </div>
     </div>
     
     
     
     );
     
     })
     
     }
     

       
        
      
     
     
     </div>
     
     
</>
);
};

export default Stories;