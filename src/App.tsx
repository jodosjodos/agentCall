import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { KnowledgePage } from "./pages/KnowledgePage";
import { CompanyPage } from "./pages/CompanyPage";
import { SideBar } from "./component/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { AgentPage } from "./pages/AgentPage";
import { CallPage } from "./pages/CallPage";
import { ContactPage } from "./pages/ContactPage";
import CampaignPage from "./pages/CampaignPage";

const SideBarDiv = styled.div`
  background-color: #0b2227;
`;
const ParentCol = styled(Col)` 
background-color: #051316;
padding-inline:0px;
border-left:2px solid #0F2E35;
overflow-x:hidden;

`
function App() {
  return (
    <div>
      <Router>
        <Container fluid>
          <Row>
            <SideBarDiv
              // sm={2}
              className="col-auto  d-flex flex-column justify-content-between min-vh-100 gap "
            >
              <SideBar />
            </SideBarDiv>
            <ParentCol>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/agent" element={<AgentPage />} />
                <Route path="/call" element={<CallPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/campaign" element={<CampaignPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/knowledge" element={<KnowledgePage />} />
              </Routes>
            </ParentCol>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
