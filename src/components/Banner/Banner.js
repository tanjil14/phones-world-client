import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='row row-cols-1 row-cols-md-2 mt-5'>
            <div className='col text-center'>

                <h3>Wanna buy a phone</h3>
                <h1 className='banner-heading fw-bold'>Check Out <br /> Phone's World</h1>
                <p className='mt-3'>World best features and exclusive phone now is in your hand. Click order and enjoy.</p>
            </div>
            <div className='col'>
                <img className='img-fluid pe-4' src="https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        </div>
    );
};

export default Banner;