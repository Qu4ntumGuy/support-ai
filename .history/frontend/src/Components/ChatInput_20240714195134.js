import SendIcon from "@mui/icons-material/Send";
import React from "react";
function ChatInput() {
  const [message, setMessage] = React.useState("");

  return (
    <div className="m-5 text-sm flex justify-center items-center">
      <form className="flex w-full border border-gray-500">
        <input
          className="w-full p-2"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          disabled={!message}
          type="submit"
          className="text-white rounded-full bg-green-700 font-bold hover:opacity-80 p-2 disabled:bg-gray-600"
        >
          <SendIcon fontSize="small" className=" -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
