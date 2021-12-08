import React,{Component} from 'react';
import  dummyChatData from '../../constants/dummyData';
import './Button.css';

class Button extends Component{
     state={
         textMessage:'',
        
     };

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
 



    render(){
        return(
          
            <form className="form">
            <input className="input" type="text" placeholder="Type a text..." id="2" ></input>
           
            <button className="sendButton"id="1"  onClick={e=>e.preventDefault()} >SEND</button>

        
           
        </form>
        )
    }
    
}
export default Button;


// dummyChatData.map((post) => {
//     return (
//     <p>{post.content}</p>