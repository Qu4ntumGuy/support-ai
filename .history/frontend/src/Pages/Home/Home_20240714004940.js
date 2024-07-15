import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token]);

  return (
    <div className=" bg-slate-400 h-screen flex justify-center items-center">
      {/* <button onClick={() => localStorage.removeItem("token")}>logout</button> */}
    </div>
  );
}

export default Home;
