import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './nav.scss'

const Nav = () => {
    
    return ( 
        <Menu pageWrapId={"page-wrap"} outerContainerId={"App"}>
            <Link id="home" className="menu-item" to="/">Home</Link>
            <Link id="about" className="menu-item" to="/bubblesort">Bubble Sort</Link>
            <Link id="about" className="menu-item" to="/mergesort">Merge Sort</Link>
            <Link id="about" className="menu-item" to="/about">About</Link>
        </Menu>
    );
}

export default Nav;