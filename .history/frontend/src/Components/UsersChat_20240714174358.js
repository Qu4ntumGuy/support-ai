import React, { useEffect } from "react";
import ChatRow from "./ChatRow";

function UsersChat() {
  const [chats, setChats] = React.useState([]);

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
      if (res.status === 200) {
        setChats(data.chats);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const formatDate = (toformat) => {
    const date = new Date(toformat);

    // Options for formatting the date
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    // Convert to human-readable format
    const humanReadableDate = date.toLocaleDateString("en-US", options);
    const humanReadableTime = date.toLocaleTimeString("en-US", options);

    return humanReadableDate, humanReadableTime;
  };

  return (
    <div className="w-full border border-black h-96 rounded-lg mt-3">
      {}
      {/* <ChatRow />
      <ChatRow />
      <ChatRow />
      <ChatRow /> */}
    </div>
  );
}

export default UsersChat;
