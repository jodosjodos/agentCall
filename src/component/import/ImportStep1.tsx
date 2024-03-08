import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import CustomTable from "../CustomTable/Table";
import CustomButton from "./CustomButton";
const ParagraphTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  flex-grow: 1;
`;
const DownloadButton = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  background-color: rgba(10, 35, 40, 1);
  border: none;

  align-items: center;

  padding: 8px;
  border-radius: 16px;
  gap: 2px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
const ImportStep1Container = styled(Row)`
  padding: 48px 40px;
  margin: 0;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ImportStep1SubContainer = styled(Row)`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    min-width: 100%;

    justify-content: center;
    align-items: center;
  }
`;
const DownloadImage = styled.img`
  width: 30px;
`;
const ActionContainer = styled.button`
  border-radius: 8px;

  border: 1px;
  display: flex;
  width: fit-content;
  justify-content: center;
  background-color: #0f2e35;
  width: 30px;
  padding: 5px 0;
  &:active {
    background-color: #17454f;
  }
  &:hover {
    background-color: #17454f;
  }
`;
const ActionImage = styled.img`
  width: 20px;
`;
const CustomRow = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: end;
`;
const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
  padding: 0;
  margin: 0px;
`;
function ImportStep1({ setActiveTopBar }: { setActiveTopBar?: any }) {
  const columnHelper = createColumnHelper<contactType>();

  const columns = [
    columnHelper.accessor("columnName", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.example, {
      id: "Example",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Example</span>,
    }),
    columnHelper.accessor("list", {
      header: () => "Example",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("description", {
      header: () => "Description",
      cell: (info) => info.renderValue(),
    }),

    columnHelper.display({
      id: "actions",
      header: () => (
        <CustomRow className="gap-1  px-1">
          <ActionContainer>
            <ActionImage src="/resume_outline.svg" alt="" />
          </ActionContainer>
          <ActionContainer>
            <ActionImage src="/date.svg" alt="" />
          </ActionContainer>
          <ActionContainer>
            <ActionImage src="/contactIcon.svg" alt="" />
          </ActionContainer>
        </CustomRow>
      ),
      cell: () => (
        <CustomRow className="gap-1 justify-content-end   px-2">
          <ActionContainer>
            <ActionImage src="/resume_outline.svg" alt="" />
          </ActionContainer>
          <ActionContainer>
            <ActionImage src="/date.svg" alt="" />
          </ActionContainer>
          <ActionContainer>
            <ActionImage src="/contactIcon.svg" alt="" />
          </ActionContainer>
        </CustomRow>
      ),
    }),
  ];
  const sampleData: contactType[] = [
    {
      columnName: "Phone",
      example: "3093578590",
      list: "Long list",
      description: "Leads phone number",
    },
    {
      columnName: "Email",
      example: "email@email.com",
      list: "Long list",
      description: "Leads email",
    },
    {
      columnName: "first_name",
      example: "John",
      list: "Long list",
      description: "Leads First name",
    },
    {
      columnName: "last_name",
      example: "Doe",
      list: "Long list",
      description: "Leads Last name",
    },
  ];
  return (
    <ImportStep1Container>
      <ImportStep1SubContainer>
        <Col className="titles mx-0 px-0">
          <ParagraphTitle>Get ready to import contacts</ParagraphTitle>
          <p className="primary-text">
            The following columns are supported, some may be required, The rest
            are optional
          </p>
        </Col>

        <DownloadButton>
          <DownloadImage src="/download.svg" alt="Download" />
          <p className="primary-text mb-0">Download example</p>
        </DownloadButton>
      </ImportStep1SubContainer>
      <TableContainer>
        <CustomTable
          hidePagination={true}
          columns={columns}
          data={sampleData}
          maxWidth={600}
        ></CustomTable>
        <div className="justify-content-end d-flex">
          <CustomButton
            onclick={() => setActiveTopBar(2)}
            child={
              <div className="d-flex gap-2">
                Next step
                <img src="/nextIcon.svg" alt="" />
              </div>
            }
          ></CustomButton>
        </div>
      </TableContainer>
    </ImportStep1Container>
  );
}

export default ImportStep1;
