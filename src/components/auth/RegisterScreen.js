import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
const RegisterScreen = () => {
  const [formValues,handleInputChange,]=useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const {name,email,password,password2}=formValues;
  const isFormValid = () => {
        
    if ( name.trim().length === 0 ) {
        dispatch( setError('Name is required') )
        return false;
    } else if ( !validator.isEmail( email ) ) {
        dispatch( setError('Email is not valid') )
        return false;
    } else if ( password !== password2 || password.length < 5 ) {
        dispatch( setError('Password should be at least 6 characters and match each other') )
        return false
    }
    
    dispatch( removeError() );
   return true;
  }
  return (
    <>
    <h3 className="auth__title">Register</h3>
      <form >
        <input type="text" name="name" placeholder="name" className="auth__input mb-1" value={ name }/>
        <input type="email" name="email" placeholder="email" className="auth__input mb-1" value={ email }/>
        
        <input type="password" name="password" placeholder="password" className="auth__input mb-1" value={ password }/>
        <input type="password" name="password2" placeholder="confirmpassword" className="auth__input mb-1" value={ password2 } />
        <button type="submit" className="btn btn-primary btn-block mb-5">Create </button>
        
        
        <Link to='/auth/login' className="link ">
          Already registered?
        </Link>
      </form>
    </>
  )
}

export default RegisterScreen