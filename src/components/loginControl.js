import React from "react";
import Greeting from "./greeting";
import { LoginButton, LogoutButton } from "./loginHandle";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.loginHandle = this.loginHandle.bind(this);
    this.logoutHandle = this.logoutHandle.bind(this);
    this.state = { isLoggedIn: false };
  }

  loginHandle() {
    this.setState({ isLoggedIn: true });
  }
  logoutHandle() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.logoutHandle} />;
    } else {
      button = <LoginButton onClick={this.loginHandle} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
