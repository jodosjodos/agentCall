import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { createColumnHelper } from "@tanstack/react-table";
import CustomTable from "../CustomTable/Table";
import { defaultData } from "../../data/call";
import { RecordingTableType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ActionContainer, ActionImage } from "../CustomTable/TableComponent";

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
  height: calc(100vh - 340px) !important;
  overflow: auto;
`;

const columnHelper = createColumnHelper<RecordingTableType>();

function RecordingTable() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const columns = [
    columnHelper.accessor("contact", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.number, {
      id: "lastName",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Number</span>,
    }),
    columnHelper.accessor("campaign", {
      header: () => "Campaign",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("call", {
      header: () => <span>Call</span>,
    }),
    columnHelper.accessor("Date", {
      header: "Date",
    }),
    columnHelper.accessor("duration", {
      header: "Duration",
    }),
    columnHelper.accessor("outcome", {
      header: "Outcome",
    }),

    columnHelper.display({
      id: "actions",
      header: () => (
        <Row className="gap-1  px-1">
          <ActionContainer $theme={theme}>
            <ActionImage src="/resume_outline.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/date.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/contactIcon.svg" alt="" />
          </ActionContainer>
        </Row>
      ),
      cell: () => (
        <Row className="gap-1  px-2">
          <ActionContainer $theme={theme}>
            <ActionImage src="/resume_outline.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/date.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/contactIcon.svg" alt="" />
          </ActionContainer>
        </Row>
      ),
    }),
  ];
  return (
    <RecordingTableContainer className="">
      <Title theme={theme}>Recordings</Title>
      <Paragraph>Here are the calls currently running</Paragraph>
      <RecordingTableHeader>
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
        <Relative>
          <InputMod theme={theme} type="text" placeholder="search" />
          <ImgMod src="/searchIcons.png" />
        </Relative>
      </RecordingTableHeader>
      <CustomTableContainer className="table_container">
        <CustomTable
          data={defaultData}
          theme={theme}
          columns={columns}
        ></CustomTable>
      </CustomTableContainer>
    </RecordingTableContainer>
  );
}

export default RecordingTable;
