import React from 'react';
import styled from 'styled-components';

import { Dropdown } from 'react-bootstrap';
import { months } from '../data/date';

const CalendarContainer = styled.div`
  width: 456px;
 
  padding: 24px;
  gap: 56px;
  border-radius: 12px 0px 0px 0px;
`;

const DateParagraph = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 25.5px;
  text-align: center;
  color: #96adb3;
`;

const DayParagraph = styled.p<{ isSelected?: boolean }>`
width40px;
display:flex;
align-items:center;
justify-content:center;
aspect-ratio:1;
background-color:${props => props.isSelected ? "#0F2E35" : "0"};
border-radius:${props => props.isSelected ? "50%" : "0"};
font-size: 20px;
font-weight: 500;
text-align: center;
color: #96adb3;
`;
const DateButton = styled(Dropdown.Item) <{ color?: string, textColor?: string }>`
width: 196px;
height: 40px;
border:none;
display:flex;
align-items:center;
justify-content:center;
gap: 4px;
border-radius: 24px;
color:${(props) => props.textColor};
background-color:${(props) => props.color}
`
const Th = styled.th`
background-color:transparent;
`
function Calendar({ isMonthSelector, selectedDate, setSelectedDate, currentYear, setCurrentYear, currentMonth, setCurrentMonth }: { isMonthSelector?: boolean, onApplyFilter?: () => any, selectedDate: number, setSelectedDate: any, currentYear: number, setCurrentYear: any, currentMonth: number, setCurrentMonth: any }) {





    function getCurrentMonth() {
        return months[currentMonth];
    }

    function getCurrentYear() {
        return currentYear;
    }

    function generateDays() {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const days = [];

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push('');
        }

        // Add days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    }

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Split days into weeks (rows)
    const weeks = [];
    const days = generateDays();
    while (days.length > 0) {
        weeks.push(days.splice(0, 7));
    }

    return (
        <CalendarContainer>
            <div className="d-flex flex-1 justify-content-between">
                <DateParagraph>
                    {getCurrentMonth()} {getCurrentYear()}
                </DateParagraph>
                <div className="d-flex gap-2">
                    <img src="/chevron_back.svg" alt="Previous" onClick={() =>
                        currentMonth !== 0
                            ? setCurrentMonth(currentMonth - 1)
                            : (setCurrentMonth(11), setCurrentYear(currentYear - 1))
                    } />
                    <img src="/chevron_next.svg" alt="Next" onClick={() =>
                        currentMonth !== 11
                            ? setCurrentMonth(currentMonth + 1)
                            : (setCurrentMonth(0), setCurrentYear(currentYear + 1))
                    } />
                </div>
            </div>
            {!isMonthSelector && <table>
                <thead>
                    <tr>
                        {dayNames.map((dayName, index) => (
                            <Th key={index}>
                                <DayParagraph>{dayName}</DayParagraph>
                            </Th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, rowIndex) => (
                        <tr key={rowIndex}>
                            {week.map((day, colIndex) => (
                                <td key={`${rowIndex}-${colIndex}`}>
                                    {day !== '' && <DayParagraph onClick={() => setSelectedDate(day)} isSelected={selectedDate == day ? true : false}>{day}</DayParagraph>}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>}

            <div className='d-flex gap-2'>

                <DateButton textColor='#0A2328' color='#96ADB3' onClick={() => {
                    setSelectedDate(new Date().getDate())
                    // alert(new Date().getDate() + "/" + (currentMonth + 1) + "/" + currentYear)
                }}
                >
                    Clear filter
                </DateButton>
                <DateButton textColor='#96ADB3' color='#0F2E35' onClick={() => {
                    // alert(selectedDate + "/" + (currentMonth + 1) + "/" + currentYear)
                }}>
                    Apply filter
                </DateButton>
            </div>

        </CalendarContainer>
    );
}

export default Calendar;
