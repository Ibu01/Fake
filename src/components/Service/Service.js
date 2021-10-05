import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, catageory, img, price, duration } = props.service
    return (
        <div className="service-conatiner">
            <img src={img} alt="" />
            <h5>Service Name:{name}</h5>
            <p>Consumer:{catageory}</p>
            <p>Duration:{duration}</p>
            <p>${price}</p>
            <button className="service-btn">Get Services Now</button>
        </div>
    );
};

export default Service;