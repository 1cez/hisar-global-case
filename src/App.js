import React from "react";
import { GlobalProvider } from "store/context/contextStore";
import Home from "pages/home";
import GlobalStyle from "GlobalStyle";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <GlobalStyle />
        <Home />
      </GlobalProvider>
    </QueryClientProvider>
  );
};

export default App;
