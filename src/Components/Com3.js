
//conditional renderings eith states


import React from "react";
class Com3 extends React.Component{
//make constructor
constructor(){
   
    //make super
    super();
    //initilise state
    this.state={
        name2: "abc"
    }
    //
    console.log("Com3 constructor",this.state.name2);
}
//////////////////

//
//from onclick this.update
update1 = () => {
    this.setState((prevState)=> {
        return{ 
           
            name2 : prevState.name2.endsWith("abc") ? prevState.name2 + "xyz" :  prevState.name2 + "abc" 
        }
    },()=>{
        console.log(" com3 render",this.state.name2);           
    });
}

////////////////////////////////////
//return
render(){
    //return
    
    return(
        <>
        <h1>component3</h1>
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
export default Com3;
