import React, { Component } from 'react'
import RegComp from './RegComp'
import PureC from './PureC'

class ParentC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"AMOL"
      }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Amol"
            })
        },2000)
    }
  render() {
    console.log("Parent Component Render=====")
    return (
      <div>
        <RegComp name={this.state.name}/>
        <PureC name={this.state.name}/>
      </div>
    )
  }
}

export default ParentC
