import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import Burger from "../../components/Burger";
import ContactData from '../../components/ContactData';
import Button from '../../components/General/Button';

import css from './style.module.css';

const ShippingPage =(props) =>{
    
    const cancelOrder = () => {
        props.history.goBack();
    };

    const showContactData = () =>{
        props.history.replace("/ship/contact");
    }
    return (
        <div className={css.ShippingPage}>
            <p style={{ fontSize: '28px'}}><strong>Таны захиалга амттай болно гэж найдаж байна...</strong></p>
            <p style={{ fontSize: '28px'}}><strong>Дүн: { props.price }</strong></p>
            <Burger />
            <Button daragdsan={cancelOrder} btnType="Danger" text="Захиалгыг цуцлах"/>
            <Button daragdsan={showContactData} btnType="Success" text="Хүргэлтийн мэдээлэл оруулах"/>
            <Route path="/ship/contact">
                <ContactData />
            </Route>
        </div>
        )           
}

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice              
    };
};

export default connect(mapStateToProps)(ShippingPage);