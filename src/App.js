import logo from './logo.svg';
import './App.css';

import {Route,Switch} from 'react-router-dom'
import connect from 'react-redux'
import updateUser from './Redux/action/updateUser'


import Header from './Component/Header'
import Homepage from './Component/Homepage'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Profile from './Component/Profile'
import EditProfile from './Component/EditProfile'

class App extends React.Component {

  render() {
    return (
      <>

        <>
          <Header />
        </>
        <>
        <Switch>
            <Route path="/home" render={() => <Homepage />} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Switch>
        </>
        
      </>
    )
  }
}

function msp(state){
  return{

  }
}

function mdp(dispacth){
  return{
    updateUser: (userObj) => dispatch(updateUser(userObj))
  }
}

export default connect(msp, mdp)(App)