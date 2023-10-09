import UseRole from "../../../CustomHook/UseRole";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { userRole, RoleLoading } = UseRole();
  if (RoleLoading) {
    return <>loading....</>;
  }
  return (
    <div className="bg-black h-screen text-white text-center">
      <div className="py-[20px] flex flex-col justify-center items-center gap-5">
        <Link to="/">Home</Link>
        {userRole == "owner" ? (
          <>
            <Link to="/dashboard/all-user">All User</Link>
            <Link to="/dashboard/all-jewelry">ALL jewelry</Link>
          </>
        ) : (
          <Link to="/dashboard/pending-product">Your Pending jewelry</Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
