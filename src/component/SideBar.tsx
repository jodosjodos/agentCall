import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #96adb3;
`;
const StyledMenu = styled("img")`
  color: #96adb3;
  width: 40px;
  height: 40px;
  padding: 5px 0;
  cursor: pointer;
`;
export function SideBar() {
  const [isSidebarOpened, setIsSidebarOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(false);
  useEffect(() => {}, [window.innerWidth]);
  return (
    <div className="mt-2 ">
      <ul className={`nav fixed  flex-column `} id="parentM">
        <li
          className={`${
            window.innerWidth > 993 &&
            !isSidebarOpened &&
            "align-items-start     justify-content-center"
          }  d-flex `}
        >
          <StyledMenu
            src="/menu.svg"
            onClick={() =>
              window.innerWidth > 993
                ? setIsSidebarOpen(!isSidebarOpened)
                : setActiveMobile(!activeMobile)
            }
          ></StyledMenu>
        </li>
        <li className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}>
          <StyledLink
            to="/"
            className={`nav-link ${activeMobile ? "mobile_active" : ""}`}
            id="link"
            aria-current="page"
          >
            <img src="/HomeIcon.png" alt="" />
            {(isSidebarOpened || activeMobile) && (
              <span className="ms-2 d-md-none d-lg-inline-block ">Home</span>
            )}
          </StyledLink>
        </li>
        <li className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}>
          <StyledLink
            to="/call"
            className={`nav-link ${activeMobile ? "mobile_active" : ""}`}
            id="link"
            aria-current="page"
          >
            <img src="/callIcon.png" alt="" />
            {(isSidebarOpened || activeMobile) && (
              <span className="ms-2 d-md-none d-lg-inline-block ">Agent</span>
            )}
          </StyledLink>
        </li>

        <li className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}>
          <StyledLink
            to="/call"
            className={`nav-link ${
              activeMobile && window.innerWidth <= 993 ? "mobile_active" : ""
            }`}
            id="link"
            aria-current="page"
          >
            <img src="/callIcon.png" alt="" />
            {(isSidebarOpened || activeMobile) && (
              <span className="ms-2 d-md-none d-lg-inline-block ">Calls</span>
            )}
          </StyledLink>
        </li>
        <li className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}>
          <StyledLink
            to="/contact"
            className={`nav-link ${activeMobile ? "mobile_active" : ""}`}
            id="link"
            aria-current="page"
          >
            <img src="/contactIcon.png" alt="" />
            {(isSidebarOpened || activeMobile) && (
              <span className="ms-2 d-md-none d-lg-inline-block ">
                Contacts
              </span>
            )}
          </StyledLink>
        </li>
        <li className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}>
          <StyledLink
            to="/campaign"
            className={`nav-link ${activeMobile ? "mobile_active" : ""}`}
            id="link"
            aria-current="page"
          >
            <img src="/campaignIcon.png" alt="" />
            {(isSidebarOpened || activeMobile) && (
              <span className="ms-2 d-md-none d-lg-inline-block ">
                Compaigns
              </span>
            )}
          </StyledLink>
        </li>
        <li className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}>
          <StyledLink
            to="/company"
            className={`nav-link ${activeMobile ? "mobile_active" : ""}`}
            id="link"
            aria-current="page"
          >
            <img src="/companyIcon.png" alt="" />

            {(isSidebarOpened || activeMobile) && (
              <span className="ms-2 d-md-none d-lg-inline-block ">
                Companies
              </span>
            )}
          </StyledLink>
        </li>
        <li className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}>
          <StyledLink
            to="/knowledge"
            className={`nav-link ${activeMobile ? "mobile_active" : ""}`}
            id="link"
            aria-current="page"
          >
            <img src="/companyIcon.png" alt="" />
            {(isSidebarOpened || activeMobile) && (
              <span className="ms-2 d-md-none d-lg-inline-block ">
                Knowledge
              </span>
            )}
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
