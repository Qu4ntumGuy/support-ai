import SendIcon from "@mui/icons-material/Send";
import React from "react";
function ChatInput() {
  const [message, setMessage] = React.useState("");

  return (
    <div className="m-5 text-sm flex justify-center items-center">
      <form className="flex">
        <input
          className="border border-gray-500 p-2"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          disabled={!message}
          type="submit"
          className="text-white bg-green-500 font-bold hover:opacity-50 p-2 disabled:bg-gray-600"
        >
          <SendIcon fontSize="small" className=" -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
