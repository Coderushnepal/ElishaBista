import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './component/User';
import CounterApp from './component/CounterApp'

function App() {
 const names=[
 "Neha",
   "Elisha",
   "Kirtee",
   "Rachana",
   "Bisikha",
   "Sindhu",
   "Srijana",
   "Kirtika"

 ]
return (
   <div> 
     <User />
     <h1> {names.map((name)=>(<CounterApp key={name} name={name}/>))}</h1>

    </div>
  );
}

export default App;
