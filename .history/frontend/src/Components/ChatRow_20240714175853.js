function ChatRow({ email, time }) {
  console.log(time);

  return (
    <div className="m-2 p-2 text-sm border flex flex-col border-gray-600 rounded-lg">
      <div></div>
      <div className="flex">
        <div>{email}</div>
        <div>{time.date}</div>
      </div>
    </div>
  );
}

export default ChatRow;
