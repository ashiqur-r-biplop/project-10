/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import googleImg from "../../assets/social/google.png";
import gitHubImg from "../../assets/social/github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../CustomHook/UseTitle";

const Login = () => {
  useTitle("Login")
  const { login, signInGoogle, signInGithub } = useContext(AuthContext);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [successMassage, setSuccessMassage] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailField = form.email.value;
    setEmail(emailField);
    setErrorMassage("");
    const passwordField = form.password.value;
    login(emailField, passwordField)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Log In Successful",
          showConfirmButton: false,
          buttonsStyling: "#32c770",
          timer: 1500,
        });
        setSuccessMassage("login successful");
        setErrorMassage("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setSuccessMassage("");
        Swal.fire({
          icon: "error",
          buttonsStyling: {
            color: "#32c770",
            backgroundColor: "#32c770",
          },
          title: `${err.message}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
        setErrorMassage(err.message);
      });
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
          title: "Your Google Login Successful",
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
        // console.log(object);
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Github Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto mt-20">
      <div style={{ height: "80vh" }}>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center h-full"
        >
          <div className="flex flex-col justify-start items-start fullForm lg:w-2/6 md:w-3/6  shadow-2xl">
            <h2 className="text-2xl mb-2" style={{ color: "#32c770" }}>
              Please Login
            </h2>
            <input
              type="email"
              placeholder="palatable.world@gmail.com"
              className="border"
              name="email"
            />
            <div className="w-full relative">
              <input
                type={`${toggleIcon ? "text" : "password"}`}
                className="border m-0"
                placeholder="******"
                name="password"
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
            <p className="mb-3 text-end w-full forget-password">
              Forget Password
            </p>
            <span className="text-green-500 m-0">{successMassage}</span>
            <span className="text-red-500 m-0">{errorMassage}</span>
            <p className="mb-2">
              Don't Have an Account?{" "}
              <Link
                style={{ color: "#32c770", fontWeight: 700 }}
                to="/register"
              >
                Please Register
              </Link>
            </p>
            <input
              type="submit"
              value="Login"
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

export default Login;
