import React from 'react';
import { NavLink } from 'react-router-dom';
import './ServicesStyle.css'

const HomeServices = (props) => {
    const { price, name, catageory, img } = props.serve
    return (
        <div className="services-style">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price is:{price}</h3>
            <h3>Quality:{catageory}</h3>
            <button className="admission-button">Admission Now</button>
            <NavLink className="quires" to="/student">See Queries</NavLink>
        </div>
    );
};

export default HomeServices;