import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

function Message({ name, message }) {
  return (
    <div className="flex w-full">
      <div className="max-w-[30rem] flex justify-end border border-black">
        <div className="bg-stone-200 h-12 w-12 flex items-center justify-center border rounded-full p-2 text-green-500">
          <GoogleIcon />
        </div>
        <div>
          <div>Message</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
