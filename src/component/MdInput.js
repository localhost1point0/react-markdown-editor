import React from "react";

const MdInput = ({ inputText, setInputText }) => {

  

  return (
    <div className="column">
      <h3>Input</h3>
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
