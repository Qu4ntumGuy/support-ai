import { useParams } from "react-router-dom";
import ChatInput from "../../Components/ChatInput";
import Chat from "../../Components/Chat";

function ChatPage() {
  const { id } = useParams();
  //   console.log(id);

  return (
    <div>
      <div className="flex flex-col h-screen overflow-hidden">
        <Chat />
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatPage;
