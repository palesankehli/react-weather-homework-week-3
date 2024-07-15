import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import Links from "./links";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Weather />
    <Links />
  </StrictMode>
);
