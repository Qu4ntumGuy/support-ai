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
    <div className=" bg-slate-200 h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold text-gray-700">Custom Support</h1>
      {/* <button onClick={() => localStorage.removeItem("token")}>logout</button> */}
      <div>How can I help you today?</div>
    </div>
  );
}

export default Home;
