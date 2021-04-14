import React from 'react'
// import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
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
                <input type="text" name="first_name" placeholder="first_name" value={this.state.first_name} onChange={this.inputHandler} /> 
                <input type="text" name="last_name" placeholder="last_name" value={this.state.last_name} onChange={this.inputHandler} /> 
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.inputHandler} /> 
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.inputHandler}/> 
                <input type="text" name="hometown" placeholder="Hometown" value={this.state.hometown} onChange={this.inputHandler}/> 
                <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.inputHandler}/> 
                <input type="number" name="avatar" placeholder="PIC" value={this.state.avatar} onChange={this.inputHandler}/> 
                <input type="submit" value="Sign Up"/>
                </div>
            </form>
            </div>
            </>

            }
            </>
        )
    }
}



export default Login