import React from "react";

const MdInput = ({ inputText, setInputText }) => {
  const downloadFile = () => {
    const link = document.createElement("a");
    const file = new Blob([inputText], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "markdown.md";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="column">
      <div className="titlebar">
        <h3>Input</h3>
        <button onClick={downloadFile}>Download</button>
      </div>
      <textarea
        className="text-area"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="type the text in markdown format"
      ></textarea>
    </div>
  );
};

export default MdInput;
