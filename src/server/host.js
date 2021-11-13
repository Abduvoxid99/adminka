import axios from "axios";
import {getToken} from "../utilits";

export function httpRequest(config) {
    return axios({
        ...config,
        headers:{
            "Content-type": "Application/json",
            "Authorization": getToken()?`Bearer `+getToken() : ''
        }
    })
}