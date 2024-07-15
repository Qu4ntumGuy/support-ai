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
      <div className="m-5 text-center">
        <h1 className="text-4xl font-bold m-5 text-gray-700">
          Customer Support
        </h1>
        <div>How can I help you today?</div>
      </div>
      {/* <button onClick={() => localStorage.removeItem("token")}>logout</button> */}
      <div className=" space-y-2">
        <h2>Examples:</h2>
        <p className="infoText">&quot;Explain something to me&quot;</p>
        <p className="infoText">
          &quot;Disscribe a scenerio and question me.&quot;
        </p>
      </div>
    </div>
  );
}

export default Home;
