import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
import OrderPage from '../OrderPage';
import ShippingPage  from '../ShippingPage';
import LoginPage  from '../LoginPage';
import SignupPage  from '../SignupPage';

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
          <Route path="/signup" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
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
