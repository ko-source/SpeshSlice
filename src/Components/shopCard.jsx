import React from 'react';
import Button from './Button';
import { IoMdArrowRoundForward } from "react-icons/io";
// import './shopCard.css';
const BannerCard = () => {
  return (
    <div className="w-full p-4 m-4 md:m-0 bg-[#f3e8e8] border rounded-lg  md:p-10 md:pr-0 flex gap-5">
      

      <div className=" flex flex-col gap-y-5 ">
      <h4 className="md:text-2xl font-semibold text-left text-1xl">
            Everyday Fresh & <br />Clean with Our<br />
            Products
          </h4>
        <Button className="md:w-[70%] ">
         <a href="shop-grid-right.html" >
            Shop Now
          </a>
          <IoMdArrowRoundForward />
         </Button>

        
        </div>
          <div className='md:w-[40%] flex justify-end items-end w-[60%]' >
        <img src="./src/assets/images/cake.png" alt="" className='w-[]'/>
        </div>
       
  

     
    </div>
  );
};

export default BannerCard;
