import {httpRequest} from "../../server/host"

const API_ROOT='http://213.230.99.101:2027'

export const getRequest = () =>{
    const config = {
        url:`${API_ROOT}/api/admin/students`,
        method:'get'
    }
    return httpRequest(config)
}

export const createRequest = (params) =>{
    const config = {
        url:`${API_ROOT}/api/admin/student/save`,
        method:'post',
        data:params
    }
    return httpRequest(config)
}

export const deleteRequest=(id)=>{
    const config={
        url:`${API_ROOT}/api/admin/student/delete/${id}`,
        method:'delete',
    }
    return httpRequest(config);
}

export const editRequest = (id,params) =>{
    const config = {
        url:`${API_ROOT}/api/admin/student/edit/${id}`,
        method:'put',
        data:params
    }
    return httpRequest(config)
}
