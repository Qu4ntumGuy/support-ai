import { useParams } from "react-router-dom";
import ChatInput from "../../Components/ChatInput";
import Chat from "../../Components/Chat";

function ChatPage() {
  const { id } = useParams();
  //   console.log(id);

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
      <div className="bg-stone-100 flex-1">
        <div className="flex flex-col h-screen overflow-hidden">
          <Chat />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
