import { useContext, useReducer } from "react";
import StateContext from "./ContextProvider";


//Wrap our app and provide the Data layer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//Pull information from the data layer
export const useStateValue=()=>useContext(StateContext)