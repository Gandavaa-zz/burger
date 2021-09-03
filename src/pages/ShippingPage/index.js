import React from 'react';
import Burger from "../../components/Burger";
import Button from '../../components/General/Button';

import css from './style.module.css';

export class ShippingPage extends React.Component{

    state = {
        ingredients: {
            salad: 0, 
            cheese: 0, 
            bacon: 1, 
            meat: 1
        }        
    };    

    componentDidMount(){        
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for(let param of query.entries()){
            ingredients[param[0]] = param[1];            
        }
        this.setState({ingredients});        
    }

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
        <div>
            <Burger orts={this.state.ingredients} />
            <Button daragdsan={this.goBack} btnType="danger" text="Захиалгыг цуцлах"/>
        </div>
        )
    };        
}