
//this is an example of using didmount

import React from "react";
class Com2 extends React.Component{
//make constructor
constructor(){
   
    //make super
    super();
    //initilise state
    this.state={
        name2: 7
    }
    //
    console.log("Com2 constructor",this.state.name2);
}
//////////////////

//
//from onclick this.update
update1 = () => {
    this.setState((prevState)=> {
        return{ 
            name2: prevState.name2 + 6
        }
    },()=>{
        console.log(" com2 render",this.state.name2);           
    });
}

////////////////////////////////////
//return
render(){
    //return
    
    return(
        <>
        <h1>component2</h1>
        <h1>hey,{this.state.name2}</h1>
        {/* <button onClick={() => {
            this.setState({name1:"nikhil"});
            console.log("render2",this.state.name1);           
            }}>update state</button> */}
            <button onClick={(this.update1)}>update state</button>
        </>
    );
   
      }
}
////////////////////
export default Com2;
