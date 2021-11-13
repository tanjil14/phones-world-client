import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './Form.css';

const Form = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const { addToCart } = useAuth();
    const [service, setService] = useState({})
    const id = localStorage.getItem('orders');
    useEffect(() => {
        fetch(`https://hidden-coast-67939.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])
    const history = useHistory();
    const handleSubmit = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const orderedUserInfo = { name, email, address, phone };
        console.log(orderedUserInfo);
        addToCart(orderedUserInfo, service);
        history.push('/thanks');
        e.preventDefault();

    }
    return (
        <div>
            <Header></Header>
            <div className="container contai mt-5 w-50">
                <h1 style={{ textAlign: 'center' }}>Fill up the form</h1>
                <form className='opinion' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" ref={nameRef} name="name" placeholder="Your first name" />
                    <label htmlFor="email">Email</label>
                    <input type="text" ref={emailRef} name="email" placeholder="...@gmail.com" />
                    <label htmlFor="address">Address</label>
                    <input type="text" ref={addressRef} name="address" placeholder="address" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" ref={phoneRef} name="phone" placeholder="" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Form;