import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <nav>
            <ul className={classes.Navblock}>
                <li><NavLink to="/" exact>home</NavLink></li>
                <li><NavLink to="/news">news</NavLink></li>
                <li><NavLink to="/login">log in</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
