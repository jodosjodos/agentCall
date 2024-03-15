import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggleTheme } from "../store/themeSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Switch from "react-switch";

const StyledLink = styled(Link)<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "#051316" : "#96adb3")};
  border-radius: 20px;
  font-weight: bold;
`;
const StyledMenu = styled("img")`
  color: #96adb3;
  width: 40px;
  height: 40px;
  padding: 5px 0;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
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
const BackImage = styled.img<{ $isVisible?: boolean }>`
position:absolute;

display:${(props) => (props.$isVisible ? "block" : "none")}
top:20px;
right:-50px;
width:20px;
&:hover{
  cursor:pointer;
}
@media (max-width: 992px){
  display:none !important;
}



`;
export function SideBar({
  activePage,
  isSidebarOpened,
  activeMobile,
  setActiveMobile,
  setIsSidebarOpen,
  setActivePage,

  setShowImport,
}: {
  activePage: string;
  setActivePage: any;
  activeMobile: boolean;
  setActiveMobile: any;
  setIsSidebarOpen: any;
  isSidebarOpened: boolean;
  showImport: boolean;
  setShowImport: any;
}) {
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
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className="mt-2   position-relative">
      <div>
        <Switch
          checked={theme == "dark"}
          onChange={() => handleTheme()}
          onColor="#000"
          onHandleColor="#2693e6"
          offColor="#C9D5D8"
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={30}
          width={60}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "orange",
                paddingRight: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.535 3.519a1 1 0 0 0-1.061-1.403C5.675 2.852 2 6.996 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10a10.4 10.4 0 0 0-.004-.28a1 1 0 0 0-1.571-.793a6 6 0 0 1-8.89-7.409"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#ffac33"
                  d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2z"
                />
                <circle cx="18" cy="18" r="10" fill="#ffac33" />
              </svg>
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#ffac33"
                  d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2z"
                />
                <circle cx="18" cy="18" r="10" fill="#ffac33" />
              </svg>
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "white",
                fontSize: 18,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.535 3.519a1 1 0 0 0-1.061-1.403C5.675 2.852 2 6.996 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10a10.4 10.4 0 0 0-.004-.28a1 1 0 0 0-1.571-.793a6 6 0 0 1-8.89-7.409"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          }
        ></Switch>
      </div>
      {isSidebarOpened && (
        <BackImage
          src="/back.svg"
          onClick={() => setIsSidebarOpen(false)}
          $isVisible={isSidebarOpened}
        ></BackImage>
      )}
      <ul className={`nav fixed   flex-column z-3`} id="parentM">
        <Li onClick={() => setActiveMobile(!activeMobile)}>
          <StyledMenu src="/menu.svg"></StyledMenu>
        </Li>
        {headers.map((header) => (
          <li
            className={`nav-item ${activeMobile ? "mobile_active" : ""}  my-1`}
          >
            <StyledLink
              theme={theme}
              to={header.to}
              onClick={() => {
                setActivePage(header.to);
                window.location.pathname == "/contact" && setShowImport(false);
              }}
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
