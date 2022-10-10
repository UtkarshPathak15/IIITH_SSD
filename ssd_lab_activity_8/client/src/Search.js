import React,{useContext} from "react"
import { AppContext } from "./context";

const Search = ()=> {
  const {query,searchPost} = useContext(AppContext);
  return(
    <>
    <div>
    <h1>PATHAK EXPRESS</h1> 
    <form onSubmit={(e)=> e.preventDefault()}>
    <input type="text" placeholder="Search Here" 
    value={query}
    onChange={(e)=> searchPost(e.target.value)}>
    </input> 
    </form> 
    </div>
    </>
  );
};

export default Search;