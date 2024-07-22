import React, { useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import { toast } from "react-toastify";

function Chat({ chatId }) {
  const id = chatId;
  const [message, setMessage] = React.useState([]);

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    try {
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
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  return (
    <div className="">
      <div className="lg:max-w-2xl w-full xl:max-w-3xl mx-auto h-screen">
        <div className="overflow-y-scroll scrollbar-hide justify-end h-full pb-20">
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
