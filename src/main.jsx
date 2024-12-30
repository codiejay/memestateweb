import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="relative">
      <Navbar />
      <App />
    </main>
  </StrictMode>
);
