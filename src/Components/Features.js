import React from "react";
import circle from '../assets/circle.png'

const Features = () => {
  return (
    <div className="px-12">
      <h2 className="text-center text-4xl font-medium py-4">Features</h2>
      <div className="grid lg:grid-cols-3 justify-center items-center border border-black rounded-3xl p-6">

        <div className="flex flex-col justify-center items-center">
            <img className="w-28" src={circle} alt="" />
          <h2 className="text-center">Create your card <br /> in just 5 mins</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img className="w-28" src={circle} alt="" />
          <h2 className="text-center">Customize the Text<br /> with "Edit this Page" Option</h2>
        </div>


        <div className="flex flex-col justify-center items-center">
            <img className="w-28" src={circle} alt="" />
          <h2 className="text-center">Editing is available<br /> after purchase also</h2>
        </div>



      </div>
    </div>
  );
};

export default Features;
