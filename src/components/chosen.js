import React from "react";
import $ from 'jquery';

class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);

    this.handleChange = this.handleChange.bind(this);
    this.$el.on("change", this.handleChange);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.$el.trigger("chosen:updated");
    }
  }

  componentWillUnmount() {
    this.$el.off("change", this.handleChange);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={(el) => (this.el = el)}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

export function Example() {
  return (
    <Chosen onChange={(value) => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}
