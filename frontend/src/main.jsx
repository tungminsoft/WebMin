import { createRoot } from "react-dom/client";
import App from "@/App";
import { UserProvider } from "@/contexts/UserContext";
import "@/index.css";
import { LoadingProvider } from "@/contexts/LoadingContext";

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </LoadingProvider>
);
