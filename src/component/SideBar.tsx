import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #96adb3;
  border-radius: 20px;
`;
const StyledMenu = styled("img")`
  color: #96adb3;
  width: 40px;
  height: 40px;
  padding: 5px 0;
  cursor: pointer;
`;
const Li = styled.li<{ $isSidebarOpened?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.$isSidebarOpened ? "" : "center")};
  padding-left: ${(props) => (props.$isSidebarOpened ? "20px" : "")};
  @media (max-width: 992px) {
    justify-content: start;
  }
`;
export function SideBar({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: any;
}) {
  const [isSidebarOpened, setIsSidebarOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(false);
  const headers = [
    {
      name: "Home",
      icon: "/HomeIcon.png",
      to: "/",
    },
    {
      name: "Agent",
      icon: "/agentIcon.png",
      to: "/agent",
    },
    {
      name: "Calls",
      icon: "/callIcon.png",
      to: "/call",
    },
    {
      name: "Contacts",
      icon: "/contactIcon.png",
      to: "/contact",
    },
    {
      name: "Campaign",
      icon: "/campaignIcon.png",
      to: "/campaign",
    },
    {
      name: "Companies",
      icon: "/companyIcon.png",
      to: "/company",
    },
    {
      name: "Knowledge",
      icon: "/knowledgeIcon.png",
      to: "/knowledge",
    },
  ];
  useEffect(() => {}, [window.innerWidth]);
  return (
    <div className="mt-2   ">
      <ul className={`nav fixed   flex-column z-3`} id="parentM">
        <Li $isSidebarOpened={window.innerWidth > 992 && isSidebarOpened}>
          <StyledMenu
            src="/menu.svg"
            onClick={() =>
              window.innerWidth > 993
                ? setIsSidebarOpen(!isSidebarOpened)
                : setActiveMobile(!activeMobile)
            }
          ></StyledMenu>
        </Li>
        {headers.map((header) => (
          <li
            className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}
          >
            <StyledLink
              to={header.to}
              onClick={() => setActivePage(header.to)}
              className={`nav-link ${activeMobile ? "mobile_active" : ""}  ${
                activePage == header.to ? "active-link" : ""
              }`}
              id="link"
              aria-current="page"
            >
              <img src={header.icon} alt="" />
              {(isSidebarOpened || activeMobile) && (
                <span className="ms-2  d-lg-inline-block ">{header.name}</span>
              )}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
