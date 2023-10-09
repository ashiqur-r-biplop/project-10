/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logo from "/public/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useOwner from "../../CustomHook/UseOwner";
import UseRole from "../../CustomHook/UseRole";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  // const {isOwner, isOwnerLoading} = useOwner()
  const userRole = UseRole();

  const handleLogOut = () => {
    logout()
      .then((res) => {})
      .catch((err) => {});
  };

  const navOptions = (
    <>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-jewelry">All jewelry</Link>
      </li>
      <li>
        <Link to="/my-jewelry">My Jewelry</Link>
      </li>
      <li>
        <Link to="/add-jewelry">Add jewelry</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link className="border" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
      {user?.photoURL ? (
        <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="bg-[#C47B7B]">
      <div className="container mx-auto">
        <div className="navbar justify-between py-[20px]">
          <Link className="">
            <img src={logo} className="w-[70px]" alt="" />
          </Link>
          <div className="block lg:hidden">
            <div className="dropdown dropdown-end z-50">
              <label tabIndex={0} className="btn btn-ghost text-end lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center px-1 text-white">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
