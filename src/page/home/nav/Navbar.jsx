import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import Darkmood from "../../../Darkmood/Darkmood";
import NavbarRoute from "./NavbarRoute";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Authprovider/Authprovider";




const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const username = user?.displayName;
  const photoUrl = user?.photoURL;

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          text: 'Sign Out Successfully',
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href=""
              className="uppercase font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img
                src={"https://i.ibb.co/H2BCyjK/shopper.png"}
                alt="logo"
                className="w-10"
              />
              shopline
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              {/* search */}
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-xl border border-gray-300 px-2 py-1 focus:outline-none focus:border-3 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 text-xl group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <div className="flex justify-between items-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary transition-all
                    duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group ">
                <span className="group-hover:block hidden transition-all duration-200 text-lg font-medium">
                  Order
                </span>
                <MdShoppingCart className="text-xl text-white drop-shadow-lg cursor-pointer"/>
              </button>
            <Darkmood></Darkmood>
            {/* login logout */}



            <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="text-white">{username}</div>
              <img
                src={photoUrl}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <button onClick={handleSignOut} className="text-white">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-white">
              Login
            </Link>
          )}
        </div>



            </div>
          </div>
        </div>
      </div>
      {/* lower */}
      <div>
        <NavbarRoute></NavbarRoute>
      </div>
    </div>
  );
};

export default Navbar;
