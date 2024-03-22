import React, { Component } from "react";
import Input from "./Input";

class FRInput extends Component {
    constructor(props) {
        super()
        this.componentRef = React.createRef()
    }
    clickHandler = () => {
        // console.log(this.componentRef.current)
        this.componentRef.current.focusInput()
    }

    render() {
        return (<div>

            <Input ref={this.componentRef}></Input>
            <button onClick={this.clickHandler}>click</button>


        </div>

        )
    }
}

export default FRInput