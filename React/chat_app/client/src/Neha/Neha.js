import React,{Component} from "react";
import './Neha.css';
import Header from '../components/Header/Header';
import Button  from '../components/Button/Button';
class Neha extends Component{
     
    render(){
       
  return (
    <div className="outerContainer">
      <div className="container">
          <Header />
            
          <Button />
     

          </div>
     
    </div>
  );
    }
}
export default Neha;