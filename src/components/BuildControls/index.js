import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/burgerActions';

import BuildControl from '../BuildControl';
import css from './style.module.css';

const BuildControls = props => {

    const disabledIngredients = {...props.ingredients};

    for(let key in disabledIngredients){
        disabledIngredients[key] = disabledIngredients[key] <= 0            
    }
 
    return (        
            <div className={css.BuildControls}>
                <p>Бүргер үнэ: <strong> {props.price} </strong></p>

                { Object.keys(props.ingredientNames).map(el =>( 
                    <BuildControl   
                        key ={el}                      
                        ortsNemeh={props.addRecipeBurger} 
                        ortsHasah={props.subRecipeBurger} 
                        disabledIngredients={disabledIngredients}
                        type={el} 
                        orts={props.ingredientNames[el]}/>
                ))}        

                <button 
                    disabled={!props.purchasing} 
                    className={css.OrderButton} 
                    onClick={props.showConfirmModal}
                >ЗАХИАЛАХ</button>
            </div>
    )
}


// two parameter can send to this
// convert State to Props
const mapStateToProps = state => {
    return {
        ingredients: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice, 
        purchasing: state.burgerReducer.purchasing, 
        ingredientNames: state.burgerReducer.ingredientNames
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRecipeBurger:  ortsNer => dispatch(actions.addIngredient(ortsNer)),
        subRecipeBurger:  ortsNer => dispatch(actions.removeIngredient(ortsNer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);