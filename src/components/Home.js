import React from 'react';
import homeImg from '../img/shoponline.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className='home'>
            <Link to={'/products'}><button className='home-button'>View All Products</button></Link>
        </div>
    )
}

export default Home;