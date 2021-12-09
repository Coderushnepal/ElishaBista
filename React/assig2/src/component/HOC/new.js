import React,{Component} from 'react';
const withUsers=(WrappedComponent)=>{
    class Userone extends Component {
        constructor(props){
            super(props)
            this.state={
                count:0,
                show:true
            }
        }
        add=()=>{
           this.setState({count:this.state.count+1}) 
        }
        sub=()=>{
           this.setState({count:this.state.count-1}) 
        }
        render(){
            return(
                <WrappedComponent count={this.state.count} add={this.add} sub={this.sub} />
            )
        }
    }
    return Userone;
}
export default withUsers;