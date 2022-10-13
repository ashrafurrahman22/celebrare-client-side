import React from 'react';
import background from '../assets/Background.jpg'
import card1 from '../assets/Page1.jpg'
import card2 from '../assets/Page2.jpg'
import card3 from '../assets/Page3.jpg'

const Card = () => {
    return (
        <div>
            <img src={background} alt="" />
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
        </div>
    );
};

export default Card;