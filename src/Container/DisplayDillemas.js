import React from 'react'
import {connect} from 'react-redux'
import {Navlink} from 'react-router-dom'
import {withRouter} from 'react-router'


class DisplayDillema extends React.Component {

    render(){
        return(

            <h1>This is displaying the dillema </h1>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}

function mdp(dispatch) {
    return {
    }
}


export default connect(msp,mdp)(DisplayDillema)