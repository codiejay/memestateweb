import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import { ModalProvider } from "./context/VideoContext";
import { IFrameModalProvider } from "./context/IframeContext.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Footer from "./component/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <main className="relative app-container " id="container">
        <IFrameModalProvider>
          <ModalProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
            <Footer />
          </ModalProvider>
        </IFrameModalProvider>
      </main>
    </Router>
  </StrictMode>
);
