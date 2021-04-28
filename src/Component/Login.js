import React from 'react'
import connect from 'react-redux'
import {setUser} from '../Redux/action'
// import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    loginHandler = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <>
            { this.state.finished?
            <>
                <Redirect to="/welcome" /> 
            </>
            :
            <>
            <div class="login-box">
            <form onSubmit = {this.loginHandler} >
            <div class="user-box">
             <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.inputHandler} /> 
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.inputHandler}/> 
            <input type="submit" value="Login"/>
            </div>
            </form>
            </div>
            </>

            }
            </>
        )
    }
}

function mdp(dispatch){
    return{
        currentUser: (userObj, history) => dispatch(setUser(userObj, history))

    }
}



export default connect((null,mdp)(Login))