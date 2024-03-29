import React from 'react';
import './Burger.scss'

const burger = (props) => {
    return (
        <button onClick={props.toggle} className={`burger-container ${props.nav ? 'active' : ""}`}>
            <div className="burger-line1" />
            <div className="burger-line2" />
            <div className="burger-line3" />
        </button>
    );
}
 
export default burger;