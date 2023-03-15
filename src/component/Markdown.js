import { useState } from "react";
import MdInput from "./MdInput";
import MdOutput from "./MdOutput";

const Markdown = () => {
  const [inputText, setInputText] = useState("");

  return (
    <main>
      <MdInput inputText={inputText} setInputText={setInputText} />
      <MdOutput inputText={inputText} />
    </main>
  );
};

export default Markdown;
