import React from 'react';
//  import 
import  Main from './components/Main/Main';
import Join from './components/Join/Join';
import Elisha from './components/Elisha/Elisha';
import Neha from './Neha/Neha';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/main" component={Main} />
      <Route path="/elisha" component={Elisha} />
      <Route path="/neha" component={Neha} />
      
    
    </Router>
  );
}

export default App;
