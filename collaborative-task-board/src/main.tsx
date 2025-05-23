import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "jotai";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
