import React from 'react';
import './LoginSignUp.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {
  const displayErrorMessage = (elementId, message) => {
    const errorContainer = document.getElementById(`${elementId}-error`);
    if (errorContainer) {
      errorContainer.remove();
    }
    if (message !== '') {
      const parentDiv = document.getElementById(elementId).closest('.inputt');
      const newErrorContainer = document.createElement('p');
      newErrorContainer.id = `${elementId}-error`;
      newErrorContainer.classList.add('error-message');
      newErrorContainer.textContent = message;
      parentDiv.appendChild(newErrorContainer);
    }
  };

  const validation_username = () => {
    const username = document.getElementById('username').value;
    const lettersOnly = /^[A-Za-z]+$/;
    if (username === '') {
      return displayErrorMessage('username', '*Username should not be empty');
    }
    if (isFinite(username)) {
      return displayErrorMessage('username', '*Numbers are not allowed for Username');
    }
    if (lettersOnly.test(username)) {
      return displayErrorMessage('username', '');
    }
    return displayErrorMessage('username', '');
  };

  const validation_email = () => {
    const email = document.getElementById('email').value;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      return displayErrorMessage('email', '*Email should not be empty');
    }
    if (emailregex.test(email)) {
      return displayErrorMessage('email', '');
    }
    return displayErrorMessage('email', '');
  };

  const validation_password = () => {
    const password = document.getElementById('password').value;
    if (password === '') {
      return displayErrorMessage('password', '*Password should not be empty');
    }
    if (password.length < 8) {
      return displayErrorMessage('password', '*Password length must contain at least 8 characters');
    }
    if (password.length > 16) {
      return displayErrorMessage('password', '*Password length should not contain more than 16 characters');
    }
    if (!/[A-Z]/.test(password)) {
      return displayErrorMessage('password', '*Password must contain at least one Uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      return displayErrorMessage('password', '*Password must contain at least one lowercase letter');
    }
    if (!/\d/.test(password)) {
      return displayErrorMessage('password', '*Password must contain at least one digit');
    }
    if (!/[$@$!%*?&]/.test(password)) {
      return displayErrorMessage('password', '*Password must contain at least one special character ($@$!%*?&)');
    }
    return displayErrorMessage('password', '');
  };

  const signUpBtn = () => {
    const errors = document.querySelectorAll('.error-message');
    if (errors.length === 0) {
      alert('Sign Up Successful! Please Login');
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const username = document.getElementById('username').value;

      const userData = {
          email: email,
          password: password,
          username: username
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      window.location.href = '/login';
    }
  };

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
            <input id='username' type='text' placeholder='Username' onBlur={validation_username} />
          </div>
          <div className='inputt'>
            <img src={email_icon} alt=''/>
            <input id='email' type='text' placeholder='Email' onBlur={validation_email} />
          </div>
          <div className='inputt'>
            <img src={password_icon} alt=''/>
            <input id='password' type='password' placeholder='Password' onBlur={validation_password} />
          </div>
        </div>
        <div className='forget-password'>Already have an Account? <Link to="/login">Login</Link></div>
        <div className='submit-container'>
          <button id='signup' onClick={signUpBtn}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
