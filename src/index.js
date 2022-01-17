import React from "react";
import reactDom  from "react-dom";
import "./index.css"
import Header from "./header";
import MainComponent from "./mainComponent";
import Footer from "./footer";




function CustomPage(){
    return(
        <div className="mainDIV" >
    <Header/>
    <MainComponent/>
    <Footer/>
        
        </div>
    )
}

reactDom.render(<CustomPage/>,document.getElementById('root'));