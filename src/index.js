import React from "react";
import reactDom  from "react-dom";

function Header(){
return(
        <header>
            <nav>
                <img src="./logo512.png" width={"40px"} alt="react logo"/>
            </nav>
        </header>);
}


function MainComponent(){
    return(
        <>
        <h1>Reasons I am excited to learn React.</h1>
        <ol>
            <li>I want to use web tech for blockchain technology.</li>
            <li>nothing</li>
            <li>nothing1</li>
        </ol>
        </>
    )
}

function Footer(){
    return(
    <footer>@ Bista development.All right reserved.</footer>
    )
}

function CustomPage(){
    return(
        <div>
    <Header/>
    <MainComponent/>
    <Footer/>
        
        </div>
    )
}

reactDom.render(<CustomPage/>,document.getElementById('root'));