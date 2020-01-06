import React from "react"
import {connect} from "react-redux"

function App(props) {    
    return (
        <div>
            <h1>{props.count}</h1>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

function mapStateToProps(globalState) {
  // return an object where the keys are the name of the prop your component wants,
  // values are the actual parts of the global state your component wants
  return {
      count: globalState
  }
}

//this can also be formatted like
// const mapStateToProps = (globalState) => ({count: globalState})

export default connect(mapStateToProps, {})(App)