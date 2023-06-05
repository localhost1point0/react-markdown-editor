import { useState } from "react";
import MdInput from "./component/MdInput";
import MdOutput from "./component/MdOutput";
import useMetaData from "./hook/useMetaData";
import { metaData } from "./data/data";

const App = () => {
  const [inputText, setInputText] = useState("");

  useMetaData(metaData);

  return (
    <main>
      <MdInput inputText={inputText} setInputText={setInputText} />
      <MdOutput inputText={inputText} />
    </main>
  );
};

export default App;
