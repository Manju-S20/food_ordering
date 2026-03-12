import { Link } from "react-router";
import logo from "../assets/food.jpeg";
import { HiOutlineHome } from "react-icons/hi";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
function Navbar() {
    return <div className="Header h-30 bg-[rgb(241,74,84)]  flex   items-center justify-between p-5">
        <a href="/"><img className="logo rounded-[50%] size-25" src={logo} /></a>
        <div className="navMenu" >
            <div className="links flex  items-center  gap-8  text-[1.2rem]" >
                <Link to="/" className="nav-link flex text-white items-center gap-2 cursor-pointer active:text-[rgba(47,47,110,1)] hover:text-[rgba(76,76,210,1)]  " ><HiOutlineHome />Home</Link>
                <Link to="/contact" className="nav-link flex text-white items-center gap-2 cursor-pointer active:text-[rgba(47,47,110,1)] hover:text-[rgba(76,76,210,1)]"><IoIosContact />Contact</Link>
                <Link to="/about" className="nav-link flex text-white items-center gap-2 cursor-pointer active:text-[rgba(47,47,110,1)] hover:text-[rgba(76,76,210,1)]"> <IoInformationCircleSharp />About</Link>
                <Link to="/cart" className="nav-link flex text-white items-center gap-2 cursor-pointer active:text-[rgba(47,47,110,1)] hover:text-[rgba(76,76,210,1)]"> <FaShoppingCart />Cart</Link>
                {/* <Link to="/search" className="nav_link"><CiSearch />Search</Link> */}
            </div>
        </div>
    </div>
}
export default Navbar