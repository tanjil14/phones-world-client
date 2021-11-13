import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Service from '../../components/Service/Service';
import './OurServices.css';

const OurServices = () => {
    const [services, setOurServices] = useState([])
    useEffect(() => {
        fetch('https://morning-refuge-62244.herokuapp.com/services')
            .then(result => result.json())
            .then(data => setOurServices(data))
    }, []);
    return (
        <div className=''>
            <Header></Header>
            <div className="text-center p-3 fw-fold">
                <h1 className='fw-bold'>All Products</h1>
            </div>
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 p-4 gy-4 " >
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default OurServices;