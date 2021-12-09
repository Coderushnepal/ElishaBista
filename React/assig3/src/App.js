import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Component/user';
import  EnhancedRedBull from './Component/user'

function App() {
  const names=[
    "Neha",
    "Elisha",
    "Srijana",
    "Sindhu",
    "Bisikha",
    "Kirtee",
    "Kirtika",
    "Trijha",
    "Kusum"

]
  return (
    <div className="App">
    
    <h1> {names.map((name)=>(<  EnhancedRedBull key={name} name={name}/>))}</h1>
    
    </div>
  );
}

export default App;
