import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
  }
  handleSubmit(event) {
    alert(`Your name is ${this.state.value}`);
    event.prventDefault();
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Enter Your Name:
          <input id="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
