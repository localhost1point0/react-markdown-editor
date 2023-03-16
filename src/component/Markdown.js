import { useState } from "react";
import MdInput from "./MdInput";
import MdOutput from "./MdOutput";

const Markdown = () => {
  const [inputText, setInputText] = useState("");

  const downloadFile = () => {
    const link = document.createElement('a');
    const file = new Blob([inputText], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = 'markdown.md';
    link.click();
    URL.revokeObjectURL(link.href);
  };


  return (
    <main>
      <div className="main-container">
      <MdInput inputText={inputText} setInputText={setInputText} />
      <MdOutput inputText={inputText} />
      </div>
      <button onClick={downloadFile}>Download</button>
    </main>
  );
};

export default Markdown;
