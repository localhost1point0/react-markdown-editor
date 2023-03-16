# React Markdown Editor App

React Markdown editor allows users to write and edit Markdown text live in real-time, and see the rendered output immediately as they type in a preview pane. This allows users to see exactly how their Markdown will look when published online.

This web app includes syntax highlighting and theme selection to make it easier and faster to write Markdown text.

A popular third-party React component, ReactMarkdown is used to build this app. This allows to easily render Markdown content in your React application. It's a simple and efficient way to parse and render Markdown syntax into HTML elements.

### Install

```bash
npm install react-markdown
```

### Use

Once you've installed ReactMarkdown, you can use it in your React components by importing it:

```jsx
import ReactMarkdown from "react-markdown";

const MyComponent = () => {
  const markdown = `# Hello, world!

This is a **markdown** text rendered using ReactMarkdown component.`;

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};
```

### Use a plugin

remark-gfm, adds support for strikethrough, tables, tasklists and URLs directly:

```jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MyComponent = () => {
  const markdown = `A paragraph with *emphasis* and **strong importance**.
    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};
```

## Using Syntax Highlighter with Markdown:

**react-syntax-highlighter** overwrites the normal handling of an element. It is basically used for syntax highlighting of code element with different themes.

### Install

```bash
npm install react-syntax-highlighter
```

### Import the necessary components from react-syntax-highlighter and react-markdown:

```jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
```

### Use react-markdown and pass the Code component as the renderers prop:

```jsx
const markdown = `
  # My Markdown

  This is a paragraph with some code:

  \`\`\`javascript
  const foo = 'bar';
  console.log(foo);
  \`\`\`
`;

const MyComponent = () => {
  return <ReactMarkdown renderers={{ code: CodeBlock }}>{markdown}</ReactMarkdown>;
};

```

### Define a function that renders the code blocks using SyntaxHighlighter:

```jsx
const Code = (props) => {
  return (
    <SyntaxHighlighter language={props.language} style={dracula}>
      {props.children}
    </SyntaxHighlighter>
  );
};
```

### Some of the prism based Syntaxhighlighter Themes:

- prism
- okaidia
- twilight
- dracula
- a11yDark
- atomDark
- base16AteliersulphurpoolLight
- cb
- coldarkCold
- coldarkDark
- coy
- coyWithoutShadows


## View Live Demo:

Open this [https://saragam443.github.io/react-markdown-editor]

## OR

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
