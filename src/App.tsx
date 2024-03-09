import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { KnowledgePage } from "./pages/KnowledgePage";

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
import PromptEditor from "./component/agents/PromptEditor";
import { useEffect, useState } from "react";
import CompanyPage from "./pages/CompanyPage";


const SideBarDiv = styled.div`
  background-color: #0b2227;
`;
const ParentCol = styled(Col)`
  background-color: #051316;
  padding-inline: 0px;
  border-left: 2px solid #0f2e35;
  overflow-x: hidden;
`;
const AppContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
function App() {
  const [showImport, setShowImport] = useState(false);
  useEffect(() => {}, [showImport]);
  const findActiveLink = () => {
    return window.location.pathname;
  };
  const [activePage, setActivePage] = useState("/");
  useEffect(() => {
    setActivePage(findActiveLink());
  }, [window.location]);
  const [isSidebarOpened, setIsSidebarOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(false);
  return (
    <AppContainer>
      <Router>
        <Container fluid>
          <div className="d-lg-none p-0 m-0 d-block">
            <SideBar
              showImport={showImport}
              activeMobile={activeMobile}
              setIsSidebarOpen={setIsSidebarOpen}
              setActiveMobile={setActiveMobile}
              isSidebarOpened={isSidebarOpened}
              activePage={activePage}
              setActivePage={setActivePage}
            ></SideBar>
          </div>
          <Row>
            <SideBarDiv
              // sm={2}
              className="col-auto d-none d-lg-flex  flex-column justify-content-between min-vh-100 gap "
            >
              <SideBar
                showImport={showImport}
                activeMobile={activeMobile}
                setIsSidebarOpen={setIsSidebarOpen}
                setActiveMobile={setActiveMobile}
                isSidebarOpened={isSidebarOpened}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </SideBarDiv>
            <ParentCol>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/agent" element={<AgentPage />} />
                <Route path="/agent/prompt_editor" element={<PromptEditor />} />
                <Route
                  path="/call"
                  element={<CallPage isSidebarOpened={isSidebarOpened} />}
                />
                <Route path="/contact" element={<ContactPage showImport={showImport} setShowImport={setShowImport} />} />
                <Route path="/campaign" element={<CampaignPage />} />

                <Route path="/company" element={<CompanyPage />} />
                <Route path="/knowledge" element={<KnowledgePage />} />
              </Routes>
            </ParentCol>
          </Row>
        </Container>
      </Router>
    </AppContainer>
  );
}

export default App;
