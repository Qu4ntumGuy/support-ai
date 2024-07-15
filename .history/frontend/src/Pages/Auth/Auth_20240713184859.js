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
      <div className="border border-gray-300 rounded-xl p-5 w-full md:w-1/2 m-5 shadow-2xl xl:w-1/3 2xl:w-[30%]">
        <div>Login</div>
        <div>
          <form>
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
                  className="w-10 cursor-pointer text-gray-400"
                >
                  {showPassword ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}
                </div>
              </div>
            </div>
            <button className="w-32 border bg-green-400 p-2 rounded-lg hover:bg-green-500">
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
