import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TextEditorProvider } from "./utils/context";

ReactDOM.render(
  <BrowserRouter>
    <TextEditorProvider>
      <App />
    </TextEditorProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
