import React, { Component } from "react";

//const Button = ({ onClick, content }) => <div onClick={onClick} className="button">{this.children}</div>;

class Button extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="button">
        {this.props.children}
      </div>
    );
  }
}

export default Button;
