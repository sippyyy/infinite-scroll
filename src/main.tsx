import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/main_theme.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoProvider from "./context/searchContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
