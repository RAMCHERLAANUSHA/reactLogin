import React, { useState } from 'react';
import './signUp.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signUpBtn = () => {
        const userDataString = localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataString);
        
        if (email === parsedUserData.email && password === parsedUserData.password) {
            alert('Log In Successful!');
            window.location.href = '/details';
        } else {
            alert('Enter valid credentials');
        }
    };

    return (
        <div className='container'>
            <div className='card'>
                <div className='header'>
                    <div className='text'>LogIn</div>
                    <div className='underLine'></div>
                </div>
                <div className='inputs'>
                    <div className='inputt'>
                        <img src={email_icon} alt='' />
                        <input
                            type='text'
                            value={email}
                            placeholder='Email'
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className='inputt'>
                        <img src={password_icon} alt='' />
                        <input
                            type='password'
                            value={password}
                            placeholder='Password'
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <div className='forget-password'>Don't have an account? <Link to="/signup">SignUp</Link></div>
                <div className='submit-container'>
                    <button id='signup' onClick={signUpBtn}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
