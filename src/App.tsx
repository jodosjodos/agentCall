import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { KnowledgePage } from "./pages/Knowledge";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Knowledge" element={<KnowledgePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
