import { Meteor } from 'meteor/meteor'
import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'


export const LoginForm = () => {
    // const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgReg, setMsgReg] = useState('Log In')

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password, err=>err? setMsgReg(err.reason) : setMsgReg("success!"));
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