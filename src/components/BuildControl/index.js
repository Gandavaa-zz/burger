import React from 'react';
import css from './style.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/burgerActions';

const BuildControl = props => (

<div className={css.BuildControl}>
    <div className={css.Label}>{props.orts}</div>
    <button
        disabled={props.disabledIngredients[props.type]}
        className={css.Less} 
        onClick={()=>props.subRecipeBurger(props.type)} 
        >
            Хасах</button>

    <button onClick={() => props.addRecipeBurger(props.type) } className={css.More}>Нэмэх</button>
</div>
)

const mapDispatchToProps = dispatch => {
    return {
        addRecipeBurger:  ortsNer => dispatch(actions.addIngredient(ortsNer)),
        subRecipeBurger:  ortsNer => dispatch(actions.removeIngredient(ortsNer))
    }
}
export default connect(null, mapDispatchToProps)(BuildControl);