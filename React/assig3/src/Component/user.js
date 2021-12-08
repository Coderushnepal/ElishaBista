import React from 'react';
import  withRedbull from  './withRedbull'
class User extends React.Component{
    constructor(props){
        super(props)
       
    }
    render() {
    return(
   <div>
   < h4 >{ this.props.name }</h4>
    <h4 class="wing">{this.props.wings}</h4>
   <button class='btn' onClick={this.props.flyAway}>Click Me</button>
     
     
    
    
   
   </div>
    )
  }
}
export default  withRedbull( User);