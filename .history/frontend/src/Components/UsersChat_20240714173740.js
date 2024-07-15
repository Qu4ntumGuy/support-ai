import ChatRow from "./ChatRow";

function UsersChat() {
  const fetchChats = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/usersChat", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
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
