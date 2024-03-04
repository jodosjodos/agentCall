import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #96ADB3;
`;
export function SideBar() {
  return (
    <div className="mt-2">
      <ul className="nav nav-pills flex-column" id="parentM">
        <li className="nav-item  my-1">
          <StyledLink
            to="/"
            className="nav-link "
            aria-current="page"
          >
            <img src="/HomeIcon.png" alt="" />
            <span className="ms-2 d-md-none d-lg-inline-block ">Home</span>
          </StyledLink>
        </li>
        <li className="nav-item  my-1">
          <StyledLink to="/agent" className="nav-link">
            <img src="/agentIcon.png" alt="" className="" />

            <span className="ms-2  d-none d-sm-inline">Agents</span>
          </StyledLink>
        </li>
        <li className="nav-item  my-1">
          <StyledLink to="/call" className="nav-link ">
            <img src="/callIcon.png" alt="" />

            <span className="ms-2  d-none d-sm-inline">Calls</span>
          </StyledLink>
        </li>
        <li className="nav-item  my-1">
          <StyledLink
            to="/contact"
            className="nav-link "
            aria-current="page"
          >
            <img src="/contactIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Contacts</span>
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink
            to="/campaign"
            className="nav-link "
            aria-current="page"
          >
            <img src="/campaignIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Campaigns</span>
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink
            to="/company"
            className="nav-link "
            aria-current="page"
          >
            <img src="/companyIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Companies</span>
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink
            to="/knowledge"
            className="nav-link "
            aria-current="page"
          >
            <img src="/knowledgeIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Knowledge</span>
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
