import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";

function Home() {
  const [chatId, setChatId] = React.useState("");
  const token = localStorage.getItem("token");
  // console.log(token);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const createChat = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/userChat`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.chats[0]._id);
      setChatId(data.chats[0]._id);
      navigate(`/chat/${data.chats[0]._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token]);

  return (
    <div className="flex">
      <div className="bg-stone-200 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
        <Sidebar />
        <div
          onClick={logoutHandler}
          className="md:hidden absolute top-2 left-2 bg-stone-200 rounded-lg p-2"
        >
          <Logout />
        </div>
      </div>
      <div className="bg-stone-100 flex-1">
        <div className=" h-screen flex flex-col px-2 justify-center items-center">
          <div className="h-full flex flex-col justify-center align-middle m-5">
            <div className="m-5 text-center">
              <h1 className="text-4xl font-bold m-5 text-gray-700">
                Customer Support
              </h1>
              <div className="mt-10">How can I help you today?</div>
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
          <div
            onClick={createChat}
            className="bottom-0 cursor-pointer mt-auto border border-gray-400 rounded-lg p-3 mb-5 md:mb-10"
          >
            Ask me anything
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
