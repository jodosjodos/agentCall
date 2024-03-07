import React from "react";
import styled from "styled-components";
import CustomTable from "../CustomTable/Table";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { createColumnHelper } from "@tanstack/react-table";

const CampaignTableContainer = styled.div`
  flex-grow: 1;
  padding: 24px 26px;
  overflow: hidden;
`;
const CampaignTableHeader = styled(Row)`
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

const ActionContainer = styled.div`
  border-radius: 8px;
  border: 1px;
  display: flex;
  width: fit-content;
  justify-content: center;
  background-color: #0f2e35;
  width: 30px;
  padding: 5px 0;
`;
const ActionImage = styled.img`
  width: 20px;
`;
const columnHelper = createColumnHelper<CampaignTableType>();

const columns = [
  columnHelper.accessor("campaign", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.type, {
    id: "type",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Type</span>,
  }),
  columnHelper.accessor("budget", {
    header: () => "Budget",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("list", {
    header: () => <span>List</span>,
  }),
  columnHelper.accessor("agents", {
    header: "Agents",
  }),
  columnHelper.accessor("dials", {
    header: "Dials",
  }),
  columnHelper.accessor("pickups", {
    header: "Pickups",
  }),
  columnHelper.accessor("failed", {
    header: "Failed",
  }),
  columnHelper.accessor("busy", {
    header: "Pickups",
  }),
  columnHelper.accessor("amountspent", {
    header: "Pickups",
  }),
  columnHelper.accessor("outcome", {
    header: "Outcomes",
  }),

  columnHelper.display({
    id: "actions",
    header: () => (
      <Row className="gap-1  px-1">
        <ActionContainer>
          <ActionImage src="/resume_outline.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/date.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/contactIcon.svg" alt="" />
        </ActionContainer>
      </Row>
    ),
    cell: () => (
      <Row className="gap-1  px-2">
        <ActionContainer>
          <ActionImage src="/resume_outline.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/date.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/contactIcon.svg" alt="" />
        </ActionContainer>
      </Row>
    ),
  }),
];
function CampaignTable() {
  return (
    <CampaignTableContainer className="">
      <Title>Campaigns</Title>
      <Paragraph>Here are the calls currently running</Paragraph>
      <CampaignTableHeader>
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
      </CampaignTableHeader>
      <CustomTableContainer className="table_container">
        <CustomTable columns={columns}></CustomTable>
      </CustomTableContainer>
    </CampaignTableContainer>
  );
}

export default CampaignTable;
