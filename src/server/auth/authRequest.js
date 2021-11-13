import { httpRequest} from "../host";
import {deleteLocalStorage} from "../../utilits";

const API_ROOT='http://213.230.99.101:2027'

export const signIn=(data)=>{
    const config={
        url:`${API_ROOT}/api/auth/signin`,
        method:'post',
        data:data
    }
    return httpRequest(config);
}

export const signOut=()=>{
    deleteLocalStorage('token');
    window.location.reload();
}

export const authMe=()=>{
    const config={
        url:`${API_ROOT}/api/auth/me`,
        method:'get'
    }
    return httpRequest(config);
}