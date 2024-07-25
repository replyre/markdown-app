import logo from "./logo.svg";
import "./App.css";

import MarkdownPreview from "@uiw/react-markdown-preview";
import { useEffect, useRef, useState } from "react";
function App() {
  const [material, setMaterial] = useState(`
## MarkdownPreview

> todo: React component preview markdown text.
`);

  useEffect(() => {}, [material]);

  return (
    <div className="App">
      <div className="write">
        <h3>React Markdown App</h3>
        <nav>
          <button
            onClick={() => {
              setMaterial(material + "# ");
            }}
          >
            H<sub>1</sub>
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "## ");
            }}
          >
            H<sub>2</sub>
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "### ");
            }}
          >
            H<sub>3</sub>
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "> ");
            }}
          >
            {">"}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "* ");
            }}
          >
            {"•"}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "1) ");
            }}
          >
            {"1."}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "---");
            }}
          >
            {"--"}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "**Enter text here**");
            }}
          >
            {"B"}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "***Enter text here***");
            }}
            style={{ fontStyle: "italic" }}
          >
            {"I"}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "`Enter code here`");
            }}
          >
            {"</>"}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "[title](https://www.example.com)");
            }}
          >
            {"🔗"}
          </button>{" "}
          <button
            onClick={() => {
              setMaterial(material + "![alt text](image.jpg)");
            }}
          >
            {"🖼"}
          </button>{" "}
        </nav>
        <textarea
          className="src"
          value={material}
          onChange={(e) => {
            setMaterial(e.target.value);
          }}
        >
          {material}
        </textarea>
        {console.log(material)}
      </div>
      <div className="readonly">
        <MarkdownPreview
          source={material}
          style={{ padding: 16, height: "100%" }}
        />
      </div>
    </div>
  );
}

export default App;
