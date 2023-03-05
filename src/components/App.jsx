import React from "react";
import Login from "./Login"; 
import Form from "./Form";

//var isloggedIn = false;
//const currentTime = new Date().getHours();

var userIsRegistered = true;
   
function App() { return ( 
<div className="container">
<Form
    isRegustered={userIsRegistered} />
</div> );

//isloggedIn ? <h1>Hello</h1> : <Login />
//and operator
//currentTime > 12 && <h1>Why are Still working</h1>
}

export default App;
