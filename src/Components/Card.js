import React from "react";
import background from "../assets/Background.jpg";
import card1 from "../assets/Page1.jpg";
import card2 from "../assets/Page2.jpg";
import card3 from "../assets/Page3.jpg";

const Card = () => {
  return (
    <div>
      <div className="relative">
        <img className="h-64 w-full rounded-3xl" src={background} alt="" />
        <div className="absolute top-8">
            <h2 className=" text-white ml-96 pl-20 text-3xl">Digital Card Details</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
