import UseRole from "../../../CustomHook/UseRole";
import { Link } from "react-router-dom";

const SideBar = () => {
  const role = UseRole();
  console.log(role);
  return (
    <div className="bg-black h-screen text-white text-center">
      <div className="py-[20px] flex flex-col justify-center items-center gap-5">
        {role == "owner" ? (
          <>
            <Link to="all-user">All User</Link>
            <Link to="all-jewelry">ALL jewelry</Link>
          </>
        ) : (
          <Link to="/pending-product">Your Pending jewelry</Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
