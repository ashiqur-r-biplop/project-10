/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useOwner = () => {
  const { user, loading } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  // use axios secure with react query

  const { data: isOwner, isLoading: isOwnerLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return { isOwner, isOwnerLoading };
};
export default useOwner;
