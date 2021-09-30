import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import css from './style.module.css';

import Button from '../../components/General/Button';
import Spinner from '../../components/General/Spinner';
import { Redirect } from 'react-router-dom';


class Signup extends Component {
    state = {
        email: "",
        password1: "", 
        password2: "", 
        error: null
    };

    changeEmail = (e) => {
        // event state uurchlunu
        // class base component save states
        this.setState({ email:e.target.value});
    }
    
    changePassword1 = (e) => {        
        this.setState({ password1:e.target.value});
    }

    changePassword2 = (e) => {                
        this.setState({ password2:e.target.value});
    }

    singup = () => {
        if (this.state.password1 === this.state.password2){
            this.props.singupUser(this.state.email, this.state.password1);            
        }else {
            this.setState({error: 'Нууц үг таарахгүй байна!'})
        }
    }

    render () {
        return (
        <div className ={css.Signup}>
            { this.props.userId && <Redirect to="/orders" /> }
            <h1>Бүртгэлийн форм</h1>
            <div>Та өөрийн мэдээллээ оруулна уу!</div>
            <input onChange={this.changeEmail} type="text" placeholder ="Имэйл хаяг"/>
            <input onChange={this.changePassword1} type="password" placeholder ="Нууц үг ээ оруулна уу"/>
            <input onChange={this.changePassword2} type="password" placeholder ="Нууц үг давтан оруулна уу"/>

            {this.props.firebaseError && <div style={{color:'red'}}>{this.props.firebaseError}</div>}

            { this.props.saving && <Spinner/> }
            
            <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan = {this.singup} />
        </div>
        );
    }
}

// action 
const mapStateToProps = state => {
    return {
        saving: state.signupReducer.saving, 
        firebaseError: state.signupReducer.firebaseError, 
        userId: state.signupReducer.userId
    }
}

// Dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        singupUser: (email, password) => 
            dispatch(actions.singupUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);