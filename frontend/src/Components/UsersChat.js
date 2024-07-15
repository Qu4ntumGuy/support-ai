import React, { useEffect } from "react";
import ChatRow from "./ChatRow";
import { toast } from "react-toastify";

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
      console.log(data.chats);
      if (res.status === 200) {
        setChats(data.chats);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const formatDate = (isoDateTime) => {
    const date = new Date(isoDateTime);

    // Options for formatting the date
    const dateOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    // Options for formatting the time
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // For 24-hour format
      timeZone: "UTC", // Adjust the time zone if needed
    };

    // Convert to human-readable format
    const humanReadableDate = date.toLocaleDateString("en-IN", dateOptions);
    const humanReadableTime = date.toLocaleTimeString("en-IN", timeOptions);

    return {
      date: humanReadableDate,
      time: humanReadableTime,
    };
  };

  return (
    <div className="w-full bg-stone-100 h-96 overflow-y-auto rounded-lg mt-3">
      {chats.map((chat) => (
        <ChatRow
          key={chat._id}
          email={chat.email}
          time={formatDate(chat.createdAt)}
          chatId={chat._id}
        />
      ))}
      {/* <ChatRow />
      <ChatRow />
      <ChatRow />
      <ChatRow /> */}
    </div>
  );
}

export default UsersChat;
