import {CREATE, DELETE, EDIT, GET} from "../types";

const initialState = {
    students:[]
}

export const students = (state = initialState,{type,payload}) =>{
    switch (type) {
        case GET:
            return{
                ...state,
                students:payload
            }
        case CREATE:
            return {
                ...state,
                students: [...state.students,payload]
            }
        case DELETE:
           return {
               ...state,
               students: [...state.students.filter(item => item.id !== payload)]
           }
        case EDIT:
            const index = state.students.findIndex(item =>item.code === payload.code)
            const student = [...state.students.slice(0,index),payload,...state.students.slice(index+1)]
            return {
                ...state,
                students: [...student]
            }
        default:
            return state
    }
}

export default students