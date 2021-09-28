import React from 'react';
import { connect } from 'react-redux';
import Button from '../General/Button';
import Spinner from '../General/Spinner';
import { withRouter } from 'react-router-dom';
import * as actions from "../../redux/actions/orderActions"

import css from './style.module.css';

class ContactData extends React.Component{
    state ={
        hayag: {
            name: null,
            city: null,
            street: null            
        }
    };

    componentDidUpdate(){
        if ( this.props.newOrderStatus.finished && !this.props.newOrderStatus.error)
            this.props.history.replace('/orders')
    }

    saveOrder =() =>{         
        const newOrder = {
            orts: this.props.ingredients,
            dun: this.props.price, 
            hayag: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        }
        this.props.saveOrderAction(newOrder)        
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
            Дүн : { this.props.price}₮
            <div>
                {this.props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа: `}
            </div>

            {this.props.newOrderStatus.saving ? <Spinner /> : (
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
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
        newOrderStatus: state.orderReducer.newOrder
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));