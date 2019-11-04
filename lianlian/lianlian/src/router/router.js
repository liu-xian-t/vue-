import React, { Component } from 'react';
import {BrowserRouter,NavLink,Switch,Route,Redirect} from "react-router-dom"
import Home from '../view/home';
import Detail from '../view/detail';
import  Collect  from '../view/collect';
import Shopcar from '../view/shopcar';
export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
              <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/detail" component={Detail}></Route>
                  <Route path="/collect" component={Collect}></Route>
                  <Route path="/shopcar" component={Shopcar}></Route>>
                  <Redirect from="/" to="/home"></Redirect>
              </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
