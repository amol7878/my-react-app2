import React, { Component } from 'react'

class LifecycleA extends Component {
    //Mountng ---constructor---,getDeriveStateFromProps,render,componentDidMount

    constructor(props) {
        super(props)

        this.state = {
            name: "Vishwas"
        }
        console.log("LifeCycle 1 st Method Called --Constructor")

    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle 2nd Method called --getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("This Last method called ----ComponentdidMount")
    }
    render() {
        console.log(" This Is render  3rd Method Called--render()")
        return <div>This Is called render</div>

    }
}

export default LifecycleA