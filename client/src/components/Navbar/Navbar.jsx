import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

import Avatar from "../Avatar/Avatar";
import { setCurrentUser } from "../../actions/currentUser";

import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-solid.svg";
import barsIcon from "../../assets/bars-solid.svg";

const Navbar = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("Profile");
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully");
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token || JSON.parse(localStorage.getItem("Profile"))?.token;
  
    if (token) {
      const decodedToken = jwtDecode(token);
      const isExpired = decodedToken.exp * 1000 < new Date().getTime();
  
      if (isExpired) {
        handleLogout();
      } else {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      }
    } else {
      dispatch(setCurrentUser(null));
    }
  }, [User?.token, dispatch]);
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-t-4 border-orange-500 z-50">
      <div className="w-11/12 max-w-screen-xl mx-auto flex items-center justify-between py-3">
        
        {/* Left: Logo + Navigation */}
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8" />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/about" className="text-gray-700 hover:bg-gray-300 p-2 rounded-full transition">About</Link>
            {/* <Link to="/product" className="text-gray-700 hover:bg-gray-300 p-2 rounded-full transition">Product</Link> */}
            <Link to="/overflow-ai" className="text-gray-700 hover:bg-gray-300 p-2 rounded-full transition">OverflowAI</Link>
          </div>
        </div>

        {/* Center: Search Bar */}
        <form className="relative flex-1 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-[95%] ml-2 pl-10 pr-4 py-[6px] border  rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <img src={searchIcon} alt="search" className="absolute left-4 top-2.5 w-4" />
        </form>

        {/* Right: Auth Buttons or User Avatar */}
        {console.log("user urgent" ,User)
        }
        <div className="flex items-center space-x-4">
          {User == null  ? (
            <>
              <Link to="/Auth" className="px-4 py-2 border border-blue-500 rounded-md bg-blue-100 hover:bg-blue-200 transition">
                Log In
              </Link>
              <Link to="/Auth" className="px-4 py-2 border border-blue-500 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Avatar backgroundColor="#009dff" size="40px">
                <Link to={`/Users/${User?.result?._id}`} className="text-white no-underline">
                  {User?.result?.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button
                className="px-4 py-2 border border-gray-500 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={barsIcon} alt="menu" className="w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-2 absolute w-full left-0 top-14">
          <Link to="/about" className="block text-gray-700 hover:text-gray-500 transition">About</Link>         
          <Link to="/overflow-ai" className="block text-gray-700 hover:text-gray-500 transition">OverflowAI</Link>
          <form className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <img src={searchIcon} alt="search" className="absolute left-3 top-2.5 w-4" />
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
