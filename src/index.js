import React from "react";
import reactDom  from "react-dom";
import "./index.css"
import Header from "./header";
import MainComponent from "./mainComponent";





function CustomPage(){
    return(
        <div className="mainDIV" >
    <Header/>
    <MainComponent/> 
        </div>
    )
}

reactDom.render(<CustomPage/>,document.getElementById('root'));