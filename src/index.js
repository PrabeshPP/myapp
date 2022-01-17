import React from "react";
import reactDom  from "react-dom";
import "./index.css"
import Header from "./header";



function MainComponent(){
    return(
        <div>
        <h1>Reasons I am excited to learn React.</h1>
        <ol>
            <li>I want to use web tech for blockchain technology.</li>
            <li>nothing</li>
            <li>nothing1</li>
        </ol>
        </div>
    )
}

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