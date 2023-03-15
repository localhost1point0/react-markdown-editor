import { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Code from "./Code";
import remarkGfm from "remark-gfm";

const MdOutput = ({ inputText }) => {
  const chatBoxRef = useRef(null);

  function scrollToBottom() {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }

  useEffect(scrollToBottom, []);

  useEffect(scrollToBottom, [inputText]);

  const [selectedTheme, setSelectedTheme] = useState("atomDark");

  const themes = [
    "prism",
    "okaidia",
    "twilight",
    "dracula",
    "a11yDark",
    "atomDark",
    "base16AteliersulphurpoolLight",
    "cb",
    "coldarkCold",
    "coldarkDark",
    "coy",
    "coyWithoutShadows",
  ];

  return (
    <div className="column">
      <div className="titlebar">
        <h2>Preview</h2>
        <div>
          <label htmlFor="theme-select">Select theme:</label>

          <select
          className="styled-select"
            id="theme-select"
            value={selectedTheme}
            onChange={(e) => {
              setSelectedTheme(e.target.value);
            }}
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="md-area preview" ref={chatBoxRef}>
        <ReactMarkdown
          components={{ code: (props) => Code({ props, selectedTheme }) }}
          remarkPlugins={[remarkGfm]}
        >
          {inputText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MdOutput;
