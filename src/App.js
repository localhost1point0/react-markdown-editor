import { useState } from "react";
import MdInput from "./component/MdInput";
import MdOutput from "./component/MdOutput";
// import useMetaData from "./hook/useMetaData";
import { metaData } from "./data/data";
import { Helmet } from "react-helmet";

const App = () => {
  const [inputText, setInputText] = useState("");

  const generateMetaTags = () => {
    const description = metaData.description;

    return (
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Helmet>
    );
  };

  return (
    <main>
      {generateMetaTags()}
      <MdInput inputText={inputText} setInputText={setInputText} />
      <MdOutput inputText={inputText} />
    </main>
  );
};

export default App;
