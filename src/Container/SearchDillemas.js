import React from 'react'
import {connect} from 'react-redux'
import {Navlink} from 'react-router-dom'
import {withRouter} from 'react-router'
import {browseDillemas} from '../Redux/action'

class SearchDillema extends React.Component {

    state = {
        dillemaIndex: 0
    }

    render(){
        return(

            <h1>This is for searching the dillema </h1>
        )
    }
}

function msp(state) {
    return ({

    })
}

function mdp(dispatch) {
    return {

    }
}


export default connect(msp,mdp)(SearchDillema)