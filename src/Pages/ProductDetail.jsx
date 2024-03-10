import React from "react";
import { FaStar, FaShoppingCart} from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import Button from "../Components/Button";
import cake from "../assets/images/cake.png";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
export default function CakeDetail() {
  return (
    <div className="w-full">
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap -mx-4 justify-end"></div>
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-6/12 w-full md:w-full">
              <div className="relative">
                <div className="relative w-full overflow-hidden">
                  <div className="w-full p-12 border-[1px] rounded-2xl transform duration-500 transition-all ease-in-out mx-auto block">
                    <img
                      alt="..."
                      src={cake}
                      className="w-full h-auto mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-auto px-4 relative w-full lg:w-6/12 w-full md:w-full text-left">
              <div className="w-full">
                <span className="text-pink-500 bg-pink-200 text-xs font-bold inline-block py-1 uppercase  last:mr-0 mr-1 leading-tight rounded-md px-3">
                  Big Discount
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight mt-2 mb-0">
                Delicious Chocolate Cake
              </h2>
              <div className="pt-2 ">
                <div className="text-yellow-300 flex justify-start">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>

              <h2 className="text-5xl font-bold mt-2 mb-2 bg-gradient-to-r from-gradient-1 to-gradient-5 bg-clip-text text-transparent">
                $29.99
              </h2>
              <p className="text-blueGray-500 text-justify">
                Indulge in the rich, moist, and chocolatey goodness of our
                classic chocolate cake. Made with premium ingredients and topped
                with chocolate ganache, it's perfect for any occasion.
              </p>

              <div className="mb-2 flex flex-wrap md:justify-left  ">
                <div className="   lg:w-3/12">
                  <div className="relative inline-flex flex-row  items-stretch">
                    <div className="mr-2 mt-5 relative">
                      <div className="mb-3 pt-0 relative">
                        <input
                          type="text"
                          className="border-pink-300 border-2 px-16 py-2 mr-0 text-lg w-full placeholder-pink-200 text-pink-700 bg-white rounded-md outline-none focus:ring focus:ring-pink-500 focus:ring-1 focus:border-pink-500 border border-solid transition duration-200"
                          value="1"
                        />
                        <div className="absolute bottom-2 right-0 flex flex-col items-center w-8">
                          <BsChevronUp className="text-pink-700 cursor-pointer text-[12px] mb-2" />
                          <BsChevronDown className="text-pink-700 cursor-pointer text-[12px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className=" mt-5 ">
                  <a className="add" href="shop-cart.html">
                    Add to Cart
                  </a>
                  <FaShoppingCart />
                </Button>
                <div className="mt-5 border-pink-400 inline-block pl-2 ">
  <div className="border-[1px] rounded-md p-3 hover:bg-pink-400 hover:-translate-y-2 transition-transform group">
    <GoHeart className="text-slate-400 border-pink-400 text-2xl group-hover:text-white"/>
  </div>
</div>
                
                
                <div className="  w-full lg:w-6/12">
                    <h5 className="mb-2 text-slate-500 font-medium">Size in pound:</h5>
                    <button className="hover:bg-pink-500 rounded-xl p-2 px-4 mr-2 hover:text-white">1</button>
                    <button className="hover:bg-pink-500 rounded-xl p-2 px-4 mr-2 hover:text-white">2</button>
                    <button className="hover:bg-pink-500 rounded-xl p-2 px-4 mr-2 hover:text-white">3</button>
                    <button className="hover:bg-pink-500 rounded-xl p-2 px-4 mr-2 hover:text-white">4</button>
                    <button className="hover:bg-pink-500 rounded-xl p-2 px-4 mr-2 hover:text-white">5</button>
                    <button className="hover:bg-pink-500 rounded-xl p-2 px-4 mr-2 hover:text-white">6</button>
                    
                </div>
               
              </div>
              <div className=" w-full lg:w-7/12 flex flex-wrap gap-x-10">
              <h5 className="mb-2 text-slate-500 font-normal">Type: <span className="text-pink-500 ml-2">Chocolate</span> </h5>   
                  
              <h5 className="mb-2 text-slate-500 font-normal">SKU: <span className="text-pink-500 ml-2">FWM15VKT</span> </h5> 

              <h5 className="mb-2 text-slate-500 font-normal">LIFE: <span className="text-pink-500 ml-2">2 days</span> </h5>   
                  
                  <h5 className="mb-2 text-slate-500 font-normal">Stock: <span className="text-pink-500 ml-2">8 Items In Stock</span> </h5> 
           
                    </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
