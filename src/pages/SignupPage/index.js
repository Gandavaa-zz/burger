import React, {Component} from 'react';
import Button from '../../components/General/Button';
import css from './style.module.css';
import * as actions from "../../redux/actions/signupActions";
import {connect} from "react-redux";

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
            <h1>Бүртгэлийн форм</h1>
            <div>Та өөрийн мэдээллээ оруулна уу!</div>
            <input onChange={this.changeEmail} type="text" placeholder ="Имэйл хаяг"/>
            <input onChange={this.changePassword1} type="password" placeholder ="Нууц үг ээ оруулна уу"/>
            <input onChange={this.changePassword2} type="password" placeholder ="Нууц үг давтан оруулна уу"/>

            {this.state.error && <div style={{color:'red'}}>{this.state.error}</div>}
            <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan = {this.singup} />
        </div>
        );
    }
}

// Dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        singupUser: (email, password) => 
            dispatch(actions.singupUser(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Signup);