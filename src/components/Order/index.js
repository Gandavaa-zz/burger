import React from 'react';

import css from "./style.module.css";

const Order = (props) => {
    console.log(props.order);
    return <div className={css.Order}>
        <p>Орц: {props.order.orts.bacon}</p>
        <p>Хаяг: {props.order.hayag.name} | {props.order.hayag.street} | {props.order.hayag.city}</p>        
        <p>Үнийн дүн: {props.order.dun}</p>
    </div>;
};

export default Order;
