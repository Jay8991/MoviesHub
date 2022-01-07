import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext'
import {Link, useNavigate} from "react-router-dom"

export const ForgotPassword = () => {

    const { resetPassword } = useUserAuth()
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            await resetPassword(email)
        } catch {
            setError("Failed to reset password")
        }

    }
    return (
        <div className='mt-3 p-4 container'>
            <div className='row'>
                <div className='col'></div>
                <div className='col card m-2 p-4'>
                <h2 className="text-center mt-2">Password Reset</h2>
                    {error && <Alert variant="danger">Email not valid</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <input className='form-control' type="email" placeholder='Email Address'onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        
                        <div className='d-grid gap-2'>
                            <button className='btn btn-primary btn-block'>
                                Reset Password
                            </button>
                        </div>
                    </form>
                <div className="w-100 text-center mt-3">
                <Link to="/">Log in here</Link>
                </div>
                    <hr />
                    <div className='p-4 box mt-3 text-center'>
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div> 
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}
