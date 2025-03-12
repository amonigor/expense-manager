import { Route, Routes } from "react-router";

import { ThemeProvider } from "@/providers/theme-provider";
import Home from "@/pages/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
