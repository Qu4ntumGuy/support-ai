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
    <div className=" bg-slate-200 h-screen flex flex-col justify-center items-center">
      <div className="m-5 items-center">
        <h1 className="text-5xl font-bold m-5 text-gray-700">Custom Support</h1>
        <div>How can I help you today?</div>
      </div>
      {/* <button onClick={() => localStorage.removeItem("token")}>logout</button> */}
      <div className=" space-y-2">
        <h2>Examples</h2>
        <p>Explain something to me.</p>
        <p>Disscribe a scenerio and question me.</p>
      </div>
    </div>
  );
}

export default Home;
