import { useEffect } from "react";
import axios from "axios";

function Chat({ chatId }) {
  const id = chatId;

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    const body = {
      chatId: id,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_ENDPOINT}/getMessages`,
      body,
      config
    );
    // const data = await response.json();
    console.log(response);
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  //   console.log(id);
  //   function formatFirebaseSetupGuide(input) {
  //     // Replace specific markdown-like patterns with HTML tags
  //     let formattedText = input
  //       .replace(/^##\s(.+)$/gm, "<h2>$1</h2>") // Convert ## headers to <h2>
  //       .replace(/^###\s(.+)$/gm, "<h3>$1</h3>") // Convert ### headers to <h3>
  //       .replace(/^\*\*\s(.+):\s*\*\*/gm, "<strong>$1:</strong>") // Convert **Text:** to <strong>Text:</strong>
  //       .replace(/^\* (.+)$/gm, "<li>$1</li>") // Convert * items to <li>
  //       .replace(
  //         /^```(javascript)?$/gm,
  //         '<pre><code class="language-javascript">'
  //       ) // Convert ```javascript to <pre><code>
  //       .replace(/^```$/gm, "</code></pre>") // Convert ``` to </code></pre>
  //       .replace(
  //         /\[([^\]]+)\]\(([^\)]+)\)/g,
  //         '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  //       ) // Convert [text](url) to <a href="url">text</a>
  //       .replace(/\n\n/g, "</p><p>") // Convert double newlines to paragraph breaks
  //       .replace(/\n/g, "<br/>"); // Convert single newlines to <br/>

  //     // Wrap the entire text in a <div>
  //     formattedText = `<div>${formattedText}</div>`;

  //     // Return the formatted HTML
  //     return formattedText;
  //   }

  //   console.log(formatFirebaseSetupGuide(text));
  //   const formattedHTML = formatFirebaseSetupGuide(text);

  //   return <div dangerouslySetInnerHTML={{ __html: formattedHTML }} />;

  return (
    <div className="flex-1">
      <div></div>
      <div></div>
    </div>
  );
}

export default Chat;
