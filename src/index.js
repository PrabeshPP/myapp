import React from "react";
import reactDom  from "react-dom";
import "./index.css"

function Header(){
return(<div className="main">
        <header>
            <nav className="nav">
                <img src="./logo512.png" alt="react logo"/>
                <ul className="navBar" >
                    <li><a href="https://github.com/PrabeshPP/Website/blob/master/CSS/style.css" target={"none"}>Pricing</a></li>
                    <li><a href="https://github.com/PrabeshPP/Website/blob/master/CSS/style.css" target={"noone"}>About</a></li>
                    <li><a href="https://github.com/PrabeshPP/Website/blob/master/CSS/style.css" target={"none"}>Contact</a></li>
                </ul>
            </nav>
        </header>
        </div>);
}


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