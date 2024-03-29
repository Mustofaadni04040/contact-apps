import { createRoot } from "react-dom/client";
import ContactApps from "./components/ContactApps";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApps />
  </BrowserRouter>
);
