import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import CustomButton from "./CustomButton";
import DragAndDrop from "../DragAndDrop";

const UploadContainer = styled.div`
  background-color: rgba(10, 35, 40, 1);
  border-radius: 10px;
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
`;
const ImportStep2Container = styled(Row)`
  padding: 48px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  width: fit-content;
  gap: 20px;
  display: flex;
`;
const ImportStep2SubContainer = styled(Row)`
  width: 100%;
  flex-grow: 1;
  display: flex;

  justify-content: space-between;
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
const InputManuallyButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  color: rgba(0, 183, 223, 1);
  margin-bottom: 20px;
  background-color: rgba(5, 19, 22, 1);
  border: 1px solid rgba(0, 183, 223, 1);
`;
function ImportStep2({ setActiveTopBar }: { setActiveTopBar?: any }) {
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
    <ImportStep2Container>
      <ImportStep2SubContainer>
        <Col></Col>
        <ButtonContainer className="d-flex mb-2 ">
          <DownloadButton>
            <DownloadImage src="/download.svg" alt="Download" />
            <p className="primary-text mb-0">Download example</p>
          </DownloadButton>
          <DownloadButton>
            <DownloadImage src="/down.svg" alt="Download" />
            <p className="primary-text mb-0">Encoding format</p>
          </DownloadButton>
        </ButtonContainer>
      </ImportStep2SubContainer>
      <UploadContainer className="p-2">
        <InputManuallyButton>Input contacts manually</InputManuallyButton>
        <p className="primary-text">Or</p>
        <DragAndDrop color="rgba(5, 19, 22, 1)"></DragAndDrop>
        <div className="justify-content-end mt-2 gap-3 d-flex">
          <div className="d-flex gap-2 align-items-center">
            <input type="checkbox"></input>
            <p className=" mb-0 primary-text">First row is a header</p>
          </div>
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
      </UploadContainer>
    </ImportStep2Container>
  );
}

export default ImportStep2;
