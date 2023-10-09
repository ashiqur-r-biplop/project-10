import { useState } from "react";
import UseRole from "../../../CustomHook/UseRole";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { userRole, RoleLoading } = UseRole();
  const [active, setActive] = useState("");
  if (RoleLoading) {
    return <>loading....</>;
  }
  return (
    <div className="bg-black h-screen text-white text-center sticky top-0">
      <div className="py-[20px] flex flex-col justify-center items-center gap-5">
        <Link to="/">Home</Link>
        {userRole == "owner" ? (
          <>
            <Link
              onClick={() => setActive("all-user")}
              to="/dashboard/all-user"
              className={`${active === "all-user" ? "text-orange-400" : ""}`}
            >
              All User
            </Link>
            <Link
              onClick={() => setActive("all-jewellry")}
              to="/dashboard/all-jewellry"
              className={`${
                active === "all-jewellry" ? "text-orange-400" : ""
              }`}
            >
              ALL jewelry
            </Link>
          </>
        ) : (
          <Link
            onClick={() => setActive("pending-product")}
            to="/dashboard/pending-product"
            className={`${
              active === "pending-product" ? "text-orange-400" : ""
            }`}
          >
            Your Pending jewelry
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
