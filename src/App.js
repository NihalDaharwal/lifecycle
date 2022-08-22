import "./App.css";
import React from "react";
// import Com1 from "./Components/Com1";
// import Com2 from "./Components/Com2";
// import Com3 from "./Components/Com3";
// import Com4 from "./Components/com4";
import Com5 from "./Components/Com5";

class App extends React.Component {
  //first call constructor
  constructor() {
    // then super
    // console.warn("constuctor");
    console.log("constuctor");
    super();
    this.state = {
      name: "nihal",
      showCom5:true
    };
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //render
  render() {
    //return
    // console.warn("render");
    console.log("render");
    return (
      <>
        {/* <Com1 />
        <Com2 />
        <Com3 />
        <Com4 /> */}
       {this.state.showCom5 && <Com5/>}
       <button onClick={()=>this.setState({showCom5:false})}> remove component 5</button>
       </>
    );
  }
}

export default App;
