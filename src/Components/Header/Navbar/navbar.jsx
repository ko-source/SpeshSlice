// Navbar.jsx

import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import {
  FaHome,
  FaUtensils,
  FaShoppingBag,
  FaSearch,
  FaInfoCircle,
  FaEnvelope,
  FaFolderOpen,
  FaShopify,
  FaShoppingCart,
} from "react-icons/fa";
import Dropdown from "../../Dropdown";
import Input from "../../Input";
import "./navbar.css";
import Button from "../../Button";
import { useUserData } from "../../UserAuthentication(ContextApi)";
import { RemoveCookie } from "../../Cookies";
import index from "../../API";
import { Link } from "react-router-dom";
function Navbar() {
  const { loader, APIcall } = index();
  const { userInfo, fetchData } = useUserData();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const smallScreenMenu = useRef();
  useEffect(() => {
    console.log(userInfo.user, userInfo.token);
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {

    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  const menuToggleHandler = () => {
    smallScreenMenu.current.classList.toggle("hidden");
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    APIcall('/logout', 'POST').then((data) => {

      if (data.success) {
        RemoveCookie();
        fetchData();
      }
    })
  }



  return (
    <>
      {size > 768 ? (
        <div className="flex items-center justify-between px-6 py-2 pt-4 border-b border-grey-600 ; ">
          <div className="w-70px">
            <img src="./src/assets/images/myLogo.PNG" alt="" className="h-10" />
          </div>

          <div className="flex-grow flex px-5 items-center justify-center">
            <Input
              className="border p-2 border-gray w-3/4"
              type="text"
              placeholder="Search..."
            />
            <FaSearch className="nav-icon ml-2" />
          </div>

          <div className="flex  justify-end items-center">
            <ul className="flex space-x-4">
              <li>
                <a className="nav-link" href="#">
                  <FaShoppingCart className="nav-icon" />
                </a>
              </li>
            </ul>
            {!(userInfo.token && userInfo.user) ? (
              <>
                <Link to={"/login"} ><button className="btn__login ml-4">Login</button></Link>
                <Link to={"/Signup"} ><Button className="ml-2">Register</Button></Link>
              </>
            ) : (
              <Button className="ml-2" onClick={handleLogout} >Logout</Button>
            )}


          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between px-6 py-2 pt-4 border-b border-grey-600 ; ">
          <div className="w-70px">
            <img src="./src/assets/images/myLogo.PNG" alt="" className="h-10" />
          </div>
          <div className="flex gap-2 items-center">
            <a href="#">
              <FaSearch className="nav-icon ml-2  h-16 " />
            </a>
            <a href="#">
              <FaShoppingCart className="nav-icon" />
            </a>
            <div className="header__content__toggle">
              {!menuOpen ? (
                <BiMenuAltRight onClick={menuToggleHandler} />
              ) : (
                <AiOutlineClose onClick={menuToggleHandler} />
              )}
            </div>
          </div>
        </div>
      )}{" "}
      <div ref={smallScreenMenu} className={` ${size < 768 ? " hidden" : ""}`}>
        <nav className={"header__content__nav"}>
          <ul className="border-b border-grey-600">
            <li>
              <a className="nav-link " href="#">
                <FaHome className="nav-icon" />
                Home
              </a>
            </li>
            <li>
              <Dropdown
                trigger={
                  <a className="nav-link">
                    <FaFolderOpen className="nav-icon" />
                    <div className="flex items-center gap-1">
                      Categories <IoIosArrowDown />
                    </div>
                  </a>
                }
              >
                <div className="py-2 bg-white">
                  <a>Chocolate cake</a>
                  <a>Cream Cake</a>
                  <a>Strawberry Cake</a>
                </div>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                trigger={
                  <a className="nav-link">
                    <FaShopify className="nav-icon" />
                    <div className="flex items-center gap-1">
                      Shops <IoIosArrowDown />
                    </div>
                  </a>
                }
              >
                <div className="py-2  bg-white w-64">
                  <a>Shop 1</a>
                  <a>Shop 2</a>
                  <a>Shop 3</a>
                </div>
              </Dropdown>
            </li>
            <li>
              <a className="nav-link" href="#">
                <FaInfoCircle className="nav-icon" />
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <FaEnvelope className="nav-icon" />
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        {size < 768 && (
          <div className="flex my-2">
            <Link to={"/login"} ><button onClick={menuToggleHandler} className="btn__login ml-4">Login</button></Link>
            <Link to={"/Signup"} >
              <button onClick={menuToggleHandler}><Button className="ml-2">Register</Button></button></Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default Navbar;
