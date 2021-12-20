import React, { useState, useEffect } from 'react';
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

const App = props => {

	const [showSideBar, setShowSideBar] = useState(false)

	const toggleSideBar = () => {
		setShowSideBar(prevState => !prevState)
	}

	useEffect(() => {
		const token = localStorage.getItem('token');
		const userId = localStorage.getItem('userId');
		const expireDate = new Date(localStorage.getItem('expireDate'));
		const refreshToken = localStorage.getItem('refreshToken');

		if (token){
		// check if date is Expired or not
		if (expireDate > new Date()){
			// automatically logged in
			props.autoLogin(token, userId);
			// when Token finished, calculate the rest of the time
			// Then logout automaticlly
			props.autoLogoutAfterMillsec(expireDate.getTime() - new Date().getTime());
		}else 
			// Token has been timed out then logout
			// call logout
			props.logout();  
		
		}		
	}, []);
	

  	return (
	  <div>
		<Toolbar toggleSideBar = {toggleSideBar}/>
		<SideBar showSidebar ={showSideBar} toggleSideBar = {toggleSideBar} />

      	<main className={css.Content}>

        { props.userId ? 
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
