import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";
import { clearUserData } from "../redux/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQuantiy } = useSelector((state) => state.cart);

  let nav_items = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Categories", path: "/" },
    { name: "Profile", path: "/user-profile" },
  ];

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleSearch = async () => {
    if (searchWord.trim()) {
      navigate(`/search?q=${searchWord}`);
    }
    setSearchWord("");
  };

  const setUserSignOut = async () => {
    try {
      setLoading(true);
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signout`,
        { withCredentials: true },
      );
      console.log(result);
      toast.success("User LogOut Successfully");
      dispatch(clearUserData());
      navigate("/signin");
      setLoading(false);
    } catch (error) {
      console.log(error, "Error");
      setErr(error);
      setLoading(false);
    }
  };

  return (
    <section id="nav">
      <nav className=" w-full min-h-[70px] top-0 bg-white text-white flex items-center justify-evenly fixed z-40">
        <div className="md:w-[100px] w-[60px]">
          <img src="/images/clother.png" alt="Logo_Image" />
        </div>

        <ul className="hidden text-black md:flex items-center justify-center gap-5 font-semibold text-gray-600">
          {nav_items.map((item, i) => (
            <Link key={i} to={item.path} className="hover:text-gray-500">
              {item.name}
            </Link>
          ))}
        </ul>
      
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-4 py-4 md:px-2 shadow-md text-black font-semibold">
            {nav_items.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        )}

        <div className="flex items-center px-4 py-2 rounded-lg bg-white gap-4 text-gray-500 shadow-md w-[70%] md:w-auto mt-2 md:mt-0">
          <IoSearch onClick={handleSearch} className="cursor-pointer" />
          <input
            type="text"
            name="search"
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search for Products"
          />
        </div>
        
        <div className="hidden md:flex text-gray-500  items-center gap-4">
          <button
            className="border px-2 py-1 rounded-full bg-pink-500 text-white font-medium"
            onClick={() => setUserSignOut()}
          >
            Sign Out
          </button>
          <div className="relative" onClick={() => navigate("/add-to-cart ")}>
            <IoCartOutline size={25} />
            <span className="absolute top-[-10px] right-[-15px] border rounded-3xl py-0 px-1 bg-pink-700 text-white">
              {totalQuantiy}
            </span>
          </div>
        </div>
          <div
          className="md:hidden text-black text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>
    </section>
  );
};

export default Header;













































