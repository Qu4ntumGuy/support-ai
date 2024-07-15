function ChatRow({ email, time }) {
  return (
    <div className="m-2 p-2 text-sm border flex flex-col border-gray-600 rounded-lg">
      <div></div>
      <div className="flex">
        <div></div>
        <div></div>
      </div>
      {email}
    </div>
  );
}

export default ChatRow;
