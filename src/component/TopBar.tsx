import React, { useState } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import ImportStep1 from "./import/ImportStep1";
import ImportStep2 from "./import/ImportStep2";
const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 40px;
  padding: 20px 0;
`;
const Circle = styled.div<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(34, 77, 87, 1);
  min-width: 40px;
  height: 40px;
  max-width: 40px;
  margin-right: 20px;
  border: 1px solid rgba(34, 77, 87, 1);
  border-radius: 50%;
  cursor: pointer;

  background-color: ${(props) =>
    props.$isActive ? "rgba(34, 77, 87, 1)" : "transparent"};
`;
const Divider = styled.div`
  height: 2px;
  margin-top: 30px;
  width: 100px;
  background-color: rgba(34, 77, 87, 1);
  flex-grow: 1;
`;
const StepContainer = styled.div`
  display: flex;

  gap: 2;
  justify-content: start;
`;
const TopParagraph = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StepParagraph = styled.p``;
function TopBar() {
  const steps = [
    "Getting started",
    "Upload file",
    "Match column",
    "Import data",
  ];
  const [activeTopBar, setActiveTopBar] = useState(1);
  return (
    <>
      <TopBarContainer>
        {steps.map((item, index) => (
          <div className=" ">
            <StepContainer onClick={() => setActiveTopBar(index + 1)}>
              <Column>
                <Circle $isActive={activeTopBar == index + 1}>
                  {activeTopBar == index + 1 ? (
                    <img src="/check.svg"></img>
                  ) : (
                    index + 1
                  )}
                </Circle>
                <StepParagraph>{item}</StepParagraph>
              </Column>

              {index != steps.length - 1 && <Divider></Divider>}
            </StepContainer>
          </div>
        ))}
      </TopBarContainer>
      {activeTopBar == 1 && (
        <ImportStep1 setActiveTopBar={setActiveTopBar}></ImportStep1>
      )}
      {activeTopBar == 2 && (
        <ImportStep2 setActiveTopBar={setActiveTopBar}></ImportStep2>
      )}
    </>
  );
}

export default TopBar;
