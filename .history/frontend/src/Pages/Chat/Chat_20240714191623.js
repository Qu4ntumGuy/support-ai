import { useParams } from "react-router-dom";

function Chat() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat />
    </div>
  );
}

export default Chat;
