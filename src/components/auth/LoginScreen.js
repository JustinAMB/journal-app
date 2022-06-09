import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formValues,handleInputChange,reset]=useForm({
    email:'',
    password:''
  });
  const {email,password}=formValues;
  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(login(email,password));

  }
  return (
    <>
    <h3 className="auth__title">Login</h3>
      <form >
        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          className="auth__input" 
          value={password}
          onChange={handleInputChange}
          />
        <button type="submit" className="btn btn-primary btn-block">Log in </button>
        
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to='/auth/register' className="link">
          Create new account
        </Link>
      </form>
    </>
  )
}

export default LoginScreen