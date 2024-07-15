import SendIcon from "@mui/icons-material/Send";
import React from "react";
function ChatInput() {
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <form className="">
        <input
          className=""
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button disabled={!message} type="submit" className="">
          <SendIcon fontSize="small" className=" rotate-2" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
