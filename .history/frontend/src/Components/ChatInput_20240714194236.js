import SendIcon from "@mui/icons-material/Send";
import React from "react";
function ChatInput() {
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <form className="border border-gray-500 p-2">
        <input
          className=""
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          disabled={!message}
          type="submit"
          className="text-white font-bold hover:opacity-50 p-2 disabled:bg-gray-600"
        >
          <SendIcon fontSize="small" className=" -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
