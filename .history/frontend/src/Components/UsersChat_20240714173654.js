import ChatRow from "./ChatRow";

function UsersChat() {
  const fetchChats = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full border border-black h-96 rounded-lg mt-3">
      <ChatRow />
      <ChatRow />
      <ChatRow />
      <ChatRow />
    </div>
  );
}

export default UsersChat;
