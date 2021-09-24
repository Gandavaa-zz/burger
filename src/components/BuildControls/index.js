import React from 'react';

import BuildControl from '../BuildControl';

import css from './style.module.css';

const BuildControls = props => {
 
    return (        
            <div className={css.BuildControls}>
                <p>Бүргер үнэ: <strong> {props.price} </strong></p>

                { Object.keys(props.ingredientNames).map(el =>( 
                    <BuildControl   
                        key ={el}                      
                        ortsNemeh={props.ortsNemeh} 
                        ortsHasah={props.ortsHasah} 
                        disabledIngredients={props.disabledIngredients}
                        type={el} 
                        orts={props.ingredientNames[el]}/>
                ))}        

                <button 
                    disabled={props.disabled} 
                    className={css.OrderButton} 
                    onClick={props.showConfirmModal}
                >ЗАХИАЛАХ</button>
            </div>
    )
}

export default BuildControls;