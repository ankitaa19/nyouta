import React, { useState } from "react";


import main from './assets/main.svg';
import arrow from './assets/arrow.svg';
import small from './assets/small.svg';
import icon from './assets/icon.svg';
import share from './assets/share.svg';
import heart from './assets/heart.svg';
import Rating from './Rating';


const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
       <div className="flex items-center gap-x-1 font-semibold Class	Description
cursor-pointer overflow-x-auto whitespace-nowrap">
    <span className="text-sm hover:underline">Home</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm hover:underline">Categories</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm hover:underline">Photo Frames</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm hover:underline">Coloured Square, 4*6</span>
  </div> <br />
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex gap-4">
  {/* Small Images on the Left */}
  <div className="flex flex-col gap-2">
    {[...Array(8)].map((_, idx) => (
      <img
        key={idx}
        src={small}
        alt={`Thumbnail ${idx + 1}`}
        className="w-14 h-14 rounded border"
      />
    ))}
  </div>

  {/* Main Image on the Right */}
  <div className="flex-1">
    <img
      src={main}
      alt="Main Product"
      className="w-full h-auto rounded  transform transition-all duration-300  hover:shadow-lg hover:scale-105"
    /> <br />
    <p className="text-black-900">
            Lorem ipsum dolor sit amet consectetur. Morbi ut et magna sed. Aliquam quam
            adipiscing at elementum ac erat bibendum sed.
          
          </p>
          <br />

          <p className="text-sm text-gray-500">Delivery and Gift wrap prices not included</p>

          <button className="text-sm bg-gray-200 rounded-lg mt-9 mb-2 text-black-500">Item No: 86893166</button>
  </div>
</div>


        {/* Right Product Info Section */}
        <div className="md:w-1/2 space-y-4">
         <div className="flex justify-between items-center">
    <h2 className="text-4xl font-bold mt-6">Name of product</h2>
    <div className="flex gap-2">
      <img src={share} alt="Share" className="w-5 hover:shadow-md h-5 cursor-pointer" />
      <img src={heart} alt="Wishlist" className="w-5 h-5 hover:shadow-md cursor-pointer" />
    </div>
  </div>
  <p className="text-gray-600">Description, size, colour, type</p>
          <div className="text-xl font-bold">
            Rs. 99/- Only<del className="text-gray-500">198</del>{" "} <br />
            <span className="text-green-600">50% OFF</span>
          </div>
          <p className="text-sm text-gray-500">Price incl. of all taxes</p>
          <div className="text-yellow-500 text-lg"><Rating/></div>

          <hr className="h-[1px] bg-gray-300 border-0"/>

          <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Choose Size <br />13*18 cm</h3>
    
    <img src={arrow} alt="" className="w-5 transform transition-all duration-300  hover:shadow-lg hover:scale-105 h-5" />
  </div>

          <div className="flex items-center bg-gray-200 rounded-lg w-fit gap-2">
            <button
              className="px-3 py-1 rounded"
              onClick={() => handleQuantityChange(-1)}
            >
              <h3>-</h3>
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="w-12 text-center "
            />
            <button
              className="px-3 py-1  rounded"
              onClick={() => handleQuantityChange(1)}
            >
              <h2>+</h2>
            </button>
          </div>

          <div className=" gap-4">
            <button className="btn px-4 py-2 bg-[#653C28] w-full cursor-pointer  hover:bg-black  text-white rounded-lg transform transition-all duration-300  hover:shadow-lg hover:scale-105">ADD TO CART</button>
             <br />
             <br />
            <button className="px-2 py-2 bg-[#653C28] cursor-pointer text-white hover:bg-black transform transition-all duration-300  hover:shadow-lg hover:scale-105 w-full rounded-lg hover:shadow-md">BUY NOW</button>
          </div>

          
        </div>
      </div>

      <hr className="my-8" />

      {/* Product Tabs */}
      <div className="grid  gap-6 mb-8">
        <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Product Details</h3>
    <img src={icon} alt="" className="w-5 h-5 transform transition-all duration-300  hover:shadow-lg hover:scale-105" />
  </div><hr className="h-[1px] bg-gray-300 border-0"/>
         <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Measurements</h3>
    <img src={icon} alt="" className="w-5 transform transition-all duration-300  hover:shadow-lg hover:scale-105 h-5" />
  </div> <hr className="h-[1px] bg-gray-300 border-0" />
      </div>

      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
      <div className="grid grid-cols-1 hover:shadow-md sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="transform transition-all duration-300  hover:shadow-lg hover:scale-105 border p-4 rounded shadow-sm">
            <h4 className=" font-bold">Great Product</h4>
            <div className="text-yellow-500 mb-2"><Rating/></div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Morbi ut et magna sed.
            </p>
            <p className="text-xs text-gray-400 mt-2">lorem, india</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
