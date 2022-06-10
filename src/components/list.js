import React, {Fragment} from "react";

class List extends React.Component {
  render() {
    const numbers = this.props.numbers;
    const list = numbers.map((number) => {
      return <li key={number.toString()}>{number}</li>;
    });
    return <ul>{list}</ul>;

    // In JSX
    // return (
    //     <ul>
    //         {numbers.map((number)=>{
    //             return <li key={number.toString()}>{number}</li>
    //         })}
    //     </ul>
    // )
  }
}

export default List;
