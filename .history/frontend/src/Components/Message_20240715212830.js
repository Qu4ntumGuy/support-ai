import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

function Message({ name, message }) {
  // const chatbot = name === "Chatbot";
  const chatbot = true;

  return (
    <div className={`flex w-full ${chatbot ? "justify-start" : "justify-end"}`}>
      {chatbot ? (
        <div className="w-[30rem] flex justify-start">
          <div>
            <div className="bg-stone-200 h-12 w-12 flex items-center justify-center border rounded-full p-2 text-green-500">
              <GoogleIcon />
            </div>
          </div>
          <div className="flex ml-2 justify-start items-center rounded-md px-3">
            <div>Message</div>
          </div>
        </div>
      ) : (
        <div className="w-[30rem] flex justify-end">
          <div className="flex ml-2 justify-start items-center bg-stone-200 rounded-full p-2 px-3">
            <div>Message</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
