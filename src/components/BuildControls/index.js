import React from 'react';

import BuildControl from '../BuildControl';

import css from './style.module.css';

const BuildControls = props => {

    const controls = {
        bacon: 'Гахайн мах',
        cheese: 'Бяслаг',
        meat: 'Үхрийн мах',
        salad: 'Салад'
    }

    return (        
            <div className={css.BuildControls}>
                <p>Бүргер үнэ: <strong> {props.price} </strong></p>

                { Object.keys(controls).map(el =>( 
                    <BuildControl   
                        key ={el}                      
                        ortsNemeh={props.ortsNemeh} 
                        ortsHasah={props.ortsHasah} 
                        disabledIngredients={props.disabledIngredients}
                        type={el} 
                        orts={controls[el]}/>
                ))}        

                <button disabled={props.disabled} className={css.OrderButton}>
                    ЗАХИАЛАХ
                </button>
            </div>
    )
}

export default BuildControls;