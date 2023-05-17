import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ScrollToTop from "./assets/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);
