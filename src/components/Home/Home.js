import React, { useEffect, useState } from 'react';
import Background from '../Background/Background';
import HomeServices from '../HomeServices/HomeServices';
import './Home.css'
// we create ,usefect,usestate and also fetch here
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./people.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Background></Background>
            <h1 className="home-title">We Serve you</h1>
            <div className="home-container">
                {
                    services.map(serve => <HomeServices
                        key={serve.key}
                        serve={serve}
                    ></HomeServices>)
                }
            </div>
        </div>
    );
};

export default Home;