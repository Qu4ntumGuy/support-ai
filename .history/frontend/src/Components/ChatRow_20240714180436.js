function ChatRow({ email, time }) {
  console.log(time);

  return (
    <div className="m-2 p-1 px-2 border flex flex-col cursor-pointer bg-stone-200 rounded-lg">
      <div className="text-xs">{time.date}</div>
      <div className="flex justify-between items-center align-middle ">
        <div>{email}</div>
        <div className="text-xs items-end">{time.time}</div>
      </div>
    </div>
  );
}

export default ChatRow;
