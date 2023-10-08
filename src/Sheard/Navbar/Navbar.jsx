import { Link } from "react-router-dom";
import logo from "/public/Logo.png";
const Navbar = () => {
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
      {/* <li>
        <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
          Dashboard
        </Link>
      </li> */}
      {/* <li>
        {user && (
          <Link to="/dashboard/mycart">
            <button className="btn gap-2">
              <FaShoppingCart />
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
          </Link>
        )}
      </li> */}

      {/* {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <div className="bg-[#000]">
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
            <ul className="menu menu-horizontal px-1 text-white">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
