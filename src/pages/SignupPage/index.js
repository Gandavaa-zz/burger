import React, {Component} from 'react';
import Button from '../../components/General/Button';
import css from './style.module.css';

class Signup extends Component {
    state = {
        email: "",
        password: ""
    };

    changeEmail = (e) => {
        // event state uurchlunu
        // class base component save states
        this.setState({ email:e.target.value});
    }
    
    changePassword1 = (e) => {        
        this.setState({ email:e.target.value});
    }

    changePassword2 = (e) => {                
        this.setState({ email:e.target.value});
    }

    singup = () => {
        alert('SignUp ...' +  this.state.email + ":" + this.state.password);
    }

    render () {
        return (
        <div className ={css.Signup}>
            <h1>Бүртгэлийн форм</h1>
            <div>Та өөрийн мэдээллээ оруулна уу!</div>
            <input onChange={this.changeEmail} type="text" placeholder ="Имэйл хаяг"/>
            <input onChange={this.changePassword1} type="password" placeholder ="Нууц үг ээ оруулна уу"/>
            <input onChange={this.changePassword2} type="password" placeholder ="Нууц үг давтан оруулна уу"/>
            <Button text="Бүртгүүлэх" btnType="Success" daragdsan = {this.singup} />
        </div>
        );
    }
}

export default Signup;