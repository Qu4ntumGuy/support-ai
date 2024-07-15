import { useParams } from "react-router-dom";
import ChatInput from "../../Components/ChatInput";

function Chat() {
  const { id } = useParams();
  //   console.log(id);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat />
      <ChatInput />
    </div>
  );
}

export default Chat;
