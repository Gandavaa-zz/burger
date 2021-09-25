import React, { Component } from 'react';
import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
import OrderPage from '../OrderPage';
import { Route, Switch } from 'react-router-dom';

import { ShippingPage } from '../ShippingPage';
// class bolgoe

class App extends Component {

  state = {
    showSideBar: false, 
    favorite: 'N/A'
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { 
        showSideBar: !prevState.showSideBar
      }
    });
  }


  render (){
    return (<div>
      <Toolbar toggleSideBar = {this.toggleSideBar}/>
      <SideBar 
        showSidebar ={this.state.showSideBar} 
        toggleSideBar = {this.toggleSideBar}
      />

      <main className={css.Content}>
        <p>Сонгосон орц : {this.state.fovorite} </p>
        <Switch>
          <Route path="/orders" component={OrderPage}/>
          <Route path="/ship" component={ShippingPage}/>
          <Route path="/"  component = {BurgerPage}/>

        </Switch>
      </main>      
      <div>
        Testing...        
      </div>
    </div>)
  }  
}

export default App;
