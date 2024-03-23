import React, { useState } from "react";
import styled from "styled-components";
import ImportStep1 from "./import/ImportStep1";
import ImportStep2 from "./import/ImportStep2";

import Search from "./Search";
import CenteredModal from "./modals/Modal";
import ImportStep4 from "./import/ImportStep4";


const TopBarContainer = styled.div`
  display: flex;

  justify-content: center;

  gap: 40px;
  @media (max-width: 784px) {
    gap: 3px !important;
  }
  padding: 20px 0;
`;



function TopBar() {
  const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    gap: 3px;
    flex-wrap: wrap;
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
       
      </TopBarContainer>
      {activeTopBar == 1 && (
        <ImportStep1    setActiveTopBar={setActiveTopBar}></ImportStep1>
      )}
      {activeTopBar == 2 && (
        <ImportStep2 setActiveTopBar={setActiveTopBar}></ImportStep2>
      )}
     
      {activeTopBar == 3 && <ImportStep4></ImportStep4>}

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
