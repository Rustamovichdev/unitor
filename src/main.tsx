import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
// import AntdProvider from "./context/AntdProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
    <StrictMode>
        {/* <AntdProvider> */}
        <App />
        {/* </AntdProvider> */}
    </StrictMode>,
    </BrowserRouter>
);
