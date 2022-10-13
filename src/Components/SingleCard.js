import React from 'react';
import card1 from "../assets/Page1.jpg";
import card2 from "../assets/Page2.jpg";
import card3 from "../assets/Page3.jpg";

const SingleCard = () => {
    return (
        <div className="bg-base-100 border border-black my-10 lg:mx-20 rounded-3xl lg:p-10 p-5 grid lg:grid-cols-2 gap-10">


        <div className="flex">
      <div>
          <img className="w-44 rounded" src={card1} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-36" src={card2} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-28" src={card3} alt="" />
        </div>
      </div>
  
        <div>
            <h2 className="text-3xl font-bold text-center">Card Title</h2>
            <div className="flex justify-center gap-12 py-2">
                <div className="flex justify-center gap-2">
                <h2 className="text-2xl">$499</h2>
              <del className="text-2xl">$2000</del>
                </div>
                <div>
                  <h2 className="text-green-700 text-2xl">75% off</h2>
                </div>
            </div>
            <div>
              <p style={{fontSize:"16px"}} className="text-justify ml-28">Donec eu ornare mi. Sed finibus <br />
  condimentum mauris, ut dictum eros <br />
  maximus vitae. Nullam <br />
  condimentum tortor ac elit feugiat <br />
  iaculis. Aenean mauris nisl, blandit</p>
            </div>
            <div className="mx-auto text-center py-3">
              <button className="btn w-72 h-12 text-2xl font-medium bg-black rounded-2xl normal-case">Try this Card</button>
            </div>
        </div>
  
        </div>
    );
};

export default SingleCard;