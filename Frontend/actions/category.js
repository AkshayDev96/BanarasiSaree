import {API} from '../config'
import axios from 'axios'


export const MakeCategory= async(data)=>{
   return await axios.post(`${API}/category`,data).then((res)=>res).catch((e)=>e)
}

export const  GetCategoryById= async (id)=> {
    return await axios.get(`${API}/category/${id}`)
    .then((res)=>res)
    .catch((e)=>e)
}

export const Update= async (id,data)=> {
    const {name,image} = data
    return await axios.put(`${API}/category/${id}`,{
        name,image
    }).then((res)=>res)
    .catch((e)=>e)
}

export const GetCategories = async()=>{
    return await axios.get(`${API}/categories`)
        .then((res)=>res).catch((e)=>e)
}

export const DeleteCategoryById= async(id)=>{
    return await axios.delete(`${API}/category/${id}`).then((res)=>res).catch((e)=>e)
}