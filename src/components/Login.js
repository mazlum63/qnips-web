import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../slices/userSlice';
import './Login.css'

function Login() {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className='login-container'>
            <h1>username: user</h1>
            <h1>password: 123</h1>
            <div className='form-container'>
                <input onChange={(e) => setUser(e.target.value)} type="text" placeholder='Enter user name' />
                <input onChange={(e) => setPass(e.target.value)} type="password" placeholder='Enter password' />
                <button onClick={() => dispatch(login({ name: user, password: pass }))}>Login</button>
            </div>
        </div>
    )
}

export default Login