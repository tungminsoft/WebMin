import { BrowserRouter } from "react-router";
import ScrollTop from "./components/ScrollTop";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
