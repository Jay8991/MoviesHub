import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import {Link, useNavigate} from "react-router-dom"
import { useUserAuth } from '../context/UserAuthContext'

export const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const { signup } = useUserAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(confirmpassword !== password){
            return setError("Password do not match")
        }
        try{
            setError("")
            await signup(email, password)
            navigate("/")
        }catch(err){
            setError(err.message)
        }
    }

    return (
        <div className='mt-3 p-4 container'>
            <div className='row'>
                <div className='col'></div>
                <div className='col card m-2 p-4'>
                <h2>Sign Up</h2>
                    {error && <Alert variant="danger">Password doesn't match</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <input className='form-control' type="email" placeholder='Email Address'onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group mb-3'>
                            <input className='form-control' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='form-group mb-3'>
                            <input className='form-control' type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>

                        <div className='d-grid gap-2'>
                            <button className='btn btn-primary btn-block'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <hr />
                    <div className='p-4 box mt-3 text-center'>
                        Already have an account? <Link to="/">Log In</Link>
                    </div> 
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}
