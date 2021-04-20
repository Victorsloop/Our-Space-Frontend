import React from 'react'
import {connect} from 'react-redux'
import {Navlink} from 'react-router-dom'

class Profile extends React.Component{

    render(){
        return(
            <h1>Your profile Page</h1>
        )
    }
}

export default connect()(Profile)