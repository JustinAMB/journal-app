import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,Redirect} from 'react-router-dom';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';



    
const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route
                path='/auth'
                component={AuthRouter}
            />
            <Route
                path='/'
                component={JournalScreen}
                exact
            />
            <Redirect to='/auth'/>
        </Switch>
    </Router>
  )
}

export default AppRouter