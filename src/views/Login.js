import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import {Link, NavLink, useNavigate} from "react-router-dom"
import { useUserAuth } from '../context/UserAuthContext'

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, googleSignIn } = useUserAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await login(email, password)
            // navigate("/welcome")
            navigate("/home")
        }catch(err){
            setError(err.message)
        }
    }
    const handleGoogleSignIn = async (e) => {
        e.preventDefault()
        try{
            await googleSignIn()
            // navigate("/welcome")
            navigate("/home")
        }catch(err){
            setError(err.message)
        }
    }

    return (
        <div className='mt-3 p-4 container'>
        <div className='row'>
            <div className='col'></div>
            <div className='col card m-2 p-4'>
            <h2>Log In</h2>
                {error && <Alert variant="danger">Email or Password incorrect</Alert>}
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                        <input className='form-control' type="email" placeholder='Email Address'onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="w-100  mt-3">
                            <NavLink to="/forgotpassword">Forgot Password</NavLink>
                        </div>
                    <div className='form-group mb-3'>
                        <input className='form-control' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='d-grid gap-2'>
                        <button className='btn btn-primary btn-block'>
                            Log In
                        </button>
                    </div>
                </form>
                <hr />
                <div>
                    <GoogleButton className='g-btn mx-auto' type='dark' onClick={handleGoogleSignIn} />
                </div>
                <div className='p-4 box mt-3 text-center'>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div> 
            </div>
            <div className='col'></div>
        </div>
    </div>
    )
}
