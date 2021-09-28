import React from 'react';

import css from './style.module.css';

import MenuItem from '../../MenuItem';

const Menu = () => (
    <div>
        <ul className={css.Menu}>
            <MenuItem exact link="/">Шинэ захиалга</MenuItem>
            <MenuItem link='/orders'>Захиалгууд</MenuItem>
            <MenuItem link='/login'>Нэвтрэх</MenuItem>
            <MenuItem link='/signup'>Бүртгүүлэх</MenuItem>
        </ul>
    </div>
)

export default Menu;