import React from 'react';
import './LoginSignUp.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='header'>
          <div className='text'>SignUp</div>
          <div className='underLine'></div>
        </div>
        <div className='inputs'>
          <div className='inputt'>
            <img src={user_icon} alt=''/>
            <input type='text'/>
          </div>
          <div className='inputt'>
            <img src={email_icon} alt=''/>
            <input type='text'/>
          </div>
          <div className='inputt'>
            <img src={password_icon} alt=''/>
            <input type='text'/>
          </div>
        </div>
        <div className='forget-password'>already have an Account?<Link to="/login">Login</Link></div>
        <div className='submit-container'>
          <button>SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
