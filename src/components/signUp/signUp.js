// SignUp.js
import React from 'react';
import './signUp.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='header'>
          <div className='text'>SignUp</div>
          <div className='underLine'></div>
        </div>
        <div className='inputs'>
          <div className='inputt'>
            <img src={email_icon} alt=''/>
            <input type='text'/>
          </div>
          <div className='inputt'>
            <img src={password_icon} alt=''/>
            <input type='text'/>
          </div>
        </div>
        <div className='forget-password'>don't have an Account?<Link to="/signup">SignUp</Link></div>
        <div className='submit-container'>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
