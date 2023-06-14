import React from 'react';
import './Home.css'
import img1 from  '../assets/img1.png'
import Depoimentos from '../component/Depoimentos';
const Home = () => {
    return (
        <div className='home'>
            <img src={img1} id='conjunto1'/>
            <Depoimentos/>
        </div>
    );
};

export default Home;
