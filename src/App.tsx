import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Whatever } from "./pages/whatever";

const client = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={client}>
      <Whatever />
    </QueryClientProvider>
  );
}

export default App;
