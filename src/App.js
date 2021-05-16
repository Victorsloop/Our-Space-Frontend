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

import DisplayDillemas from './Container/DisplayDillemas'
import SearchDillemas from './Container/SearchDillemas'
import CreateDillema from './Component/CreateDillema'
import CreateNote from './Component/CreateNote'
import About from './Component/About'

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
            <Route path="/my-dillema" component={CreateDillema} />
            <Route path="/search-dillemas" component={SearchDillemas} />
            <Route path="/dillema" component={DisplayDillemas} />
            <Route path="/about" component={About} />
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

function mdp(dispatch){
  return{
    updateUser: (userObj) => dispatch(updateUser(userObj))
  }
}

export default connect(msp, mdp)(App)