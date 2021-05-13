import React from 'react'
import {connect} from 'react-redux'
import {Navlink} from 'react-router-dom'
import {withRouter} from 'react-router'
import {deleteDillema} from '../Redux/action'
import {getNotes} from '../Redux/action'


class DisplayDillema extends React.Component {


    state = {
        dillemaIndex: 0
    }

    componentDidMount() {
        this.props.getNotes(this.props.location.aboutProps.dillema.id)
    }

    nextDillema = () => {
        if (this.state.dillemaIndex === this.props.notesArray.length - 1) {
            return
        }
        else {
            this.setState(prevState => ({ dillemaIndex: parseInt(prevState.dillemaIndex + 1) }))
        }
    }

    prevDillema = () => {
        if (this.state.dillemaIndex === 0) {
            return
        }
        else {
            this.setState(prevState => ({ dillemaIndex: parseInt(prevState.dillemaIndex - 1) }))
        }
    }

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
        getNotes: (dillemaId) => dispatch(getNotes(dillemaId)),
        deleteDillema: (dillemaId,history) => dispatch(deleteDillema(dillemaId,history))
    }
}


export default connect(msp,mdp)(DisplayDillema)