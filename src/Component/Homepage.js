import React from 'react'
import {connect} from 'react-redux'
import {Navlink} from 'react-router-dom'

class HomePage extends React.Component {

    render(){
        return(

            <h1>Welcome to OurSpace home HomePage</h1>
        )
    }
}

function msp(state){
    return({
        currentUser: state.currentUser
    })
}

export default connect(msp)(HomePage)