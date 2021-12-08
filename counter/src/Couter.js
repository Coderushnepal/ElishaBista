import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementClick =()=>{
      this.setState({count: this.state.count + 1})
  }

  render() {
    const style = {
      height: "30px",
      width: "120px",
    };
    console.log(this.state.count);
    return (
      <button onClick={this.incrementClick} style={style}>
        Press {this.state.count} times
      </button>
    );
  }
}
export default Counter;