import React from 'react'
class Signup extends React.Component{
    state = {
        username: "",
        password: "",
        email: "",
        name: "",
        pronouns: "",
        bio: "",
        avatar: ""
    }
    render(){
        return(
            <h1>This is the signup page </h1>
        )
    }

}
export default Signup