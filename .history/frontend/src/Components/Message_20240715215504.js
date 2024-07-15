import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

function Message({ name, message }) {
  const chatbot = name === "Chatbot";
  //   const chatbot = true;

  const formatText = (text) => {
    // Split the text into sections based on headings and list items
    const sections = text.split(/\n(?=\*|•|• )/);

    return sections.map((section, index) => {
      if (section.startsWith("*") || section.startsWith("•")) {
        // Handle lists
        const items = section
          .split("\n")
          .map((item) => item.replace(/^[*• ]+/, "").trim());
        return (
          <ul key={index} className="list-disc list-inside mb-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        );
      }

      if (section.startsWith("**")) {
        // Handle bold text
        return (
          <p key={index} className="mb-4">
            <strong className="text-blue-500">
              {section.replace(/^\*\*|\*\*$/g, "")}
            </strong>
          </p>
        );
      }

      if (section.includes(":")) {
        // Handle descriptions
        const [label, description] = section
          .split(":")
          .map((part) => part.trim());
        return (
          <div key={index} className="mb-4">
            <strong className="text-blue-700">{label}:</strong> {description}
          </div>
        );
      }

      // Handle general paragraphs
      return (
        <p key={index} className="mb-4">
          {section}
        </p>
      );
    });
  };

  return (
    <div className={`flex w-full ${chatbot ? "justify-start" : "justify-end"}`}>
      {chatbot ? (
        <div className="w-[30rem] flex my-2 justify-start">
          <div>
            <div className="bg-stone-200 h-12 w-12 flex items-center justify-center border rounded-full p-2 text-green-500">
              <GoogleIcon />
            </div>
          </div>
          <div className="flex justify-start items-center rounded-md px-3">
            <div>{message}</div>
          </div>
        </div>
      ) : (
        <div className="w-[30rem] flex my-2 justify-end">
          <div className="flex ml-2 justify-start items-center bg-stone-200 rounded-full p-2 px-3">
            <div>{message}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
