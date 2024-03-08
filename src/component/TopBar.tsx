import React, { useState } from "react";
import styled from "styled-components";
import ImportStep1 from "./import/ImportStep1";
import ImportStep2 from "./import/ImportStep2";
import ImportStep3 from "./import/ImportStep3";
import Search from "./Search";
import CenteredModal from "./modals/Modal";
import ImportStep4 from "./import/ImportStep4";
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
  const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    gap: 3px;
  `;
  const CustomRow = styled.div`
    display: flex;
    align-items: start;
    gap: 10px;
    padding-top: 20px;
  `;
  const CheckBox = styled.input`
    width: 40px;
  `;
  const [activeTopBar, setActiveTopBar] = useState(1);
  const [showImportLead, setShowImportLead] = useState(false);
  return (
    <>
      <TopBarContainer>
        {steps.map((item, index) => (
          <div className=" ">
            <StepContainer
              onClick={() =>
                activeTopBar==2.5?setActiveTopBar(3):setActiveTopBar(index + 1)
              }
            >
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
      {activeTopBar == 2.5 && (
        <ImportStep3 setActiveTopBar={setActiveTopBar}></ImportStep3>
      )}
      {activeTopBar == 3 && (
        <ImportStep4 setActiveTopBar={setActiveTopBar}></ImportStep4>
      )}

      <CenteredModal
        show={showImportLead}
        btnText="Done"
        onHide={() => setShowImportLead(false)}
        onContinue={() => {
          setShowImportLead(false);
          setTimeout(() => {}, 2000);
        }}
        children={
          <ModalContainer>
            <Search></Search>
            <CustomRow>
              <CheckBox type="checkbox" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                aliquam quam nesciunt quisquam iusto vel, dolorum quaerat error
                facere itaque fugiat quae, ex voluptates nisi ipsa, omnis eius
                veniam ab.
              </p>
            </CustomRow>
          </ModalContainer>
        }
        title="Select a list to import leads into"
      ></CenteredModal>
    </>
  );
}

export default TopBar;
