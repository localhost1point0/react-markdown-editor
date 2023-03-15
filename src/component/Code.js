import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  prism,
  okaidia,
  twilight,
  dracula,
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  coy,
  coyWithoutShadows,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ props, selectedTheme }) => {
  const match = /language-(\w+)/.exec(props.className || "");

  const themes = {
    prism,
    okaidia,
    twilight,
    dracula,
    a11yDark,
    atomDark,
    base16AteliersulphurpoolLight,
    cb,
    coldarkCold,
    coldarkDark,
    coy,
    coyWithoutShadows,
  };

  return match ? (
    <SyntaxHighlighter
      className="language defined"
      language={match[1]}
      style={themes[selectedTheme]}
    >
      {props.children}
    </SyntaxHighlighter>
  ) : (
    <code id="no language" className={props.className}>
      {props.children}
    </code>
  );
};

export default Code;
