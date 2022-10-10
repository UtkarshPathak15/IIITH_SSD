import { useState } from "react"

const reducer =(state,action)=>{
switch(action.type)
{
    case "SET_LOADING":
        return{
            ...state,
            isLoading: true,
        }
    case "GET_STORIES":
        return{
            ...state,
            isLoading: false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages,


        }
    case "REMOVE_POST":
        return{
          ...state,
          hits: state.hits.filter(
            (curElement)=> curElement.objectID != action.payload
            ), 
        };
    case "SEARCH_QUERY":
        return{
        ...state,
        query:action.payload,
        };   
        
    case "PREV_PAGE":
        let pagen = state.page;
        if(pagen<=0)
        {
        pagen=0;
        }
        else
        pagen = pagen-1;
        return{
         ...state,
         page:pagen,
        }


    case "NEXT_PAGE":
        let pagen2 = state.page;
        if(pagen2>state.nbPages)
        {
        pagen2=0;
        }
        else
        pagen2 = pagen2+1;
        return{
        ...state,
        page:pagen2,
        }
}
return state;
};


export default reducer;