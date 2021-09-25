import React from 'react';
import { connect } from 'react-redux';

import Button from '../General/Button';

const OrderSummary =(props) =>{

    return (
        <div>
            <h1>
            Таны захиалга
            </h1>
            <p> Таны сонгосон орц:</p>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li key={el}>{props.ingredientNames[el]}: {props.ingredients[el]}</li>
                    )
                )}
            </ul>
            <p><strong>Захиалгын дүн: { props.price }₮</strong></p>

            <p>Цааш?</p>
            <Button daragdsan={props.onCancel} btnType="Danger" text="Татгалзах"/>
            <Button daragdsan={props.onContinue} btnType="Success" text="Үргэлжлүүлэх"/>
        </div>);
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        ingredientNames: state.ingredientNames,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(OrderSummary);