import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #96adb3;
`;
const StyledMenu = styled("img")`
  color: #96adb3;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export function SideBar() {
  const [isSidebarOpened, setIsSidebarOpen] = useState(false);
  return (
    <div className="mt-2">
      <ul className="nav  flex-column" id="parentM">
        <li
          className={`${
            !isSidebarOpened
              ? "align-items-center  justify-content-center"
              : "align-items-start px-3 justify-content-start"
          } d-flex  `}
        >
          <StyledMenu
            src="/menu.svg"
            onClick={() => setIsSidebarOpen(!isSidebarOpened)}
          ></StyledMenu>
        </li>
        <li className="nav-item  my-1">
          <StyledLink
            to="/"
            className="nav-link "
            id="link"
            aria-current="page"
          >
            <img src="/HomeIcon.png" alt="" />
            {isSidebarOpened && (
              <span className="ms-2 d-md-none d-lg-inline-block ">Home</span>
            )}
          </StyledLink>
        </li>
        <li className="nav-item  my-1">
          <StyledLink
            to="/call"
            className="nav-link "
            id="link"
            aria-current="page"
          >
            <img src="/callIcon.png" alt="" />

            {isSidebarOpened && (
              <span className="ms-2  d-none d-sm-inline">Agent</span>
            )}
          </StyledLink>
        </li>

        <li className="nav-item  my-1">
          <StyledLink
            to="/call"
            className="nav-link "
            id="link"
            aria-current="page"
          >
            <img src="/callIcon.png" alt="" />
            {isSidebarOpened && (
              <span className="ms-2  d-none d-sm-inline">Calls</span>
            )}{" "}
          </StyledLink>
        </li>
        <li className="nav-item  my-1">
          <StyledLink
            to="/contact"
            className="nav-link "
            id="link"
            aria-current="page"
          >
            <img src="/contactIcon.png" alt="" />
            {isSidebarOpened && (
              <span className="ms-2   d-none d-sm-inline">Contacts</span>
            )}{" "}
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink
            to="/campaign"
            className="nav-link "
            id="link"
            aria-current="page"
          >
            <img src="/campaignIcon.png" alt="" />
            {isSidebarOpened && (
              <span className="ms-2   d-none d-sm-inline">Campaigns</span>
            )}{" "}
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink
            to="/company"
            className="nav-link "
            id="link"
            aria-current="page"
          >
            <img src="/companyIcon.png" alt="" />

            {isSidebarOpened && (
              <span className="ms-2   d-none d-sm-inline">Companies</span>
            )}
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink
            to="/knowledge"
            className="nav-link "
            id="link"
            aria-current="page"
          >
            <img src="/companyIcon.png" alt="" />
            {isSidebarOpened && (
              <span className="ms-2   d-none d-sm-inline">Knowledge</span>
            )}{" "}
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
