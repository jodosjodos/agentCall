import React from "react";
import styled from "styled-components";
import CustomTable from "../CustomTable/Table";
import { Col, Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";

const RecordingTableContainer = styled.div`
  flex-grow: 1;
  padding: 24px 26px;
`;
const RecordingTableHeader = styled(Row)`
  flex-wrap: wrap;
  display: flex;
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

  padding: 4px;
  border-radius: 8px;
  border: 1px;
  background-color: #0f2e35;
  padding: 9px;
  font-size: 14px;
  display: flex;
  color: #c9d5d8;
  gap: 4px;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 13px;
  width: fit-content;
`;
const DateParagraph = styled.p`
  margin: 0px;
`;
const PaginationButton = styled.button`
  padding: 8px;
  background-color: #0a2328;
  border: none;
  min-width: 40px;

  border-radius: 12px;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9d5d8;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
function RecordingTable() {
  return (
    <RecordingTableContainer className="">
      <Title>Recordings</Title>
      <Paragraph>Here are the calls currently running</Paragraph>
      <RecordingTableHeader>
        <DropdownButton name="Compaign"></DropdownButton>
        <DropdownButton name="Outcome"></DropdownButton>
        <DropdownButton name="Call duration"></DropdownButton>
        <DateContainer>
          <DateButton>Date & Time</DateButton>
          <DateParagraph className="">To</DateParagraph>
          <DateButton>Date & Time</DateButton>
        </DateContainer>
        <Relative>
          <InputMod type="text" placeholder="search" />
          <ImgMod src="/searchIcons.png" />
        </Relative>
      </RecordingTableHeader>
      <CustomTable></CustomTable>
      <PaginationContainer>
        <PaginationButton>
          <img src="/prev.svg" alt="" />
          Previous
        </PaginationButton>
        <PaginationButton>
          <p className="m-0 text-center">1</p>
        </PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>...</PaginationButton>
        <PaginationButton>8</PaginationButton>
        <PaginationButton>9</PaginationButton>
        <PaginationButton>10</PaginationButton>
        <PaginationButton>
          Next
          <img src="/next.svg" alt="" />
        </PaginationButton>
      </PaginationContainer>
    </RecordingTableContainer>
  );
}

export default RecordingTable;
