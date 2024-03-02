import React, { Component } from "react";


class Form1 extends Component {
    constructor() {
        super()

        this.state = {
            username: " ",
            comments: " ",
            topic:"react"
        }


    }

    handleUserChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    HandleCommentChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }

    ChangeTopicName=(event)=>{
      this.setState({
        topic:event.target.value
      })
    }

    handleSubmit=(event)=>{
          alert(`${this.state.topic} ${this.state.username} ${this.state.comments}`)
          event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input
                        value={this.state.username}
                        onChange={this.handleUserChange}
                    />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.HandleCommentChange}
                    />
                </div>

                <div>
                    <label>Topics</label>
                    <select>
                        value={this.state.topic}
                        onChange={this.ChangeTopicName}
                        <option value="react">React</option>
                        <option value="html">Html</option>
                        <option value="css">Css</option>

                    </select>
                        
                </div>

                <button type="submit">SUBMIT</button>

            </form>

        )
    }
}

export default Form1