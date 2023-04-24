import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TodosProvider } from "./contexts/todosContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodosProvider>
);
