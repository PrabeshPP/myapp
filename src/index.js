import React from "react";
import reactDom  from "react-dom";
import "./index.css"
import Header from "./header";
import MainComponent from "./mainComponent";



function Footer(){
    return(
    <div className="footer">
        <footer>@ Bista development.All right reserved.</footer>
    </div>
    )
}

function CustomPage(){
    return(
        <div >
    <Header/>
    <MainComponent/>
    <Footer/>
        
        </div>
    )
}

reactDom.render(<CustomPage/>,document.getElementById('root'));