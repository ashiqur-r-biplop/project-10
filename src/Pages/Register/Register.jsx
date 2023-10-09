/* eslint-disable no-unused-vars */
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleImg from "../../assets/social/google.png";
import gitHubImg from "../../assets/social/github.png";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { signUp, signInGoogle, signInGithub, ProfileUpdate, setReload, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password < 6) {
      setErrorMassage("Minimum six characters provide your password");
      setSuccessMessage("");
      return;
    } else if (!/^(?=.*[A-Za-z])/.test(password)) {
      setErrorMassage("At least one letter");
      setSuccessMessage("");
    } else if (password !== confirmPassword) {
      setErrorMassage("password Not matched");
    } else {
      signUp(email, password)
        .then((result) => {
          const loggedUser = result.user;
          setErrorMassage("");
          setSuccessMessage("");
          ProfileUpdate(name, photoUrl).then(() => {
            setReload(true);
          });
          navigate(from, { replace: true });
          form.reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Register Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${err.message}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
          setErrorMassage(err.message);
          setSuccessMessage("");
        });
    }
  };

  const handleEmail = (e) => {
    const emailHandle = e.target.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailHandle)) {
      setErrorMassage("Email are not valid");
      return;
    } else {
      setErrorMassage("");
      setSuccessMessage("Email validation is complete");
    }
  };
  const handlePassword = (e) => {
    const passwordHandle = e.target.value;
    // console.log(passwordHandle);
    if (passwordHandle.length < 6) {
      setErrorMassage("Minimum six characters provide your password");
      setSuccessMessage("");
      return;
    } else if (!/^(?=.*[A-Za-z])/.test(passwordHandle)) {
      setErrorMassage("At least one letter");
      setSuccessMessage("");
    } else {
      setErrorMassage("");
      setSuccessMessage("The password is hard to complete");
    }
  };
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInGoogle(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Google Register is Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {});
  };
  const handleGithubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    signInGithub(githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Github Register is Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {});
  };

  return (
    <div className="container mx-auto md:mt-36  mt-5">
      <div style={{ margin: "50px 0px" }}>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center h-full"
        >
          <div className="flex flex-col justify-start items-start fullForm lg:w-3/6 md:w-3/6  shadow-2xl">
            <h2 className="text-2xl mb-2" style={{ color: "#32c770" }}>
              Please Register
            </h2>
            <input
              type="name"
              placeholder="Your Name"
              className="border"
              name="name"
              required
            />

            <input
              type="email"
              placeholder="palatable.world@gmail.com"
              className="border"
              name="email"
              onChange={handleEmail}
            />
            <div className="w-full relative">
              <input
                type={`${toggleIcon ? "text" : "password"}`}
                className="border m-0"
                placeholder="Enter Password"
                name="password"
                onChange={handlePassword}
              />

              <span
                onClick={() => setToggleIcon(!toggleIcon)}
                className="absolute bottom-4 right-4 toggle-icon"
              >
                {toggleIcon ? (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEyeSlash}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEye}
                  ></FontAwesomeIcon>
                )}
              </span>
            </div>
            <div className="w-full relative my-3">
              <input
                type={`${toggleIcon ? "text" : "password"}`}
                className="border m-0"
                placeholder="Confirm Password"
                name="confirm_password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Your Photo URL"
              className="border"
              name="photoUrl"
              required
            />
            <p className="text-red-500 mb-2 ">{errorMassage}</p>
            {successMessage && (
              <p className="text-[#32c770] mb-2 ">{successMessage}</p>
            )}
            <p className="mb-2">
              Already have an account?{" "}
              <Link style={{ color: "#32c770", fontWeight: 700 }} to="/login">
                Please Login
              </Link>
            </p>
            <input
              type="submit"
              value="Register"
              className="bg-[#32c770] border-0 text-white font-semibold"
            />

            <div className="pt-5 flex items-center justify-between w-full">
              <p>Or Sign in with:</p>
              <div className="flex items-center justify-between">
                <img
                  onClick={handleGoogleLogin}
                  style={{
                    width: "50px",
                    marginRight: "10px",
                    border: "2px solid #32c770",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  src={googleImg}
                  alt=""
                />
                <img
                  onClick={handleGithubLogin}
                  style={{
                    width: "50px",
                    marginRight: "10px",
                    border: "2px solid #32c770",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  src={gitHubImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
