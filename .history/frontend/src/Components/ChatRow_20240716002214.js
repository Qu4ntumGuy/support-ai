function ChatRow({ email, time, chatId }) {
  console.log(time);

  const showChats = (id) => {
    console.log(id);
  };

  return (
    <div
      onClick={() => showChats()}
      className="m-2 p-1 px-2 border flex flex-col cursor-pointer bg-stone-200 hover:bg-stone-100 rounded-lg"
    >
      <div className="text-xs text-gray-500 font-normal">{time.date}</div>
      <div className="flex justify-between items-center align-middle ">
        <div className="text-sm">{email}</div>
        <div className="text-xs items-end text-gray-500 font-normal">
          {time.time}
        </div>
      </div>
    </div>
  );
}

export default ChatRow;
