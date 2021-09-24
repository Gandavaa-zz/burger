import React from 'react';
import { Route } from 'react-router';
import Burger from "../../components/Burger";
import ContactData from '../../components/ContactData';
import Button from '../../components/General/Button';

import css from './style.module.css';

export class ShippingPage extends React.Component{

    state = {
        ingredients: {},
        price: 0    
    };    

    componentWillMount(){        
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for(let param of query.entries()){
            if(param[0] !== "dun")  ingredients[param[0]] = param[1];            
            else price = param[1];
        }
        this.setState({ingredients, price});        
    }

    cancelOrder = () => {
        this.props.history.goBack();
    };

    showContactData = () =>{
        this.props.history.replace("/ship/contact");
    }

    render() {
        return (
        <div className={css.ShippingPage}>
            <p style={{ fontSize: '28px'}}><strong>Таны захиалга амттай болно гэж найдаж байна...</strong></p>
            <p style={{ fontSize: '28px'}}><strong>Дүн: { this.state.price }</strong></p>
            <Burger orts={this.state.ingredients} />
            
            <Button daragdsan={this.cancelOrder} btnType="Danger" text="Захиалгыг цуцлах"/>
            
            <Button daragdsan={this.showContactData} btnType="Success" text="Хүргэлтийн мэдээлэл оруулах"/>

            <Route path="/ship/contact">
                <ContactData
                    ingredients={this.state.ingredients}
                 />
            </Route>
        </div>
        )
    };        
}