import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'

export const UserReg = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgReg, setMsgReg] = useState('Create An Account')

    const register = e => {
        e.preventDefault();
        Accounts.createUser({
            username: username,
            password: password,
        }, err=>err? setMsgReg(err.reason) : setMsgReg("success!")
        );
    }

    return (
        <Fragment>
            <form onSubmit={register} className='reg-form'>
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
                    <button type="submit">Register</button>
                </div>
                <p className='msgReg'>{msgReg}</p>
            </form>
            <div className="hrline">
                <span>OR</span>
            </div>        
            <p className='msgLogIn'>Already a user? <Link to='/login'>Login</Link></p>     
        </Fragment>
    )
}
