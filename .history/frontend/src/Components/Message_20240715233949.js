import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

function Message({ name, message }) {
  const chatbot = name === "Chatbot";
  //   const chatbot = true;

  const formatText = (text) => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    const parseLine = (line) => {
      if (line.startsWith("*") || line.startsWith("•")) {
        return {
          type: "listItem",
          content: line.replace(/^[*• ]+/, "").trim(),
        };
      }
      if (line.startsWith("**")) {
        return { type: "strong", content: line.replace(/^\*\*|\*\*$/g, "") };
      }
      if (line.includes(":")) {
        const [label, description] = line.split(":").map((part) => part.trim());
        return { type: "description", label, description };
      }
      return { type: "paragraph", content: line };
    };

    const formattedContent = [];
    let currentList = null;

    lines.forEach((line, index) => {
      const parsedLine = parseLine(line);
      if (parsedLine.type === "listItem") {
        if (!currentList) {
          currentList = [];
          formattedContent.push({ type: "list", items: currentList });
        }
        currentList.push(parsedLine.content);
      } else {
        currentList = null;
        formattedContent.push(parsedLine);
      }
    });

    return formattedContent.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-4">
              {item.content}
            </p>
          );
        case "strong":
          return (
            <p key={index} className="mb-4">
              <strong className="text-blue-500">{item.content}</strong>
            </p>
          );
        case "description":
          return (
            <div key={index} className="mb-4">
              <strong className="text-blue-700">{item.label}:</strong>{" "}
              {item.description}
            </div>
          );
        case "list":
          return (
            <ul key={index} className="list-disc list-inside mb-4 ml-4">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="mb-2">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className={`flex w-full ${chatbot ? "justify-start" : "justify-end"}`}>
      {chatbot ? (
        <div className="max-w-[30rem] flex my-2 justify-start">
          <div>
            <div className="bg-stone-200 h-12 w-12 flex items-center justify-center border rounded-full p-2 text-green-500">
              <GoogleIcon />
            </div>
          </div>
          <div className="flex justify-start items-center rounded-md px-3">
            <div>{formatText(message)}</div>
          </div>
        </div>
      ) : (
        <div className="max-w-[30rem] flex my-2 justify-end">
          <div className="flex ml-2 justify-start items-center bg-stone-200 rounded-full p-2 px-3">
            <div>{message}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
