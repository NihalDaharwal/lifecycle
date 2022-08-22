//this component is an example of intilise state and update state


import React from "react";
class Com1 extends React.Component{
//constructor
constructor(){
   
    //super
    super();
    this.state={
        name1: "vishal"
    }
    //
    console.log("Com1 constructor",this.state.name1);
}
//////////////////

//
//from onclick this.update
update = () => {
    this.setState({name1:"nikhil"});
    //
    console.log(" com1 render",this.state.name1);           
}

////////////////////////////////////
//return
render(){
    //return
    
    return(
        <>
        <h1>component1</h1>
        <h1>hey,{this.state.name1}</h1>
        {/* <button onClick={() => {
            this.setState({name1:"nikhil"});
            console.log("render2",this.state.name1);           
            }}>update state</button> */}
            <button onClick={(this.update)}>update state</button>
        </>
    );
   
      }
}
////////////////////
export default Com1;