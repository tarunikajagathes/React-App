import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    console.log(value);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this,'sample')}>
          Lights {this.state.isToggleOn ? "OFF" : "ON"}
        </button>
      </div>
    );
  }
}

export default Toggle;
