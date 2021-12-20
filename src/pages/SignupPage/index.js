import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import css from './style.module.css';

import Button from '../../components/General/Button';
import Spinner from '../../components/General/Spinner';
import { Redirect } from 'react-router-dom';


const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error,  setError] = useState('');

    useEffect(() => {
        setPassword2(email);
    }, [email])

    const singup = () => {
        if (password1 === password2){
            props.singupUser(email, password1);            
        }else {
            setError('Нууц үг таарахгүй байна!')
        }
    }
    
    return (
        <div className ={css.Signup}>
            { props.userId && <Redirect to="/orders" /> }
            <h1>Бүртгэлийн форм</h1>            
            <div>Та өөрийн мэдээллээ оруулна уу!</div>
            <input onChange={e =>setEmail(e.target.value)} type="text" placeholder ="Имэйл хаяг"/>
            <input onChange={e =>  setPassword1(e.target.value)} type="password" placeholder ="Нууц үг ээ оруулна уу"/>
            <input onChange={e =>  setPassword2(e.target.value)} type="password" placeholder ="Нууц үг давтан оруулна уу"/>

            {props.firebaseError && <div style={{color:'red'}}>{props.firebaseError}</div>}

            { props.saving && <Spinner/> }
            
            <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan = {singup} />
        </div>
        );
    
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