import {useEffect,useState} from 'react'
import fetch from 'isomorphic-fetch'
import {getCookie,API} from '../actions/auth'
import {handleResponse} from '../actions/auth'

const Protected = ({children}) => {
    const [isLoading,setLoading] = useState(true)
    useEffect(async () => {
       await fetch(`${API}/user-route`,{
            headers:{
                Authorization:`Bearer ${getCookie('token')}`
            }
        }).then((res)=>{
            handleResponse(res)
            if(res.ok) setLoading(false)
        }).catch((err)=>console.log(err))
    }, [])
    return (
        <>
          {isLoading?'':children}  
        </>
    )
}

export default Protected
