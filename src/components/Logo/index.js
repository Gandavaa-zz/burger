import React from 'react';


import logoImage from "../../assets/images/burger-logo.png";
// eslint-disable-next-line

import css from './style.module.css';

const Logo = () => (
    <div className={css.Logo}>
        <img className={css.Logo} src={logoImage} alt="its logo"/>
    </div>
)

export default Logo