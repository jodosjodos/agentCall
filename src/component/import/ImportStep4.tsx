import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import { Col, FormCheck, Row } from "react-bootstrap";
import styled from "styled-components";
import CenteredModal from "../modals/Modal";

import CustomButton from "./CustomButton";
import DragAndDrop from "../DragAndDrop";
import CustomTable from "../CustomTable/Table";
import { useNavigate } from "react-router-dom";

const UploadContainer = styled.div`
  background-color: rgba(10, 35, 40, 1);
  border-radius: 10px;
`;

const ImportStep4Container = styled(Row)`
  padding: 48px;
  margin: 0px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;
const ButtonContainer = styled.div`
  width: fit-content;

  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  @ media(max-width:600px){
    width:100%;
  }
`;
const ImportStep4SubContainer = styled(Row)`
  width: 100%;
  flex-grow: 1;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
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
const CheckedContainer = styled.div`
  background-color: rgba(38, 246, 96, 0.15);
  padding: 4px 10px;
  border-radius: 10px;
  color: rgba(16, 122, 71, 1);
  display: flex;
  height: 36px;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
    align-items: center;
  }
`;
function ImportStep4() {
  const navigate = useNavigate();
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
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ImportStep4Container>
        <ImportStep4SubContainer>
          <Col>
            <div className="d-flex gap-2 mb-2">
              <FormCheck></FormCheck>
              <p className="mb-0 primary-text">Only show rows with error</p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <FormCheck></FormCheck>
              <p className="mb-0 primary-text">Only show rows with error</p>
            </div>
          </Col>
          <ButtonContainer className="d-flex mb-2 ">
            <CheckedContainer className="gap-2">
              <img src="/green-checked.svg" alt="" />
              <p className="mb-0">All required columns have been matched</p>
            </CheckedContainer>
            <CheckedContainer className="gap-2">
              <img src="/green-checked.svg" alt="" />
              <p className="mb-0">All required row have been matched</p>
            </CheckedContainer>
          </ButtonContainer>
        </ImportStep4SubContainer>
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
            <CustomButton
              onclick={() => setShowModal(true)}
              child={
                <div className="d-flex gap-2">
                  Next step
                  <img src="/nextIcon.svg" alt="" />
                </div>
              }
            ></CustomButton>
          </div>
        </UploadContainer>
      </ImportStep4Container>
      <CenteredModal
        show={showModal}
        btnText="Upload"
        onHide={() => setShowModal(false)}
        onContinue={() => {
          setShowModal(false);
          setTimeout(() => {}, 2000);
          navigate("/contact");
        }}
        children={
          <div>
            <DragAndDrop></DragAndDrop>
          </div>
        }
        title="Select a list to import leads into"
      ></CenteredModal>
    </>
  );
}

export default ImportStep4;
