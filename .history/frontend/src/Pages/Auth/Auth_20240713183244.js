import React from "react";

function Auth() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border border-gray-200 p-2">
        <div>Login</div>
        <div>
          <form>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
