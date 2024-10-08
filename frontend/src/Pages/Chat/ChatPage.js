import { useNavigate, useParams } from "react-router-dom";
import ChatInput from "../../Components/ChatInput";
import Chat from "../../Components/Chat";
import Sidebar from "../../Components/Sidebar";
import Logout from "@mui/icons-material/Logout";

function ChatPage() {
  const { id } = useParams();
  //   console.log(id);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="flex">
      <div className="bg-stone-200 max-w-xs h-screen overflow-y-auto md:min-w-[18rem]">
        <Sidebar />
        <div
          onClick={logoutHandler}
          className="md:hidden absolute top-2 left-2 bg-stone-200 rounded-lg p-2"
        >
          <Logout />
        </div>
      </div>
      <div className="bg-stone-100 flex-1 text-sm md:text-base">
        <div className="flex flex-col h-screen">
          <div className="overflow-y-hidden scrollbar-hide h-full">
            <Chat chatId={id} />
          </div>
          <div className="bottom-0 mt-auto">
            <ChatInput chatId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
