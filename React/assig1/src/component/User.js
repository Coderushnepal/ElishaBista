import React from 'react'; 
import './operation.css';
class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            show:true
        };
    }
    Add=()=>{
        this.setState({count:this.state.count+1})
    }
    Substract=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
            <button class="btn btn-add" onClick={this.Add}>
                <span>+</span>
            </button>
             <button class="btn btn-sub" onClick={this.Substract}>
             <span>-</span>
         </button>
         <h2>{this.state.count}</h2>
         </div>
        )
    }
}
export default User;