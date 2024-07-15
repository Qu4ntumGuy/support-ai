import React, { useEffect } from "react";
import axios from "axios";
import Message from "./Message";

function Chat({ chatId }) {
  const id = chatId;
  const [message, setMessage] = React.useState([]);

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    const body = {
      chatId: id,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_ENDPOINT}/getMessages`,
      body,
      config
    );
    setMessage(response.data.messages);
    // const data = await response.json();
    console.log(response.data.messages);
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  const time = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  console.log(time);

  return (
    <div className="">
      <div className="lg:max-w-2xl w-full xl:max-w-3xl mx-auto h-screen">
        <div className="overflow-y-scroll scrollbar-hide justify-end h-full">
          {message.map((message) => (
            <Message
              key={message._id}
              message={message.message}
              name={message.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;
