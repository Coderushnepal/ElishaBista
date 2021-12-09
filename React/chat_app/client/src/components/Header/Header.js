import React,{Component} from 'react';
import onlineIcon from './onlineIcon.png';
 import closeIcon from './closeIcon.png';
import './Header.css';
class Header extends Component{
   
    render(){
        return(
            <div className="header">
            <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          
            </div>
     

            <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close icon" /></a>
                </div>   
                      </div>
        )
    }
}
export default Header;