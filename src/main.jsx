import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import { ModalProvider } from "./context/VideoContext";
import { IFrameModalProvider } from "./context/IframeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="relative app-container ">
      <IFrameModalProvider>
        <ModalProvider>
          {/* <Navbar /> */}
          <App />
        </ModalProvider>
      </IFrameModalProvider>
    </main>
  </StrictMode>
);
