import React from 'react';

import css from './style.module.css';

const newBuildControl = props => (

<div className={css.BuildControl}>
    <div className={css.Label}>{props.recipe}</div>
    <button
        disabled={props.disabledIngredients[props.type]}
        className={css.Less} 
        onClick={()=>props.subRecipe(props.type)} 
        >
            Хасах</button>

    <button onClick={() => props.addRecipe(props.type) } className={css.More}>Нэмэх</button>
</div>
)

export default newBuildControl;