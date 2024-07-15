function ChatRow({ email, time }) {
  console.log(time);

  return (
    <div className="m-2 p-1 px-2 border flex flex-col border-gray-600 rounded-lg">
      <div className="text-xs">{time.date}</div>
      <div className="flex justify-between  ">
        <div>{email}</div>
        <div className="text-xs item-center">{time.time}</div>
      </div>
    </div>
  );
}

export default ChatRow;
