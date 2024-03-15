import React from "react";
import styled from "styled-components";
import CustomTable from "../CustomTable/Table";
import { Col, Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { createColumnHelper } from "@tanstack/react-table";
import { campaignTableTypeData } from "../../data/campaign";
import MaterialDesignSwitch from "../switch";
import { CampaignTableType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ActionContainer, ActionImage } from "../CustomTable/TableComponent";

const CampaignTableContainer = styled.div`
  flex-grow: 1;
  padding: 24px 26px;
  overflow: hidden;
`;
const CampaignTableHeader = styled(Row)`
  flex-wrap: wrap;Date & Time
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;
`;
const InputMod = styled.input<{ theme: string }>`
  float: right;
  padding: 6px 6px;
  border: none;

  font-size: 17px;
  background-color: ${(props) =>
    props.theme === "light" ? "#C9D5D8" : "#0a2328"};
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
const Title = styled.div<{ theme: string }>`
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  color: ${(props) => (props.theme === "light" ? "" : "#c9d5d8")};
  padding-bottom: 8px;
  text-align: left;
`;
const Paragraph = styled.div`
  color: #394b4f;
  padding-bottom: 20px;
`;
const DateButton = styled.div<{ theme: string }>`
  width: 134.5px;
  flex-grow: 1;
  padding: 4px;
  border-radius: 8px;
  border: 1px;
  background-color: ${(props) =>
    props.theme === "light" ? "#C9D5D8" : "#0f2e35"};
  padding: 9px;
  font-size: 14px;
  display: flex;
  gap: 10px;
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#c9d5d8")};
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
  height: calc(100vh - 260px) !important;
  overflow: auto;
`;

const columnHelper = createColumnHelper<CampaignTableType>();

const LinkP = styled.div`
  color: #c9d5d8;
  background-color: #0a2328;
  height: fit-content;
  padding: 5px 8px;
  border-radius: 18px;
  &:hover {
    cursor: pointer;
  }
`;
const UnderLineSpan = styled.span`
  text-decoration: none;
  font-weight: semi-bold;
`;
function CampaignTable() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const columns = [
    columnHelper.display({
      id: "switch",
      header: "Off/On",
      cell: () => <MaterialDesignSwitch />,
    }),
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
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("agents", {
      header: "Agents",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("dials", {
      header: "Dials",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("pickups", {
      header: "Pickups",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("failed", {
      header: "Failed",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("busy", {
      header: "Busy",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("amountspent", {
      header: "Amount spent",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("outcome", {
      header: "Outcomes",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("costOutcome", {
      header: "Cost / outcome",
      cell: (info) => info.renderValue(),
    }),

    columnHelper.display({
      id: "actions",
      header: () => (
        <Row className="gap-1  px-1">
          <ActionContainer $theme={theme}>
            <ActionImage src="/table-paste.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/delete.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/table-menu.svg" alt="" />
          </ActionContainer>
        </Row>
      ),
      cell: () => (
        <Row className="gap-1  px-2">
          <ActionContainer $theme={theme}>
            <ActionImage src="/table-paste.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/delete.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/table-menu.svg" alt="" />
          </ActionContainer>
        </Row>
      ),
    }),
  ];
  return (
    <CampaignTableContainer className="">
      <div className="d-flex flex-lg-row flex-column items-center justify-content-between">
        <Col>
          <Title theme={theme}>Campaigns</Title>
          <Paragraph>Here are the calls currently running</Paragraph>
        </Col>
        <LinkP className="text-lg-end text-center py-2 mb-lg-0 mb-2">
          + <UnderLineSpan>Add a new campaign</UnderLineSpan>
        </LinkP>
      </div>

      <CampaignTableHeader>
        <Relative>
          <InputMod theme={theme} type="text" placeholder="search" />
          <ImgMod src="/searchIcons.png" />
        </Relative>
        <DropdownButton name="Compaign"></DropdownButton>
        <DropdownButton name="Outcome"></DropdownButton>
        <DropdownButton name="Call duration"></DropdownButton>
        <DateContainer>
          <DateButton theme={theme}>
            Date & Time
            <img src="/date.svg" alt="" />
          </DateButton>
          <DateParagraph className="">To</DateParagraph>
          <DateButton theme={theme}>
            Date & Time
            <img src="/date.svg" alt="" />
          </DateButton>
        </DateContainer>
      </CampaignTableHeader>
      <CustomTableContainer className="table_container">
        <CustomTable
          data={campaignTableTypeData}
          columns={columns}
          maxWidth={1430}
          theme={theme}
        ></CustomTable>
      </CustomTableContainer>
    </CampaignTableContainer>
  );
}

export default CampaignTable;
