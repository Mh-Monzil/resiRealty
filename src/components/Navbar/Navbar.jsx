import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/logo.png";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import Profile from "../Profile/Profile";
import {  CgLogOut } from "react-icons/cg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const position = location.pathname === "/" ? "fixed" : "relative";
  const textColor = location.pathname === "/" ? "" : "black";

  const { user, loading,logOut } = UseAuth();

  const [scroll, setScroll] = useState(false);

  const TOP_OFFSET = 80;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const userLogOut = () => {
  //   logOut();
  //   console.log("logout");
  //   console.log(user);
  // }

  const NavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-semibold relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-sky-500  px-1"
            : "px-1 text-lg font-semibold"
        }
      >
        Home
      </NavLink>
      {user && (
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-lg font-semibold relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-sky-500  px-1"
              : "px-1 text-lg font-semibold"
          }
        >
          Services
        </NavLink>
      )}
      <NavLink
        to="/user-profile"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-semibold relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-sky-500  px-1"
            : "px-1 text-lg font-semibold"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-semibold relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-sky-500  px-1"
            : "px-1 text-lg font-semibold"
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div
      style={{ position: position, color: textColor }}
      className={`${
        scroll
          ? "navbar max-w-[1680px] mx-auto fixed top-0 py-3 z-30 lg:px-10 backdrop-blur-sm bg-white/70 text-black transition-all"
          : "navbar max-w-[1680px] text-white mx-auto py-3 z-30 lg:px-10  bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`${showDropdown ? "flex" : "hidden"} menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 text-black space-y-2 p-4`}
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 ">
          <img className="w-12 md:w-16" src={logo} alt="" />
          <p className="text-3xl md:text-4xl font-bold ">ResiRealty</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-7 ">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {
        loading ? <span className="loading loading-spinner text-info"></span> :
        (!loading && user) ? 
          <Profile user={user} />
          : 
          (!loading && !user ) ?
          <Link
            to="/login"
            className=" bg-gradient-to-r from-sky-600 to-teal-600 text-white text-base md:text-lg font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-sky-600 border-none "
          >
            Login
          </Link>
          :
          ''
        }
        
      </div>
    </div>
  );
};

export default Navbar;
