import React, { useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import getGoogleOAuthUrl from "../../utils/getGoogleUrl";
import google from "../../Assets/google.png";

function Auth() {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [name, setName] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  //   const [signUpLoading, setSignUpLoading] = React.useState(false);
  const [signUpPage, setSignUpPage] = React.useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        console.log(data.user);
        console.log(typeof data.user);
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
    setLoading(false);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.status === 201) {
        toast.success(data.message);
        setName("");
        setEmail("");
        setPass("");
        setSignUpPage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // console.log(error)
      toast.error("Internal Server Error");
    }
    setLoading(false);
  };

  const switchHandler = () => {
    setName("");
    setEmail("");
    setPass("");
    setShowPassword(false);
    setSignUpPage(!signUpPage);
  };

  return (
    <div className=" bg-stone-100 flex h-screen justify-center items-center">
      {signUpPage ? (
        <div className="border border-gray-300 bg-stone-50 rounded-xl p-5 w-full md:w-1/2 m-5 shadow-2xl xl:w-1/3 2xl:w-[30%]">
          <div className="text-2xl mb-5 font-semibold">Sign Up</div>
          <div>
            <form onSubmit={signUpHandler}>
              <div>
                <label>Name*</label>
                <input
                  type="text"
                  className=" hover:border-gray-500 border bg-inherit focus:outline-none  border-gray-400 w-full p-[2%] rounded-md mb-5"
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div>
                <label>Email*</label>
                <input
                  type="email"
                  className=" hover:border-gray-500 border bg-inherit focus:outline-none  border-gray-400 w-full p-[2%] rounded-md mb-5"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label>Password*</label>
                <div className="flex border hover:border-gray-500 focus:outline-none justify-between border-gray-400 w-full p-[2%] rounded-md mb-5 ">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="focus:outline-none w-full bg-inherit"
                    name="password"
                    required
                    onChange={(e) => setPass(e.target.value)}
                    value={password}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer px-2 text-gray-400"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon fontSize="small" />
                    ) : (
                      <VisibilityIcon fontSize="small" />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-32 bg-green-400 p-2 transition-all duration-200 ease-out rounded-lg hover:bg-green-500"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </form>
            <div className="flex mt-3 ml-1">
              <div>Already have an Account? </div>
              <div
                onClick={switchHandler}
                className="text-blue-500 cursor-pointer ml-1 underline"
              >
                Login
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-gray-300 bg-stone-50 rounded-xl p-5 w-full md:w-1/2 m-5 shadow-2xl xl:w-1/3 2xl:w-[30%]">
          <div className="text-2xl mb-5 font-semibold">Login</div>
          <div>
            <form onSubmit={loginHandler}>
              <div>
                <label>Email*</label>
                <input
                  type="text"
                  className=" hover:border-gray-500 border bg-inherit focus:outline-none  border-gray-400 w-full p-[2%] rounded-md mb-5"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label>Password*</label>
                <div className="flex border hover:border-gray-500 focus:outline-none justify-between border-gray-400 w-full p-[2%] rounded-md mb-5 ">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="focus:outline-none w-full bg-inherit"
                    name="password"
                    required
                    onChange={(e) => setPass(e.target.value)}
                    value={password}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer px-2 text-gray-400"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon fontSize="small" />
                    ) : (
                      <VisibilityIcon fontSize="small" />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-32 transition-all duration-200 ease-out bg-green-400 p-2 rounded-lg hover:bg-green-500"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
            {!loading && (
              <div className="flex mt-3">
                <div>Don&apos;t have an account? </div>
                <div
                  onClick={switchHandler}
                  className="text-blue-500 cursor-pointer ml-1 underline"
                >
                  Create Account
                </div>
              </div>
            )}
            <div className="w-full flex items-center justify-center my-2 py-3">
              <div className="p-2 border rounded-lg flex justify-center items-center">
                <div className="mr-1">
                  <img src={google} alt="google" height={20} width={20} />
                </div>
                <a className="" href={getGoogleOAuthUrl()}>
                  Login with Google
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
