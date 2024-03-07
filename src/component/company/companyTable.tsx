import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomTable from "../CustomTable/Table";
import { Col, Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { createColumnHelper } from "@tanstack/react-table";

import MaterialDesignSwitch from "../switch";
import { CompanyTableData } from "../../data/company";
import CenteredModal from "../modals/Modal";

const CampanyTableContainer = styled.div`
  flex-grow: 1;
  padding: 24px 26px;
  overflow: hidden;
`;
const CampanyTableHeader = styled(Row)`
  flex-wrap: wrap;Date & Time
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
  height: calc(100vh - 260px);
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
const columnHelper = createColumnHelper<CompanyTableType>();

const columns = [
  columnHelper.display({
    id: "switch",
    header: "Off/On",
    cell: () => <MaterialDesignSwitch />,
  }),
  columnHelper.accessor("companyName", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.emailAddress, {
    id: "emailAddress",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Email Address</span>,
  }),
  columnHelper.accessor("phoneNumber", {
    header: () => "Phone Number",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("registeredTime", {
    header: () => <span>Registered Time</span>,
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
        <ActionContainer>
          <ActionImage src="/table-paste.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/delete.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/table-menu.svg" alt="" />
        </ActionContainer>
      </Row>
    ),
    cell: () => (
      <Row className="gap-1  px-2">
        <ActionContainer>
          <ActionImage src="/table-paste.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/delete.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/table-menu.svg" alt="" />
        </ActionContainer>
      </Row>
    ),
  }),
];
const LinkP = styled.button`
  color: #c9d5d8;
  background-color: #0a2328;
  height: fit-content;
  padding: 5px 8px;
  border-radius: 18px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const UnderLineSpan = styled.span`
  text-decoration: none;
  font-weight: semi-bold;
`;
const InputRow = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #051316;
`;
const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;
function CampanyTable() {
  const [showCreateCompany, setShowCreateCompany] = useState(false);
  useEffect(() => {
    console.log(showCreateCompany);
  }, [showCreateCompany]);
  return (
    <>
      <CampanyTableContainer className="">
        <div className="d-flex flex-lg-row flex-column items-center justify-content-between">
          <Col>
            <Title>Campanys</Title>
            <Paragraph>Here are the calls currently running</Paragraph>
          </Col>
          <LinkP
            onClick={() => setShowCreateCompany(true)}
            className="text-lg-end text-center py-2 mb-lg-0 mb-2"
          >
            + <UnderLineSpan>Add a new company</UnderLineSpan>
          </LinkP>
        </div>

        <CampanyTableHeader>
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
        </CampanyTableHeader>
        <CustomTableContainer className="table_container">
          <CustomTable
            data={CompanyTableData}
            columns={columns}
            maxWidth={1430}
          ></CustomTable>
        </CustomTableContainer>
      </CampanyTableContainer>
      {showCreateCompany && (<CenteredModal
          title="Create a new Company"
          btnText="save"
          children={
            <InputRow>
              <Input
                id="paste"
                type="text"
                className=""
                placeholder="Start typing ..."
              />
              <img src="/record.svg" alt="" />
            </InputRow>
          }
        ></CenteredModal>
      )}
    </>
  );
}

export default CampanyTable;
