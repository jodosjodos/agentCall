import styled from "styled-components";
import { DropdownHome } from "../DropDownHome";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


import Calendar from "../Calendar";
import { useState } from "react";

const ParentButton = styled.div<{theme:string}>`
  background-color:${(props)=>props.theme === "light"?"#C9D5D8":"#0b2227"} ;
  height: fit-content;
  width: fit-content;
  max-width: fit-content;
  flex-wrap: wrap;
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    max-width: 100%;
  }

  padding: 0.5rem;
`;

const NotificationIcon = styled.img<{theme:string}>`
  background-color: ${(props) => (props.theme ==="light"? "#C9D5D8" : "#0f2e35")} ;
  height: fit-content;
  border-radius: 10px;
  padding: 10px;
`;
const ControllerContainer = styled.div<{ $selected?: boolean }>`
  display: ${(props) => (props.$selected ? "none" : "block")};

  @media (max-width: 992px) {
    width: calc(100vw - 30px);
    padding: 0px;
  }
  @media (max-width: 500px) {
    align-items: start;
  }
  align-items: center;
  @media (min-width: 1500px) {
    flex-direction: row !important;
  }
`;
export function HomeController() {
  const [selectedDate,setSelectedDate]=useState(new Date().getDate())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());


  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <ControllerContainer
      $selected
      className="d-flex  gap-2 flex-row  py-4 px-2"
    >
      <ParentButton theme={theme} className="d-flex flex-grow-1   gap-2">
        <DropdownHome action={<Calendar setCurrentMonth={setCurrentMonth} selectedDate={selectedDate}  setSelectedDate={setSelectedDate}  currentYear={currentYear} setCurrentYear={setCurrentYear} currentMonth={currentMonth}    />} name="Filter by Date" />
        <DropdownHome action={<Calendar setCurrentMonth={setCurrentMonth} selectedDate={selectedDate}  setSelectedDate={setSelectedDate}  currentYear={currentYear} setCurrentYear={setCurrentYear} currentMonth={currentMonth}   isMonthSelector />} name="Filer by month" />
      
      </ParentButton>
      <NotificationIcon theme={theme} src="/notification.svg" />
    </ControllerContainer>
  );
}
