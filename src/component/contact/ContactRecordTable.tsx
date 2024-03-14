import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { CustomContactTable } from "./CustomContactTable/ContactTable";
import CenteredModal from "../modals/Modal";
import Search from "../Search";

const RecordingTableContainer = styled.div`
  flex-grow: 1;
  padding: 24px 26px;
  overflow: hidden;
`;
const RecordingTableHeader = styled(Row)`
  flex-wrap: wrap;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;
`;
const InputMod = styled.input`
  float: right;
  padding: 6px 6px;
  border: none;

  font-size: 17px;
  background-color: #0a2328;
  outline: none;
  border-radius: 8px;
  color: #96adb3;
  @media (max-width: 600px) {
    width: 100%;
  }
  border-radius: 8px;
  color: #96adb3;
`;
const ImgMod = styled.img`
  width: 18px;
  position: absolute;
  right: 20px;
  top: 9px;
`;
const Relative = styled.div`
  position: relative;
  width: fit-content;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  color: #c9d5d8;
  padding-bottom: 8px;
  text-align: left;
`;
const Paragraph = styled.div`
  color: #394b4f;
  padding-bottom: 20px;
`;
const DateButton = styled.div`
  width: 134.5px;
  flex-grow: 1;
  padding: 4px;
  border-radius: 8px;
  border: 1px;
  background-color: #0f2e35;
  padding: 9px;
  font-size: 14px;
  display: flex;
  color: #c9d5d8;
  gap: 10px;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 13px;
  width: fit-content;
  flex-wrap: wrap;
`;
const DateParagraph = styled.p`
  margin: 0px;
`;
const CustomTableContainer = styled.div`
  height: calc(100vh - 340px) !important;
  overflow: auto;
`;

const LinkP = styled.div`
  color: #c9d5d8;
  background-color: #0a2328;
  padding: 5px 8px;
  border-radius: 18px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 445px) {
    margin-bottom: 20px;
    flex-grow: 1;
    align-text: center;
  }
`;
const UnderLineSpan = styled.span`
  text-decoration: none;
  font-weight: semi-bold;
  @media (max-width: 445px) {
    align-text: center;
  }
`;
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
const OverAllContainer = styled.div`
  height: 100lvh;
`;
export function ContactRecordTable({ onContinue }: { onContinue: any }) {
  const [showImportLead, setShowImportLead] = useState(false);

  return (
    <OverAllContainer className="flex-grow-1">
      <RecordingTableContainer className="flex-grow-1">
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
          <div>
            <Title>Contacts</Title>
            <Paragraph>Here are the current contacts</Paragraph>
          </div>
          <LinkP
            className=" text-center "
            onClick={() => setShowImportLead(true)}
          >
            + <UnderLineSpan>Import new Contact</UnderLineSpan>
          </LinkP>
        </div>

        <RecordingTableHeader>
          <Relative>
            <InputMod type="text" placeholder="search" />
            <ImgMod src="/searchIcons.png" />
          </Relative>
          <DropdownButton name="Compaign"></DropdownButton>
          <DropdownButton name="Outcome"></DropdownButton>
          <DropdownButton name="Call duration"></DropdownButton>
          <DateContainer>
            <DateButton>
              Date & Time
              <img src="/date.svg" alt="" />
            </DateButton>
            <DateParagraph className="">To</DateParagraph>
            <DateButton>
              Date & Time
              <img src="/date.svg" alt="" />
            </DateButton>
          </DateContainer>
        </RecordingTableHeader>
        <CustomTableContainer className="table_container">
          <CustomContactTable></CustomContactTable>
        </CustomTableContainer>
      </RecordingTableContainer>

      <CenteredModal
        show={showImportLead}
        btnText="Done"
        onHide={() => setShowImportLead(false)}
        onContinue={() => {
          setShowImportLead(false);
          setTimeout(() => {}, 2000);
          onContinue();
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
    </OverAllContainer>
  );
}
