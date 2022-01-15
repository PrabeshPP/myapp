import ReactDOM from "react-dom";
import React  from "react";
const page=(
  <div>
      <img src="./logo512.png" width={"40px"} alt="react logo"></img>
      <h1>Fun facts about React</h1>
      <ul>
          <li> Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K starts on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  </div>
   
)

ReactDOM.render(
   page
   ,
    document.getElementById('root')
)