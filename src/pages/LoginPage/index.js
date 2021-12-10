import React, {Component, useState, useEffect }from 'react';
import { connect } from 'react-redux';
import Button from '../../components/General/Button';
import css from './style.module.css';
import * as actions from '../../redux/actions/loginActions';
import Spinner from '../../components/General/Spinner';
import { Redirect } from "react-router-dom";

const Login = (props) => {
   
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    
    
    useEffect(() => {
        console.log('login effect');

        return () => {
            console.log('clear function ');
        }
    }, [form.password])

    const login = () => {
        props.login(form.email, form.password)
    }

    //syntitec event Its not real event because virtual dom-s event
    const changeEmail = (e) => {        
        const newEmail = e.target.value;
        // custom formBefore-г insert хийхийн тулд өмнөх password-г хадгалж авна        
        setForm( (formBefore) =>  ({ 
            email:newEmail, 
            password: formBefore.password
        }) );
    }
    
    const changePassword = (e) => {        
        const changedPassword = e.target.value;
        setForm( (formBefore) => ({ 
            email:formBefore.email, 
            password: changedPassword})
        );
    }
 
    return (
        <div className ={css.Login}>
            { props.userId &&  <Redirect to="/orders" /> }
            <input onChange={changeEmail} type="text" placeholder ="Имэйл хаяг"/>
            <input onChange={changePassword}  type="password" placeholder ="Нууц үг"/>
            
            { props.loginIn && <Spinner/> }
            { props.firebaseError && 
                <div style={{color:'red'}}> { props.firebaseError } код нь { props.firebaseErrorCode } </div> }
            <Button text="НЭВТРЭХ" btnType="Success" daragdsan = {login} />
        </div>
        );
    
}

const mapStateToProps = state => {
    return {
        loginIn : state.signupReducer.loginIn, 
        firebaseError: state.signupReducer.firebaseError,
        firebaseErrorCode: state.signupReducer.firebaseErrorCode,
        userId: state.signupReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);