import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Com5 extends Component {

    state = {
        count: 1,
    }

    componentDidMount(){
        console.log("mounted");
    }

    componentDidUpdate(pp,ps){
        console.log("did update",pp,ps);        
    }

    componentWillUnmount(){
        alert("unmounted")
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count + 1})}>Update count</button>
            </div>
        )
    }
}

export default Com5; 