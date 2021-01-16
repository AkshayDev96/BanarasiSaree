import React from 'react'
import router from 'next/router'
import {signin,authenticate,isAuth} from '../actions/auth'

const SigninUser = () => {
    const [email,setEmail] = React.useState("admin@123.com")
    const [message,setMessage] = React.useState("")
    const [password,setPassword] = React.useState("admin@123")
    const [isLoading,setLoading] = React.useState(false)

    const onSave = (e)=>{
            e.preventDefault()
            if((typeof email==='string' && email!=='') && (typeof password==='string' && password!=='')){
                setLoading(true)
                const user = {email,password}
                signin(user)
                .then((data)=>{
                    if(data.error){
                        setMessage(data.error)
                        setLoading(false)
                    }else{
                        authenticate(data,()=>{
                            if(isAuth()){
                                router.push('/admin')
                            }
                        })
                    }
                })
            }else{
                setMessage("Invalid credentials")
            }
    }
    return (
        <div className="container h-100">
        <style>
            {`
            body{
                background: url(./bg-img.jpg) no-repeat center center fixed; 
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
            }
            .card{
                animation-duration: 2s;
                -webkit-animation-name: fadeIn;
                animation-name: fadeIn;
            }
            `}
        </style>
            <div className="d-flex justify-content-center h-100">
            <div className="card" style={{marginTop:150,width:'25rem',background:'#333333ad'}}>
                <div className="card-body text-center p-5">
                    <h4 className="text-white">Admin Login</h4>
                    <span className="text-white">Only for member</span>
                    <form onSubmit={onSave}>
                        <div className="form-group mt-2">
                            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value),setMessage('')}} className="form-control" placeholder="Email address..." />
                        </div>
                        <div className="form-group">
                            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value),setMessage('')}} className="form-control" placeholder="Password" />
                        </div>
                        {message?<p style={{color:'white',fontWeight:'bold'}}>{message}</p>:null}
                        <button type="submit" disabled={isLoading} className="btn btn-warning btn-block">Login</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SigninUser
