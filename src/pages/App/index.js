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
import * as signupActions from '../../redux/actions/signupActions';


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
    const expireDate = new Date(localStorage.getItem('expireDate'));
    const refreshToken = localStorage.getItem('refreshToken');

    if (token){
      // check if date is Expired or not
      if (expireDate > new Date()){
          // automatically logged in
          this.props.autoLogin(token, userId);
          // when Token finished, calculate the rest of the time
          // Then logout automaticlly
          this.props.autoLogoutAfterMillsec(expireDate.getTime() - new Date().getTime());
      }else 
          // Token has been timed out then logout
          // call logout
          this.props.logout();  
      
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
        autoLogin: (token, userId) => dispatch(actions.loginUserSuccess(token, userId)), 
        logout: () => dispatch(signupActions.logout()), 
        autoLogoutAfterMillsec: () => dispatch(signupActions.autoLogoutAfterMillsec())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
