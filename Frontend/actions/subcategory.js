import {API} from '../config'
import axios from 'axios'

export const MakeSubcategory= async (category,data)=> {
    return await axios.post(`${API}/subcategory/${category}`,data)
    .then((res)=>res)
    .catch((e)=>e)
}

export const GetSubCategories = async()=>{
    return await axios.get(`${API}/subcategories`)
        .then((res)=>res).catch((e)=>e)
}

export const RemoveSubcategory = async(id)=>{
    return await axios.delete(`${API}/subcategory/${id}`)
        .then((res)=>res).catch((e)=>e)
}

export const GetSubCategoryById= async (id)=> {
    return await axios.get(`${API}/subcategory/${id}`)
    .then((res)=>res)
    .catch((e)=>e)
}

export const Update= async (id,data)=> {
    const {name,image,category} = data
    return await axios.put(`${API}/subcategory/${id}`,{
        name,image,category
    }).then((res)=>res)
    .catch((e)=>e)
}