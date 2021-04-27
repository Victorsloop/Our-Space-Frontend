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

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => response.json())
        .then(data => {
          this.props.refreshUser(data.user)
        })
        .catch(console.log)
    }
  }


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
            <Route path="/profile" component={Profile} />
            <Route path="/edit" render={() => <EditProfile userObj={this.props.currentUser} />} />
        </Switch>
        </>
        
      </>
    )
  }
}

function msp(state){
  return{
    currentUser: state.currentUser
  }
}

function mdp(dispacth){
  return{
    updateUser: (userObj) => dispatch(updateUser(userObj))
  }
}

export default connect(msp, mdp)(App)