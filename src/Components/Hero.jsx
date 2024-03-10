import React from 'react';
import { FaBirthdayCake, FaHeart, FaUtensils, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeroImage from '../assets/images/cake.png'
const HeroSection = () => {
    return (
        <div className="w-full">
           <div className="bg-gradient-to-t from-gradient-1  to-white">

                <div className="p-0 flex items-center overflow-hidden relative min-h-screen max-h-999-px">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4 items-center">
                            <div className="px-4 relative w-full w-full md:w-6/12">
                            <h1 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-gradient-1 to-gradient-5 bg-clip-text text-transparent">Delicious Cakes for Every Occasion</h1>
                                
                                <div className="rounded text-left p-6 flex items-start">
                                    <div className="bg-white rounded-full justify-center items-center inline-flex text-center w-12 h-12 text-blueGray-700"><FaBirthdayCake size={24} /></div>
                                    <div className="ml-6 flex-1">
                                        <h4 className="text-white text-2xl font-semibold leading-tight mt-2 mb-2">Celebrate Special Moments</h4>
                                        <p className="text-white opacity-60">Make your celebrations unforgettable with our delectable cakes, perfect for birthdays, weddings, and more.</p>
                                    </div>
                                </div>
                                <div className="rounded text-left p-6 flex items-start">
                                    <div className="bg-white rounded-full justify-center items-center inline-flex text-center w-12 h-12 text-blueGray-700"><FaHeart size={24} /></div>
                                    <div className="ml-6 flex-1">
                                        <h4 className="text-white text-2xl font-semibold leading-tight mt-2 mb-2">Made with Love</h4>
                                        <p className="text-white opacity-60">Our cakes are crafted with care and passion, using only the finest ingredients to ensure a delightful experience with every bite.</p>
                                    </div>
                                </div>
                                <div className="rounded text-left p-6 flex items-start">
                                    <div className="bg-white rounded-full justify-center items-center inline-flex text-center w-12 h-12 text-blueGray-700"><FaUtensils size={24} /></div>
                                    <div className="ml-6 flex-1">
                                        <h4 className="text-white text-2xl font-semibold leading-tight mt-2 mb-2">Taste the Difference</h4>
                                        <p className="text-white opacity-60">Experience the perfect blend of flavors and textures in every slice, crafted by our expert bakers with years of experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 relative w-full w-full md:w-6/12">
                                <div className="w-full">
                                    <div className="flex justify-center w-full">
                                        {/* Image carousel or individual images can be added here */}
                                        <div className="w-full transform duration-500 transition-all ease-in-out mx-auto block">
                                            {/* Placeholder for cake images */}
                                            <img alt="..." src={HeroImage} className="h-auto mx-auto rounded-lg shadow-xl w-450-px" />
                                        </div>
                                    </div>
                                    {/* Navigation buttons for image carousel */}
                                    <div className="flex justify-center mt-6">
                                        <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-blueGray-800 bg-white border-white active:bg-blueGray-100 active:border-blueGray-100 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">
                                            <FaChevronLeft />
                                        </button>
                                        <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-blueGray-800 bg-white border-white active:bg-blueGray-100 active:border-blueGray-100 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">
                                            <FaChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
