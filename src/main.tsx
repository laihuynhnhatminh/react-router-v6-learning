import { createRoot } from "react-dom/client";

import "./server.ts";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
