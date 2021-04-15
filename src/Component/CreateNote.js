import React from 'react'
import {connect} from 'react-redux'

class CreateNote extends React.Component {

    state = {
        user_id: localStorage.getItem("user_id"),
        thought_id: this.props.location.aboutProps.thought.id,
        content: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }


    sendNoteHandler = (e) => {
        e.preventDefault() 
        this.props.sendALetter(this.state, this.props.history)
    }

    render () {
        console.log(this.props.location.aboutProps.thought)
        const DillemaObj = this.props.location.aboutProps.thought
        return (
            <Wrapper>
            <div style={{ width: "35%", float: "left"}}>
                <DillemaCards DillemaObj={DillemaObj}/>
            </div>

            <div style={{ width: "65%", float: "left"}}>
            <form onSubmit={this.sendNoteHandler}>
            <Title> Send a cheerful Note </Title>
                
                <NoteText type="text" name="content" value={this.state.content} onChange={this.changeHandler} required />
                <br/> <br/>
                <Button> Send Note </Button>
            </form> 
            </div>
            </Wrapper> 
        )
    }
}



export default (connect(null, mdp)(CreateNote))