import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
import OrderPage from '../OrderPage';
import ShippingPage  from '../ShippingPage';
import LoginPage  from '../LoginPage';
import SignupPage  from '../SignupPage';
import Logout from '../../components/Logout';

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
        UserId: { this.props.userId}

        <Switch>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/logout" component={Logout}/>
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

const mapStateToProps  = state => {
  return {
    userId: state.signupReducer.userId
  }
}

export default connect(mapStateToProps)(App);
