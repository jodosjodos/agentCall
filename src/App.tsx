import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { KnowledgePage } from "./pages/Knowledge";
import { CompanyPage } from "./pages/Company";
import { SideBar } from "./component/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
const SideBarDiv = styled.div`
  background-color: #0b2227;
`;
function App() {
  return (
    <div>
      <Router>
        <Container fluid>
          <Row>
            <SideBarDiv className="col-auto col-sm-2  d-flex flex-column justify-content-between min-vh-100">
              <SideBar />
            </SideBarDiv>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Knowledge" element={<KnowledgePage />} />
              <Route path="/company" element={<CompanyPage />} />
            </Routes>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
