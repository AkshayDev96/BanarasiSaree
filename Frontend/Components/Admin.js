import {useEffect} from 'react'
import Router from 'next/router'
import {isAuth} from '../actions/auth'
import Protected from './Protected'

const Admin=({children})=>{
    useEffect(()=>{
        if(!isAuth()){
            Router.push('/signin')
        }
    },[])

    return <Protected>{children}</Protected>
}

export default Admin