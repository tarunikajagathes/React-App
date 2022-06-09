import React from "react";

class Greeting extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div>
        {isLoggedIn && <h1>Hello User!!</h1>}
        The user is {isLoggedIn ? "logged in" : "not logged"}
      </div>
    );
  }
}

export default Greeting;
