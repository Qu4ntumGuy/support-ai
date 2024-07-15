import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

function Message({ name, message }) {
  return (
    <div className="flex w-full">
      <div className="w-[30rem] flex justify-start">
        <div className="bg-stone-200 h-12 w-12 flex items-center justify-center border rounded-full p-2 text-green-500">
          <GoogleIcon />
        </div>
        <div className="flex ml-2 justify-start items-center bg-stone-400 rounded-md p-2">
          <div>Message</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
