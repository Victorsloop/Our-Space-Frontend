import React from 'react'
import {connect} from 'react-redux'
import {Navlink} from 'react-router-dom'
import {withRouter} from 'react-router'
import {browseDillemas} from '../Redux/action'

class SearchDillema extends React.Component {

    state = {
        dillemaIndex: 0
    }
    componentDidMount() {
        if (this.props.currentUser) {
            this.props.browseDillemas(this.props.currentUser.id)
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.browseDillemas(this.props.currentUser.id)
        }
    }

    nextDillema = () => {
        if (this.state.dillemaIndex === 4) {
            return
        }
        else {
            this.setState(prevState => ({ dillemaIndex: parseInt(prevState.dillemaIndex + 1) }))
        }
    }

    previousDillema = () => {
        if (this.state.dillemaIndex === 0) {
            return
        }
        else {
            this.setState(prevState => ({ dillemaIndex: parseInt(prevState.dillemaIndex - 1) }))
        }
    }


    render(){
        return(

            <h1>This is for searching the dillema </h1>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser,
        someDillemas: state.someDillemas
    })
}

function mdp(dispatch) {
    return {
        browseDillemas: (userId) => dispatch(browseDillemas(userId))
    }
}


export default connect(msp,mdp)(SearchDillema)