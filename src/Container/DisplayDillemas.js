import React from 'react'
import {connect} from 'react-redux'
import {Navlink} from 'react-router-dom'

class DisplayDillema extends React.Component {

    render(){
        return(

            <h1>This is displaying the dillema </h1>
        )
    }
}



export default connect(DisplayDillema)