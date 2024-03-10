import React from 'react';
import Button from './Button';
import { FaShoppingCart } from "react-icons/fa";
const ProductCard = () => {
  return (
    <div className="lg:w-1/5 md:w-1/2 w-full sm:w-1/2 p-2">
      <div className="bg-white border rounded-lg overflow-hidden relative">
        <div className="badge badge-secondary badge-outline absolute top-2 right-2">Sale</div>
        <div className="p-4">
          <div className="mb-4">
            <a href="shop-product-right.html">
              <img className="w-full" src="./src/assets/images/cake.png" alt="" />
            </a>
          </div>
          <div className="flex justify-between items-center">
            <div className="product-action-1">
              <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                <i className="fi-rs-heart"></i>
              </a>
              <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                <i className="fi-rs-shuffle"></i>
              </a>
              <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                <i className="fi-rs-eye"></i>
              </a>
            </div>
          </div>
          <div className="mt-2 ">
            <div className="product-category flex flex-col justify-start content-start">
              <a href="shop-grid-right.html">Hodo Foods</a>
            </div>
            <h2 className="text-lg font-medium">
              <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
            </h2>
            <div className="flex items-center">
              <div className="product-rate">
                <div className="product-rating" style={{ width: '80%' }}></div>
              </div>
              <div className="rating rating-xs">
                {/* Your rating input elements */}
              </div>
            </div>
            <div className="text-xs text-gray-500">
              By <a href="vendor-details-1.html">Stouffer</a>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="product-price">
                <span className="text-pink-500">$52.85</span>
                
              </div>
              <div>
              <span className="line-through text-gray-500">$55.8</span>
              </div>
             
            </div>
            <div>
            <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
            </div>
            <div className="add-cart mt-5">
                <Button className="w-full">
                  <a className="add" href="shop-cart.html">
              Add to Cart
                  </a>
                  <FaShoppingCart />
                </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
