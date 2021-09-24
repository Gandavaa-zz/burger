import React from "react";
import BurgerIgredient from "../BurgerIngredient";
import { withRouter } from "react-router-dom";  
import css from "./style.module.css";

const Burger = props => {

    const items = Object.entries(props.orts);

    let content = [];

    // eslint-disable-next-line array-callback-return
    items.map((el, index) => {        
        for( let i =0; i<el[1]; i++)
        content.push(< BurgerIgredient 
            choose = {props.choose}
            key={`${el[0]}${i+1}`} 
            type={el[0]} />);
    });

    if(content.length ===0){
        content = <p>Хачиртай талхны орцыг сонгоно уу!</p>
    }

    return (
    <div className ={css.Burger}>
        <BurgerIgredient type="bread-top"/>
        {content}       
        <BurgerIgredient type="bread-bottom"/>
    </div>
    );
};

export default withRouter(Burger);