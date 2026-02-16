import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log("Main.jsx loaded");

// Simple render test
try {
  const rootElement = document.getElementById("root");
  console.log("Root element found:", rootElement);
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div style={{ padding: "20px", background: "red", color: "white" }}>
        <h1>Test Render - If you see this, React is working</h1>
        <p>Current time: {new Date().toLocaleString()}</p>
      </div>
    </React.StrictMode>
  );
  
  console.log("React render completed");
} catch (error) {
  console.error("Render error:", error);
  document.body.innerHTML = `
    <div style="padding: 20px; background: #f00; color: white; font-family: Arial;">
      <h1>React Error</h1>
      <p>${error.message}</p>
      <p>Check console for more details</p>
    </div>
  `;
}
