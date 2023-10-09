import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../CustomHook/UseTitle";
import UseRole from "../../CustomHook/UseRole";
import axios from "axios";

const AddJewelry = () => {
  useTitle("AddJewelry");
  const { user } = useContext(AuthContext);
  const userRole = UseRole();
  console.log(userRole);
  const handleMyJewelry = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form?.sellerName?.value;
    const sellerEmail = form?.email?.value;
    const photoUrl = form?.photo?.value;
    const JewelryName = form?.JewelryName?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;
    const description = form?.description?.value;
    const myJewelry = {
      sellerName,
      sellerEmail,
      photoUrl,
      JewelryName,
      price,
      quantity,
      description,
    };
    if (user && userRole === "seller") {
      console.log(myJewelry);
      axios.post("http://localhost:5000/jewelry", myJewelry).then((result) => {
        if (result?.data?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Add A jewelry SuccessFull",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        buttonsStyling: {
          color: "#32c770",
          backgroundColor: "#32c770",
        },
        title: "Oops...",
        footer: "Please Provide Me User Email",
      });
    }
  };

  return (
    <div className="md:mt-28 mt-5 container mx-auto">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:mt-20 mb-12">
        Add <span className="text-[#C47B7B]">Jewelry</span>
      </h1>
      <div className="">
        <form className="" onSubmit={handleMyJewelry}>
          <div className="card-body">
            <div className="md:flex justify-between w-full">
              <div className="md:w-3/4">
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    name="sellerName"
                    value={user?.displayName}
                    disabled
                    type="text"
                    placeholder="Seller Name"
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    disabled
                    placeholder="Please Provide Login Email"
                    name="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Jewelry Name</span>
                  </label>
                  <input
                    type="text"
                    name="JewelryName"
                    placeholder="Jewelry Name"
                    className="input input-bordered w-full "
                    required
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="form-control md:w-3/4 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Picture URL"
                    className="input input-bordered w-full"
                    name="photo"
                    required
                  />
                </div>
                <div className="form-control md:w-3/4 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control md:w-3/4 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Available quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Available quantity"
                    name="quantity"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>

              <textarea
                type="text"
                placeholder="Detail description"
                name="description"
                className="input input-bordered h-full w-full pt-2"
                required
                id=""
                rows="10"
              ></textarea>
            </div>
            <div className="form-control mt-6 ">
              <input
                type="submit"
                className="btn bg-[#C47B7B] hover:bg-[#C47B7B] border-0"
                value="Upload"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJewelry;
