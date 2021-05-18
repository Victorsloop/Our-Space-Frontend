import React from 'react'
import {Navlink} from 'react-router-dom'
import {connect} from 'react-redux'

class Inbox extends React.Component {

    render(){
        return(

            <h1>This is the inbox page </h1>
        )
    }
}


function msp(state) {
    return ({
        currentUser: state.currentUser,
        otherUser: state.otherUser
    })
}



export default connect(msp)(Inbox)