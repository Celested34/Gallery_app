
//import dependencies 
import React from 'react';
import { NavLink } from 'react-router-dom';

//creates main nav component with three buttons
let Nav = () => {
    return (
            <nav className = "main-nav">
                <ul>
                    <li><NavLink to="/birds">Birds</NavLink></li>
                    <li><NavLink to="/dogs">Dogs</NavLink></li>
                    <li><NavLink to="/cookies">Cookies</NavLink></li>
                </ul>
            </nav>
    )
}

//export the component
export default Nav;