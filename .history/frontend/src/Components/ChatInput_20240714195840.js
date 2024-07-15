import SendIcon from "@mui/icons-material/Send";
import React from "react";
function ChatInput() {
  const [message, setMessage] = React.useState("");

  return (
    <div className="m-5 text-sm flex justify-center items-center">
      <form className="flex w-full md:w-1/2 focus:outline-none  border p-2 rounded-full border-gray-500">
        <input
          className="w-full p-2 focus:outline-none"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          disabled={!message}
          type="submit"
          className="text-white rounded-full disabled:cursor-not-allowed bg-green-700 font-bold hover:opacity-80 p-2 disabled:bg-gray-600"
        >
          <SendIcon fontSize="small" className=" -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
