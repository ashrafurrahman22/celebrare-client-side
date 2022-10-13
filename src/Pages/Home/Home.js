import React from 'react';
import Card from '../../Components/Card';
import Features from '../../Components/Features';
import SingleCard from '../../Components/SingleCard';

const Home = () => {
    return (
        <div>
            <Card/>
            <div className='mt-[-200px] lg:absolute relative'>
            <SingleCard/>
            </div>
            <Features/>

        </div>
    );
};

export default Home;