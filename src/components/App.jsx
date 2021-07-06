import React from "react";
import Login from "./Login";

let isLoggedIn = true;

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;

// (isTrue) ? show_when_true : show_when_false
// (isTrue) ? show_when_true : none
//(isTrue) && show_when_true
