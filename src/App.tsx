import { Route, Routes } from "react-router";

import { ThemeProvider } from "@/providers/theme-provider";
import DefaultLayout from "@/layouts/default";
import Home from "@/pages/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
