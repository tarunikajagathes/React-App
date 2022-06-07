import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.names}</h1>;
  }
}

export default Welcome;
