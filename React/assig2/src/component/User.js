import React from 'react';
import withUsers from './HOC/new';
class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
             <button class="btn btn-add" onClick={this.props.add}>
                <span>+</span>
            </button>
             <button class="btn btn-sub" onClick={this.props.sub}>
             <span>-</span>
         </button>
         <h2>{this.props.count}</h2>
       
            
          </div>
        )
    }
}
export default  withUsers(User);