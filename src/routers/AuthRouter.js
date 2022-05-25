import React from 'react'
import {
    Switch,
    Route,Redirect} from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';



const AuthRouter = () => {
  return (
    
        <Switch>
            <Route
            path='/auth/login'
            component={LoginScreen}
            exact
            />
            <Route
            path='/auth/register'
            exact
            component={RegisterScreen}
            />
            <Redirect to='/auth/login'/>
        </Switch>
   
  )
}

export default AuthRouter