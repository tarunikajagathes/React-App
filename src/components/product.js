import React from "react";
import { Search } from "./search";

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { selected: '' };
      }

      handleChange(e){
          this.setState({selected:e.target.value})
      }
productItems=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  render(){
    //   const select=this.state.selected;
      <Search/>
      return (
          <div>
              <p>hello</p>
          </div>
      )
  }
}

export default Product