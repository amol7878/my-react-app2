import React, { Component } from "react";

class RefDemo extends Component {
    constructor() {
        super()
        this.inputref = React.createRef()
    }
    clickHandler=()=>{
        alert(this.inputref.current.value)
    }
    componentDidMount(){
        this.inputref.current.focus()
    }
    render() {
        return (
            <>
            <input type="text" ref={this.inputref}></input>
            <button onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}

export default RefDemo