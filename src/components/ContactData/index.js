import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import Button from '../General/Button';
import Spinner from '../General/Spinner';
import { withRouter } from 'react-router-dom';



import css from './style.module.css';

class ContactData extends React.Component{
    state ={
        hayag: {
            name: null,
            city: null,
            street: null,
            loading:false
        }
    };

    saveOrder =() =>{         
        const order = {
            orts: this.props.ingredients,
            dun: this.props.price, 
            hayag: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        }           
        /*eslint no-unused-vars: "error"*/     
        this.setState({loading : true});
        axios.post('/orders.json', order)        
        .then(()=>console.log('error'))
        .catch(error=> {
            console.log('order amjiltgui'+error);
        })
        .finally(()=> {
            this.setState({loading: false});
            this.props.history.replace('/orders')
        });
    }

    changeName =(e) =>{
        this.setState({name: e.target.value
        })
    }
    changeStreet =(e) =>{
        this.setState({street: e.target.value
        })
    }
    changeCity =(e) =>{
        this.setState({city: e.target.value
        })
    }

    render() {
        return <div className={css.ContactData}>
            {this.state.loading ? <Spinner /> : (
                <div>
                    <input 
                     onChange = {this.changeName} 
                    type="text" name="name" placeholder = "Таны нэр" />

                    <input onChange = {this.changeStreet} 
                    type="text" name="street" placeholder = "Таны гэрийн хаяг" />

                    <input onChange = {this.changeCity}  type="text" name="city" placeholder = "Таны хот" />

                    <Button text="Илгээх" btnType="Success" daragdsan={this.saveOrder}/>
                    </div>
            )}
           
        </div>;
    }
}

const mapStateToProps = state => {
    return { 
        price: state.totalPrice,
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(withRouter(ContactData));