import React from 'react';
import './signUp.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const userDataString = localStorage.getItem('userData');

    const userData = JSON.parse(userDataString);

    const emails = userData?.email;
    const passwords = userData?.password;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const signUpBtn = () => {
        if (email === emails && password === passwords) {
            alert('Log In Successful!');
            window.location.href = '/details';
        }
        else{
            alert('enter valid Credentials');
            window.location.href = '/login';
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
                        <input id='email' type='text'/>
                    </div>
                    <div className='inputt'>
                        <img src={password_icon} alt='' />
                        <input id='password' type='text' />
                    </div>
                </div>
                <div className='forget-password'>don't have an Account?<Link to="/signup">SignUp</Link></div>
                <div className='submit-container'>
                    <button id='signup' onClick={signUpBtn}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
