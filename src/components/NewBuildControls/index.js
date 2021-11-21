import React from 'react';
import NewBuildControl from '../NewBuildControl';
import css from './style.module.css';

const newBuilControls = props => {

    return (        
        <div className={css.BuildControls}>
            <p>Бүргер үнэ: <strong> {props.price} </strong></p>
            { Object.keys(props.ingredientNames).map( el => (
                <NewBuildControl key={el}
                    addRecipe = {props.addRecipe}
                    subRecipe = {props.subRecipe}
                    disabledIngredients ={props.disabledIngredients}
                    type={el}
                    recipe = { props.ingredientNames[el]}
                    />
            ))}
        </div>
    )
}

export default newBuilControls;