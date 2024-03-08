import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import { Col, FormCheck, Row } from "react-bootstrap";
import styled from "styled-components";
import CenteredModal from "../modals/Modal";

import CustomButton from "./CustomButton";
import DragAndDrop from "../DragAndDrop";
import CustomTable from "../CustomTable/Table";

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
const ImportStep3Container = styled(Row)`
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
const ImportStep3SubContainer = styled(Row)`
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
const Input = styled.input`
  background-color: transparent;
  border: none;
  color: rgba(150, 173, 179, 1);
  outline: none;
`;
const InputManuallyButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  color: rgba(0, 183, 223, 1);
  margin-bottom: 20px;
  background-color: rgba(5, 19, 22, 1);
  border: 1px solid rgba(0, 183, 223, 1);
`;
function ImportStep3({ setActiveTopBar }: { setActiveTopBar?: any }) {
  const columnHelper = createColumnHelper<contactEditType>();

  const columns = [
    columnHelper.accessor("phone", {
      cell: () => <Input placeholder="+135792468"></Input>,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "Example",
      cell: () => <Input placeholder="email@email.com"></Input>,
      header: () => <span>Example</span>,
    }),
    columnHelper.accessor("firstName", {
      header: () => "Example",
      cell: () => <Input placeholder="RAAM"></Input>,
    }),
    columnHelper.accessor("lastName", {
      header: () => "LastName",
      cell: () => <Input placeholder="Roon"></Input>,
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
  const sampleData: contactEditType[] = [
    {
      phone: "Phone",
      email: "3093578590",
      firstName: "Long firstName",
      lastName: "Leads phone number",
    },
  ];

  return (
    <>
      <ImportStep3Container>
        <ImportStep3SubContainer>
          <Col></Col>
          <ButtonContainer className="d-flex mb-2 ">
            <DownloadButton>
              <DownloadImage src="/download.svg" alt="Download" />
              <p className="primary-text mb-0">Download email</p>
            </DownloadButton>
            <DownloadButton>
              <DownloadImage src="/down.svg" alt="Download" />
              <p className="primary-text mb-0">ASCII</p>
            </DownloadButton>
          </ButtonContainer>
        </ImportStep3SubContainer>
        {
          <CustomTable
            columns={columns}
            data={sampleData}
            hidePagination={true}
          ></CustomTable>
        }
        <UploadContainer className="p-2">
          <InputManuallyButton onClick={() => {}}>
            Input contacts manually
          </InputManuallyButton>
          <p className="primary-text">Or</p>
          <DragAndDrop color="rgba(5, 19, 22, 1)"></DragAndDrop>
          <div className="justify-content-end mt-2 gap-3 d-flex">
            <div className="d-flex gap-2 align-items-center">
              <FormCheck></FormCheck>
              {/* <input type="checkbox"></input> */}
              <p className=" mb-0 primary-text">First row is a header</p>
            </div>
            <CustomButton
              onclick={() => setActiveTopBar(3)}
              child={
                <div className="d-flex gap-2">
                  Next step
                  <img src="/nextIcon.svg" alt="" />
                </div>
              }
            ></CustomButton>
          </div>
        </UploadContainer>
      </ImportStep3Container>
    </>
  );
}

export default ImportStep3;
