import React from 'react';
import homeImg from '../img/shoponline.jpg'
import '../styles/home.css'

const Home = () => {
    return(
        <div className='home'>
            <img className='home-image' src={homeImg} alt='shop online'/>
        </div>
    )
}

export default Home;