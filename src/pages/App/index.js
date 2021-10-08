import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
import * as actions from '../../redux/actions/loginActions';

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

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token){
      // automatically logged in
        this.props.autoLogin(token, userId);
    }
  }

  render (){
    return (<div>
      <Toolbar toggleSideBar = {this.toggleSideBar}/>
      <SideBar 
        showSidebar ={this.state.showSideBar} 
        toggleSideBar = {this.toggleSideBar}
      />

      <main className={css.Content}>
                
        { this.props.userId ? 
                ( 
                    <Switch>
                      <Route path="/logout" component={Logout}/>
                      <Route path="/orders" component={OrderPage}/>
                      <Route path="/ship" component={ShippingPage}/>
                      <Route path="/"  component = {BurgerPage}/>
                    </Switch>
                ): (                 
                    <Switch>
                      <Route path="/signup" component={SignupPage}/>
                      <Route path="/login" component={LoginPage}/>
                      <Redirect to="/login" />
                  </Switch>                
            )}          
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

const mapDispatchToProps = dispatch => {
    return {
        autoLogin: (token, userId) => dispatch(actions.loginUserSuccess(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
