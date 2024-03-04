import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { KnowledgePage } from "./pages/Knowledge";
import { CompanyPage } from "./pages/Company";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Knowledge" element={<KnowledgePage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
