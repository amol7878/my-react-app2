import React, { Component } from 'react'

class LifeCycleB1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Vishavas"
      }
      console.log("Lifecycle B1 Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle B1 getDerivedStateFromProps ")
        return null

    }
componentDidMount(){
    console.log("LifeCycle B1")
} 

    
  render() {
    console.log("LifeCycle B1 Render")
    return (
      <div>
        <div>
        LifeCycleB1 
    
        </div>
        
      </div>
    )
  }
}

export default LifeCycleB1
