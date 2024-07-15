import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React from "react";
function ChatInput() {
  const [message, setMessage] = React.useState("");

  return (
    <div className="m-5 text-sm flex justify-center items-center">
      <form className="flex w-full md:w-1/2  bg-stone-200 p-2 rounded-full">
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
