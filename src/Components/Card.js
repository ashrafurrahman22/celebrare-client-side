import React from "react";
import background from "../assets/Background.jpg";


const Card = () => {
  return (
    <div style={{fontStyle:"normal"}}>
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
