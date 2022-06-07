import "./App.css";
import React from "react";
import logo from "./logo.svg";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

class App extends React.Component{
   name = "Tarunika";
 render() {
  //JSX
  const element = <h1>Hello, {this.name}</h1>;

  const user = {
    firstName: "Harper",
    lastName: "Perez",
  };

  const element1 = <h1>Hello, {formatName(user)}!</h1>;

  const input = <input placeholder="Enter name" />;

  // with url
  const element2 = <a href="https://www.reactjs.org"> link </a>;

  // JSX with child
  const element3 = (
    <div>
      <h3>Hello!</h3>
      <h4>Good to see you here.</h4>
    </div>
  );

  // with Babel
  const element4 = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello, world!"
  );

  const element5 = React.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo",
  });

  

  return [element, element1, input, element2, element3, element4, element5];
}
}

export default App;
