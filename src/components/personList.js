import React from 'react';
import API from './api';

export default class PersonList extends React.Component {
  state = {
    data: []
  }

  async componentDidMount() {
   const persons=await API.get(`users`);
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
    const data=persons.data;
    this.setState({data});
  }

  render() {
    return (
      <ul>
        {
          this.state.data
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}