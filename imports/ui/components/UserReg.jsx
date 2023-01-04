import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'

export const UserReg = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgReg, setMsgReg] = useState('Create An Account')
    const [showPassword, setShowPassword] = useState('password')
    const [classEye, setClassEye] = useState('fa-solid fa-eye')

    const toggleShowPassword = () => {setShowPassword(showPassword === 'password' ? 'text' : 'password'); 
    setClassEye(classEye === 'fa-solid fa-eye' ? "fa-solid fa-eye-slash" : 'fa-solid fa-eye')}

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
                <div className='password-container'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type={showPassword}
                        placeholder='Password'
                        name='password'
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <i className={classEye} id='togglePassword' onClick={toggleShowPassword}></i>
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
