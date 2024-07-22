import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const user = params.get("user");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      navigate("/"); // Redirect to the home page or desired route
    }
  }, []);

  //   useEffect(() => {
  //     const token = new URLSearchParams(location.search).get("token");
  //     const user = new URLSearchParams(location.search).get("user");
  //     if (token !== null && user !== null) {
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("user", user);
  //     }
  //     if (token) {
  //       navigate("/");
  //     }
  //   }, [navigate]);

  return <div>Callback</div>;
}

export default Callback;
