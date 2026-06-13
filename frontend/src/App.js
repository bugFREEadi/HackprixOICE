import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import AppPlaceholder from "@/pages/AppPlaceholder";
import SimulationPlaceholder from "@/pages/SimulationPlaceholder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<AppPlaceholder />} />
          <Route path="/simulation" element={<SimulationPlaceholder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
