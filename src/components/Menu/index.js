import React from 'react';

import css from './style.module.css';

import MenuItem from '../../MenuItem';

const Menu = () => (
    <div>
        <ul className={css.Menu}>
            <MenuItem active link="/">Шинэ захиалга</MenuItem>
            <MenuItem>Нэвтрэх</MenuItem>
        </ul>
    </div>
)

export default Menu;