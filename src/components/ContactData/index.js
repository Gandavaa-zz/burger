import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import Button from '../General/Button';
import Spinner from '../General/Spinner';
import { withRouter } from 'react-router-dom';
import * as actions from "../../redux/actions/orderActions"

import css from './style.module.css';

const ContactData = (props) => {
    const [name, setName] = useState(null);
    const [city, setCity] = useState(null);
    const [street, setStreet] = useState(null);  

    const dunRef = useRef();
    
    
    useEffect(() => {
        console.log('contact data effect :>> ');
        if ( props.newOrderStatus.finished && !props.newOrderStatus.error)
            props.history.replace('/orders')

        return () => {
            // Clear funciton: Order clear and prepare next order
            console.log('order clearing :>> ');

            props.clearOrder();

        }
    }, [props.newOrderStatus.finished]);

    const saveOrder =() =>{         
        const newOrder = {
            userId: props.userId,
            orts: props.ingredients,
            dun: props.price, 
            hayag: {
                name,
                city,
                street
            }
        }
        props.saveOrderAction(newOrder)        
    }

    const changeName =(e) =>{
        console.log(dunRef.current, 'changed');
        if (dunRef.current.style.color =='red') dunRef.current.style.color ='green'
        else dunRef.current.style.color ='red'
        setName(e.target.value)
    }
    
    const changeStreet =(e) =>{
        setStreet(e.target.value)
    }
    
    const changeCity =(e) =>{
        setCity(e.target.value)
    }
    
    return <div className={css.ContactData}>            
        <div ref={dunRef}>
            <strong style={{fontSize: "16px"}}>Дүн : { props.price} ₮</strong></div>
        <div>
            {props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа: `}
        </div>

        {props.newOrderStatus.saving ? <Spinner /> : (
            <div>
                <input onChange = {changeName} type="text" name="name" placeholder = "Таны нэр" />

                <input onChange = {changeStreet} type="text" name="street" placeholder = "Таны гэрийн хаяг" />

                <input onChange = {changeCity}  type="text" name="city" placeholder = "Таны хот" />

                <Button text="Илгээх" btnType="Success" daragdsan={saveOrder}/>
            </div>
        )}           
    </div>;
    
}

const mapStateToProps = state => {
    return { 
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
        newOrderStatus: state.orderReducer.newOrder,
        userId: state.signupReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
        clearOrder: () => dispatch(actions.clearOrder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));