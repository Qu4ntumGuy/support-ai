import React from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Auth() {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {/* <div className="border border-gray-200 p-2">
        <div>Login</div>
        <div>
          <form>
            <div>
              <label>Email*</label>
              <input type="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
          </form>
        </div>
      </div> */}
      <div
        className={`px-[6%] py-[5%]
                  bg-stone-100 text-black
               shadow-md rounded-lg w-full`}
      >
        <h1 className="mb-[2%] ml-[3%] text-3xl font-semibold">Log in</h1>
        <p className=" ml-[3%] text-gray-500 text-xs">
          Welcome back, it&apos;s great to have you here.
        </p>
        <form
          className="pl-[3%] pt-[2%] mt-[3%] text-black bg-inherit text-sm"
          method="POST"
          onSubmit={loginHandler}
        >
          <label>Email*</label>
          <input
            type="text"
            className=" hover:border-gray-500 border bg-inherit focus:outline-none  border-gray-400 w-full p-[2%] rounded-md mb-5"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label>Password*</label>
          <div className="flex border hover:border-gray-500 focus:outline-none  border-gray-400 w-full p-[2%] rounded-md mb-5 ">
            <input
              type={showPassword ? "text" : "password"}
              className="focus:outline-none w-11/12 bg-inherit"
              name="password"
              required
              onChange={(e) => setPass(e.target.value)}
              value={password}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="w-1/12 cursor-pointer text-gray-400"
            >
              {showPassword ? (
                <VisibilityOffIcon fontSize="small" />
              ) : (
                <VisibilityIcon fontSize="small" />
              )}
            </div>
          </div>
          <div className="flex my-[2%]">
            <Link className=" underline" href="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-1/4 text-center text-black py-[3%] rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none my-[1%]"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
        <div className="ml-[3%] flex text-xs">
          <div className="my-[2%] text-gray-500">
            Don&apos;t have an account?
          </div>
          <Link
            className=" underline ml-[1%] my-[2%] font-semibold"
            href="../../signup"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
