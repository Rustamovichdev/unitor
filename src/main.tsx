import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import AntdProvider from "./context/AntdProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <AntdProvider> */}
        <App />
        {/* </AntdProvider> */}
    </StrictMode>,
);
