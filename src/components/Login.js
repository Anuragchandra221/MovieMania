import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import {  getToken, getUser, removeUserSession, setUserSession } from "../Utils/Common"
import { Route, Navigate, Routes } from "react-router-dom"

const Login = ()=>{
    // const navigate = useNavigate()
    const [token, setToken] = useState()
    const [token2, setToken2] = useState()
    const [session, setSession] = useState()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState()
    const [user, setUser] = useState([])
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/authentication/token/new", {params: {'api_key': '90669264a3e2131741ef2d5355e5c8c0'}}).then((response)=>{

            setToken(response.data.request_token)
            
        }).catch(
            (err)=>{
                // console.log(err)
            }
        )
        setToken2(null)
        // token?console.log(token):console.log('')
        
    },[])
    useEffect(()=>{
        if (token2){
            axios.post("https://api.themoviedb.org/3/authentication/session/new",{'request_token':token2},  {params: {'api_key': '90669264a3e2131741ef2d5355e5c8c0'}}).then((response)=>{
                
                setSession(response.data.session_id)
                
            }).catch(
                (err)=>{
                    setErr(err.response.status)
                }
                )
            }
        if(session){
            axios.get("https://api.themoviedb.org/3/account", {params: {'api_key': '90669264a3e2131741ef2d5355e5c8c0', 'session_id':session}}).then((response)=>{
                
                setUser(response.data)
                
            }).catch(
                (err)=>{
                    setErr(err.response.status)
                }
                )
            }
            
    }, [token2])
    const getData = ()=>{
        setLoading(true)
        if(token ){
            axios.post("https://api.themoviedb.org/3/authentication/token/validate_with_login",{'request_token': getToken()? getToken(): token, 'username': username, 'password':password},  {params: {'api_key': '90669264a3e2131741ef2d5355e5c8c0'}}).then((response)=>{
                setToken2(response.data.request_token)
                
            }).catch(
                (err)=>{
                    setErr(err.response.status)
                }
                )
            }
        

        
    }
    if (getUser()){
        return <Routes><Route
        path=""
        element={<Navigate to="/" replace />}
    /></Routes>
    }
        else if(user && token2 && session){
            setUserSession(token2, session, user)
            return (<Routes><Route
            path="/"
            element={<Navigate to="/" replace />}
        /></Routes>)
        }
    
    else{

        return (
            
            <div className="App px-3 px-lg-5 py-lg-3">
                
                <Header/>
                <div className="row mt-5 pt-4">
                    <div className="col-lg-6">
                        <p style={{color: '#fff', fontWeight: '700', fontSize: 'xxx-large'}}>Welcome Back!</p>
                        <p style={{color: '#fff', opacity: '0.7'}}>Log in to your account</p>
                        
                        <div className="d-flex align-items-center px-2 mt-4 mb-3 logindiv" style={{border: '2px solid #FFAD00'}}>
                            <i className="fa-solid fa-user " style={{fontSize: 'x-large', color: '#FFAD00'}} ></i>
                            <input className="form-control mr-sm-2" style={{backgroundColor: '#000', border:'none', color: '#fff'}}  type="text" placeholder="Full Name" onChange={(e)=>{setUsername(e.target.value);setLoading(false)}}  aria-label="Search"/>
                        </div>
                        <div className="d-flex align-items-center px-2 mb-3 logindiv" style={{border: '2px solid #FFAD00'}}>
                            <i className="fa-solid fa-lock " style={{fontSize: 'x-large', color: '#FFAD00'}} ></i>
                            <input className="form-control mr-sm-2" style={{backgroundColor: '#000', border:'none', color: '#fff'}}  type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value);setLoading(false)}}  aria-label="Search"/>
                        </div>
                        <p style={{color: 'red'}}>{(err===400 || err===401)?`Check your email and password`:''}</p>
                        <p style={{color: '#fff'}}>Forgot Password?</p >
                        <div className="d-flex align-items-center justify-content-center px-2  mt-lg-5 mb-3 logindiv" style={{border: '2px solid #FFAD00'}}  >
                            <button className="py-2 " disabled={loading} style={{backgroundColor: '#000', border:'none', color: '#fff', width: '100%'}} onClick={getData} >Login</button>
                        </div>
                        <p style={{color: '#fff'}}>Don't Have An Account? <a href="https://www.themoviedb.org/signup" style={{color: '#fff'}} >Sign Up</a> </p>
                        
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center mt-3 mt-lg-0" style={{flexDirection: 'column'}}>
                        <p style={{color: '#fff', fontSize: 'larger', fontWeight: '700'}}>Benefits of your free <span style={{color: '#FFAD00'}}>M</span>ovie<span style={{color: '#FFAD00'}}>M</span>account:</p>
                        <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Personalized Recommendations</span>- <span  style={{opacity: '0.7'}}>Discover shows you'll love.</span> </p>
                        <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Your Watchlist</span>- <span style={{opacity: '0.7'}}>Track everything you want to watch and receive e-mail when movies open in theaters.</span> </p>
                        <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Your Ratings</span>- <span style={{opacity: '0.7'}}>Rate and remember everything you've seen.</span> </p>
                        <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Contribute to IMDb</span>- <span style={{opacity: '0.7'}}>Add data that will be seen by millions of people and get cool badges.</span> </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Login