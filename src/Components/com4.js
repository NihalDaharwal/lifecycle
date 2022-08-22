//didmount

import react from  "react";

class Com4  extends react.Component{
//constructor
constructor(){
    //super
    super();
    this.state={
name4:"niahl"
    }
}

componentDidMount(){
    // used to call api
    console.log("com4 did mount")
}

update4 = () => {
    this.setState((prevState)=> {
        return{ 
           
            name4 :"vishal"
        }
    },()=>{
        console.log(" com4 render",this.state.name4);           
    });
}



render(){
    return(
        <>
        <h1>did mount ,{this.state.name4}</h1>
        <button onClick={(this.update4)}> upade3</button>
        </>
    )
}
}

export default  Com4;