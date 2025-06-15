// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // your global CSS
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // ✅ import service worker

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ Register the service worker for PWA support
serviceWorkerRegistration.register();
