import React from 'react'
class Signup extends React.Component{
    state = {
        name:"",
        email:"",
        username: "",
        password: "",
        pronouns: "",
        avatar: ""
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        
    }
    render(){
        return(
            <>
            <h1>This is the signup page </h1>
            { this.state.finished?
            <>
                <Redirect to="/welcome" /> 
            </>
            :
            <>
            <div class="login-box">
            <form onSubmit = {this.submitHandler} >
            <div class="user-box">
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.inputHandler} /> 
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.inputHandler} /> 
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.inputHandler} /> 
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.inputHandler}/> 
                <input type="text" name="pronouns" placeholder="Pronouns" value={this.state.pronouns} onChange={this.inputHandler}/> 
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
export default Signup