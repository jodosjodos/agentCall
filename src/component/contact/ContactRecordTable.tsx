import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { CustomContactTable } from "./CustomContactTable/ContactTable";

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
  height: calc(100vh - 340px);
  overflow: auto;
`;

const LinkP = styled.div`
  color: #C9D5D8;
  background-color:#0A2328;
  padding: 5px 8px ;
  border-radius:18px;
  &:hover {
    cursor: pointer;
  }
`;
const UnderLineSpan = styled.span`
  text-decoration: none;
  font-weight: semi-bold;
`;
export function ContactRecordTable() {
  return (
    <RecordingTableContainer className="">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div>
          <Title>Contacts</Title>
          <Paragraph>Here are the current contacts</Paragraph>
        </div>
        <LinkP className="text-end ">
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
  );
}