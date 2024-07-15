import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

function Message({ name, message }) {
  return (
    <div className="flex w-full">
      <div className="max-w-[30rem] flex justify-end border border-black">
        <div className="bg-">
          <GoogleIcon />
        </div>
        <div>
          <div>Name</div>
          <div>Message</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
