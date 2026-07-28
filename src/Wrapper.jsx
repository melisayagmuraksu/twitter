import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AuthContextProvider from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Wrapper({ children }) {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Wrapper;
