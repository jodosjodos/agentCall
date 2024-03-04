import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #96adb3;
`;

export function SideBar() {
  return (
    <div className="mt-2">
      <ul className="nav nav-pills flex-column" id="parentM">
        <li className="nav-item  my-1">
          <StyledLink to="/" className="nav-link " id="link" aria-current="page">
            <img src="/HomeIcon.png" alt="" />
            <span className="ms-2 d-md-none d-lg-inline-block ">Home</span>
          </StyledLink>
        </li>
        <li className="nav-item  my-1">
          <StyledLink to="/agent" className="nav-link " id="link"  aria-current="page">
            <img src="/agentIcon.png" alt="" />
            <span className="ms-2 d-md-none d-lg-inline-block ">Agent</span>
          </StyledLink>
        </li>

        <li className="nav-item  my-1">
          <StyledLink to="/call" className="nav-link " id="link" aria-current="page" >
            <img src="/callIcon.png" alt="" />

            <span className="ms-2  d-none d-sm-inline">Calls</span>
          </StyledLink>
        </li>
        <li className="nav-item  my-1">
          <StyledLink to="/contact" className="nav-link " id="link" aria-current="page">
            <img src="/contactIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Contacts</span>
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink to="/campaign" className="nav-link " id="link" aria-current="page">
            <img src="/campaignIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Campaigns</span>
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink to="/company" className="nav-link " id="link" aria-current="page">
            <img src="/companyIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Companies</span>
          </StyledLink>
        </li>
        <li className="nav-item my-1">
          <StyledLink to="/knowledge" className="nav-link "  id="link" aria-current="page">
            <img src="/companyIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Knowledge</span>
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
