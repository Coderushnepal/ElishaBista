import React from 'react';
const withRedbull =(WrappedComponent)=>{
    class UserWrapper extends React.Component{
        constructor(props){
            super(props)
            this.state={
                wings:null,
            }

        }
        // wings=()=>{
        //     this.setState({ count : 'I have wings'})
        // }
        flyAway=()=>{
          this.setState({wings:'I can fly Away'})
        }
        render(){
          
            return  <WrappedComponent  wings={this.state.wings} flyAway={this.flyAway} {...this.props} />
      
    }
}
    return UserWrapper; 

}
export default withRedbull;