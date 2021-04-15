import React from 'react'
import { connect } from 'react-redux'


class CreateDillema extends React.Component {

    state = {
        user_id: localStorage.getItem("user_id"),
        date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        title: "",
        content: "",
        sentiment: "",
        emotion: "",
        tags: [],
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    tagsChangeHandler = (e, index) => {
        if (this.state.tags[parseInt(index)] || this.state.tags[parseInt(index)] === "") {
            let newTagArray = [...this.state.tags]
            newTagArray[index] = e.target.value
            this.setState({ tags: newTagArray })
        }
        else {
            let newTagArray = [...this.state.tags]
            newTagArray.push(e.target.value)
            this.setState({ tags: newTagArray })

        }
    }


    postHandler = (e) => {
        e.preventDefault()
        this.props.postAThought(this.state, this.props.history)
    }

    render() {
        return (
            <>
                <form onSubmit={this.postHandler}>
                    <div style={{ width: "70%", float: "left" }}>
                        <Title> What's on your mind? </Title>
                        <br /><br />
                        {/* <label>TITLE</label> */}
                        <input style={{ width: "90%", textAlign: "center", fontWeight: "bold" }} type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler} required />

                        {/* <label>CONTENT</label> */}

                        <ThoughtText type="text" name="content" value={this.state.content} onChange={this.changeHandler} required />
                        <br /> <br />
                    </div>

                    <div style={{ width: "30%", float: "left" , marginTop: "20px"}}>
                        <Container >
                            <ControlGroup className="container">
                                <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "#F7AEf8", textShadow: "0px 0px 1px #FFC2E0" }}>SENTIMENT</h1>
                                <ul>
                                    <li>
                                        <input type="radio" id="positive" name="sentiment" value="Positive" onClick={this.state.sentiment === 'Positive'} onChange={this.changeHandler} />
                                        <label style={{ color: "#FFCB77" }} for="positive"> Positive</label>
                                        <div class="check"></div>
                                    </li>
                                    <li>
                                        <input type="radio" id="neutral" name="sentiment" value="Neutral" onClick={this.state.sentiment === 'Neutral'} onChange={this.changeHandler} />
                                        <label style={{ color: "#FFCB77" }} for="neutral"> Neutral</label>
                                        <div class="check"></div>
                                    </li>
                                    <li>
                                        <input type="radio" id="negative" name="sentiment" value="Negative" onClick={this.state.sentiment === 'Negative'} onChange={this.changeHandler} />
                                        <label style={{ color: "#FFCB77" }} for="negative"> Negative</label>
                                        <div class="check"></div>
                                    </li>
                                </ul>
                                <br />
                            </ControlGroup>
                                <input  type="text" name="emotion" placeholder="How do you feel?" value={this.state.emotion} onChange={this.changeHandler} required />
                        </Container>

                        <br /> <br />
                        <input type="text" name="tags" placeholder="Add Custom Tag" index="0" value={this.state.tags[0]} onChange={(e, index) => { this.tagsChangeHandler(e, 0) }} />
                        <input type="text" name="tags" placeholder="Add Custom Tag" index="1" value={this.state.tags[1]} onChange={(e, index) => { this.tagsChangeHandler(e, 1) }} />
                        <input type="text" name="tags" placeholder="Add Custom Tag" index="2" value={this.state.tags[2]} onChange={(e, index) => { this.tagsChangeHandler(e, 2) }} />
                        <br /> <br />
                    </div>
                    <button> POST </button>
                </form>
            </ >
        )
    }
}



export default connect(CreateDillema)