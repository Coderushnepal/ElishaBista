import React from "react";



class Hover extends React.Component {
  constructor(props){
      super(props)
      this.state={
          count:0
      }
  }
  onMouseLeave =()=>{
      this.setState({count: this.state.count + 1})
  }
  render() {
    console.log(this.state.count);
    return (
      <h1 onMouseLeave={this.onMouseLeave}>
        Hello I am a hovering {this.state.count} times
      </h1>
    );
  }
}

export default Hover;
