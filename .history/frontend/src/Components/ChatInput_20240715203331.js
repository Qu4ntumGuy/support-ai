import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

function ChatInput({ chatId }) {
  const id = chatId;
  //   console.log(id);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const email = JSON.parse(localStorage.getItem("user")).email;
  const name = JSON.parse(localStorage.getItem("user")).name;
  const token = localStorage.getItem("token");
  //   console.log(token);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
    const input = message.trim();
    setMessage("");
    setLoading(true);
    const wait = toast.loading("Thinking...");
    try {
      const body = {
        chatId: id,
        email,
        name,
        message: input,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/sendMessage`,
        body,
        config
      );
      console.log(res);
      if (res.status === 201) {
        toast.update(wait, {
          render: "Responsed",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.update(wait, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    }
    setLoading(false);
  };

  return (
    <div className="m-5 w-full lg:mx-w-xl xl:max-w-3xl mx-auto text-sm flex justify-center items-center">
      <form
        onSubmit={sendMessage}
        className="flex w-full  bg-stone-200 p-2 rounded-full"
      >
        <input
          className="w-full p-2 focus:outline-none bg-inherit"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          disabled={!message}
          type="submit"
          className="text-white rounded-full disabled:cursor-default bg-gray-900 font-bold hover:opacity-80 p-2 disabled:bg-gray-400"
        >
          <ArrowUpwardIcon fontSize="small" className="" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
