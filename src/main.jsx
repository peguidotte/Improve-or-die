import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import GameSelector from "./components/GameSelector";
import NotFound from "./pages/NotFound";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tutorial/:id" element={<Tutorial />} />
        <Route path="game/:id" element={<GameSelector />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);