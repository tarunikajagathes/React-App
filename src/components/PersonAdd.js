import React from 'react';
import api from './api';

export default class PersonAdd extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    const data=await api.post(`users`, { user });
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    console.log(data)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}