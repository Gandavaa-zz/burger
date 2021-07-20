import React from 'react';

const OrderSummary =(props) =>{

    return (
        <div>
            <h1>
            Таны захиалга
            </h1>
            <p> Таны сонгосон орц:</p>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li>{props.ingredientNames[el]}: {props.ingredients[el]}</li>
                    )
                )}
            </ul>
            <p>Цааш?</p>
        </div>);
}

export default OrderSummary;