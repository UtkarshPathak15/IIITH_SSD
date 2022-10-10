import React, { useReducer,useEffect} from 'react';
import reducer from './reducer';


let API = "http://hn.algolia.com/api/v1/search?";
let ADV = "https://picsum.photos/1200/100";


const INTV = 3000;


const intialState = {
isLoading: true,
query: "",
nbPages: 0,
page: 0,
hits: [],
};
const AppContext = React.createContext();

const AppProvider =({children})=>{

    //const[state,setstate]=useState(intialState);
    const[state,dispatch]= useReducer(reducer,intialState);
    

// const fetchApiData = async(url) =>{
    
//     dispatch({type: "SET_LOADING"});
//     try{
//         const res = await fetch(url); 
//         const data = await res.json();  
//         console.log(data); 
//         dispatch({
//         type:"GET_STORIES",
//         payload: {
//           hits: data.hits,
//           nbPages: data.nbPages,
//         }
//     })
//         //isLoading = false; 
//     }
//     catch(error){
//         console.log(error);
//     }
// }

const prom1 = (url) => {
    const  p = new Promise((resolve,reject)=>{
        fetch(url).then((res)=>{
            resolve(res);
        })
    })
    return p;
}

const fetchApiData = (url) =>{
    
    dispatch({type: "SET_LOADING"});
    try{
        let data;
        prom1(url).then((res) => res.json().then((r) => 
        dispatch({
            type:"GET_STORIES",
            payload: {
              hits: r.hits,
              nbPages: r.nbPages,
            }
        })
        )); 
        
        //isLoading = false; 
    }
    catch(error){
        console.log(error);
    }
}


//removing post
const removePost = (post_ID)=>{
    dispatch({type: "REMOVE_POST",payload: post_ID});
};

const searchPost =(searchQuery)=>{
dispatch({
    type:"SEARCH_QUERY",
    payload: searchQuery,
});  
};

const getNextPage=()=>{
    dispatch({
        type:"NEXT_PAGE",        
    });
};

const getPrevPage=()=>{
    dispatch({
        type:"PREV_PAGE",        
    });
};






useEffect(()=>{
fetchApiData(`${API}query=${state.query}&page=${state.page}&`);

}, [state.query,state.page]);

    return(
        <AppContext.Provider value={{...state,removePost,searchPost,getPrevPage,getNextPage}}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext, AppProvider};

