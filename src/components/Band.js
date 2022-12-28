import React, { Component } from "react";




class Band extends Component {

    deleteThis = () => {
        this.props.delete(this.props.id)
    }

render() {
    return(
        <li>
            <span>{this.props.name}</span>
            <button onClick={this.deleteThis}>DELETE</button>
        </li>
    )
}


}

export default (Band)