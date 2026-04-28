import useOnlineStatus from "@hooks/useonlineStatus";
import { useTheme } from "@utils/ThemeContext";
import { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { Link } from "react-router";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import UserContext from "@utils/UserContext";
import { useSelector } from "react-redux";

const Header: React.FC = ()=>{
    const {theme, toggleTheme} = useTheme();
    const {loggInUser} = useContext(UserContext);
    const isOnline = useOnlineStatus();
    const {cartItems} = useSelector((state: any)=> state.cart)
    useEffect(()=>{
      console.log("header section rendered");
    }, []);
    return (
        <header className="bg-gradient-to-r from-white-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🍔</span>
          <span className="text-2xl font-bold text-gray drop-shadow-lg">FoodWheels</span>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-gray hover:text-gray-100 font-medium transition hover:text-orange-300">Home</Link>
          <Link to="/res" className="text-gray hover:text-gray-100 font-medium transition hover:text-orange-300">Products</Link>
          <Link to="/contact" className="text-gray hover:text-gray-100 font-medium transition hover:text-orange-300">Contact</Link>
          <Link to="/user" className="text-gray hover:text-gray-100 font-medium transition hover:text-orange-300">User</Link>
          <Link to="/grocery" className="text-gray hover:text-gray-100 font-medium transition hover:text-orange-300">Grocery</Link>
          <Link to="/login" className="text-gray hover:text-gray-100 font-medium transition hover:text-orange-300">Login</Link>
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <FaShoppingCart size={24} className="text-gray cursor-pointer hover:text-gray-100" />
            <span className="absolute -top-2 -right-2 bg-white text-red-500 text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartItems?.length || 0}</span>
          </div>
        </div>
        {theme === "light" ? (
          <FiSun size={24}color="gray" onClick={toggleTheme} className="cursor-pointer"/>
        ) : (
          <GoMoon size={24} color="black" onClick={toggleTheme} className="cursor-pointer"/>
        )}
        {isOnline? <RiCheckboxBlankCircleFill color="green" /> : <RiCheckboxBlankCircleFill color="red" /> }
        <LuLogIn size={24} className="text-gray cursor-pointer hover:text-gray-100" />
      </div>
    </header>
    )
  }
  export default Header;