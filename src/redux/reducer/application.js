import {TOKEN} from "../types";

const initialState = {
    token:null
}

export const token = (state=initialState,{type,payload})=>{
    switch (type) {
        case TOKEN:
            return{
                ...state,
                token:payload
            }
        default:
            return state

    }
}