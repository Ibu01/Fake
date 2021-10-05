import React from 'react';
import logo from '../../images/notfound.jpg';

const Notfound = () => {
    const notFoundStyle = {
        textAlign: "center"
    }
    return (
        <div style={notFoundStyle}>
            <h2>Page not found</h2>
            <img src={logo} alt="" />
        </div>
    );
};

export default Notfound;