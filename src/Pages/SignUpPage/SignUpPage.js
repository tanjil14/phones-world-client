import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './SignUpPage.css';

const SignUpPage = () => {
    const { contexts } = useAuth();
    const { createEmailPasswordUser } = contexts;
    const emailRef = useRef();
    const passRef = useRef();
    const nameRef = useRef();
    const handleRegistration = (e) => {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const name = nameRef.current.value;
        e.preventDefault();
        console.log("reg is clicked", email, password);
        // console.log(createEmailPasswordUser);
        createEmailPasswordUser(name, email, password);
    }
    return (
        // sign up form
        <>
            <Header></Header>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 input-field-container roundeds">
                        <h2 className="fw-bold">Sign Up</h2>
                        <form onSubmit={handleRegistration}>
                            <input ref={nameRef} className="input-field" type="text" placeholder="Name" required />
                            <br />
                            <input ref={emailRef} className="input-field" type="text" placeholder="E-mail" required />
                            <br />
                            <input ref={passRef} className="input-field" type="password" placeholder="Password" required />
                            <br />
                            {/* sign up and cancel button */}
                            <div className="clearfix text-center">
                                <input type="submit" value="Register" className='form-btn mb-3' />
                                <br />
                                <NavLink to='/login'>Already Registerd?</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SignUpPage;