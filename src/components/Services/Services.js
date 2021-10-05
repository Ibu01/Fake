import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [serviceCategory, setServiceCategory] = useState([])
    useEffect(() => {
        fetch("./services.JSON")
            .then(res => res.json())
            .then(data => setServiceCategory(data))
    }, [])
    return (
        <div>
            <h1 className="service-title">What Do You want?Check it Out</h1>
            <div className="services-container">
                {
                    serviceCategory.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;