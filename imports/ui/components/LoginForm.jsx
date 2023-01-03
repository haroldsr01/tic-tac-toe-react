import { Meteor } from 'meteor/meteor'
import React, {Fragment, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useAuth from './useAuth.jsx'

export const LoginForm = () => {    
    const { setAuth } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgReg, setMsgReg] = useState('Log In')
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault();
        Meteor.loginWithPassword(username, password, err=>err
            ? setMsgReg(err.reason) 
            : navigate('/lobby')
            // : setMsgReg("success!")
            );
        setAuth({user: username, password: password})
    }
 
    return (       
        <Fragment>
            <form onSubmit={submit} className='login-form'>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        placeholder='Username'
                        name='username'
                        required
                        onChange={e => setUsername(e.target.value)}                
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
                <p className='msgReg'>{msgReg}</p>
            </form>
            <div className="hrline">
              <span>OR</span>
            </div>        
            <p className='msgLogIn'>Need account? <Link to='/register'>Register</Link></p>    
        </Fragment>       
    )
}