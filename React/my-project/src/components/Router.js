import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import * as routes from "../constants/routes";
import history from "../utils/History";
import  Main from './main';
import Favorites from  "./favorites";



const Router=()=>(
   <BrowserRouter history={history}>
       <Switch>
         <Route  path={routes.HOME} component={ Main}></Route>
         <Route  path={routes.FAVORITES} component={ Favorites}></Route>
       
       </Switch>
   </BrowserRouter>
);
export default Router;




