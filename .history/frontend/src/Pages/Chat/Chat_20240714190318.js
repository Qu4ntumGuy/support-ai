import { useParams } from "react-router-dom";

function Chat() {
  const id = useParams();
  console.log(id);

  return <div>Chat{id}</div>;
}

export default Chat;
