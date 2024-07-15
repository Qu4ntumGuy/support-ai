import React from "react";

function Message({ name, message }) {
  return (
    <div className="flex w-full">
      <div className="max-w-[30rem] flex justify-end border border-black">
        <div>Name</div>
        <div>Message</div>
      </div>
    </div>
  );
}

export default Message;
