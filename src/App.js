import React from "react";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

export default function App(){
    return(
        <React.Fragment>
     < Navbar/>
  
     < Corpo/>
  
     < FundoMobile/>
      </ React.Fragment>
    );
}