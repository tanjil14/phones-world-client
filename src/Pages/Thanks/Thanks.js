import React from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css';

const Thanks = () => {
    return (
        <div className='text-center thanks p-5'>
            <h1>Thanks for staying with us</h1>
            <Link to='/'><button>Go To Home</button></Link>
        </div>
    );
};

export default Thanks;