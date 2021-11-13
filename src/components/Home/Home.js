import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Extra/Blog';
import WhyUs from '../Extra/WhyUs'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <WhyUs></WhyUs>
            <ShowReviews></ShowReviews>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;