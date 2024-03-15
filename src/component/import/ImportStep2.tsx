import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import { FormCheck, Row } from "react-bootstrap";
import styled from "styled-components";

import CustomButton from "./CustomButton";
import DragAndDrop from "../DragAndDrop";
import CustomTable from "../CustomTable/Table";
import { contactEditType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ImportStep2Container = styled(Row)`
  padding: 48px 40px;
  margin: 0;

  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ImportStep2SubContainer = styled(Row)`
  margin: 0px;
  width: 100%;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  width: fit-content;
  gap: 20px;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
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
  &:hover {
    cursor: pointer;
  }
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
function ImportStep2({ setActiveTopBar }: { setActiveTopBar?: any }) {
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
  const [showEditTable, setShowEditTable] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ImportStep2Container>
      <ImportStep2SubContainer>
        <ButtonContainer className="d-flex mb-2 ">
          <DownloadButton>
            <DownloadImage src="/download.svg" alt="Download" />
            <p className="primary-text mb-0">Download email</p>
          </DownloadButton>
          <DownloadButton>
            <DownloadImage src="/down.svg" alt="Download" />
            <p className="primary-text mb-0">Encoding format</p>
          </DownloadButton>
        </ButtonContainer>
      </ImportStep2SubContainer>
      {showEditTable && (
        <TableContainer>
          <CustomTable
            theme={theme}
            columns={columns}
            data={sampleData}
            hidePagination={true}
          ></CustomTable>
        </TableContainer>
      )}
      <UploadContainer className="p-2">
        <InputManuallyButton onClick={() => setShowEditTable(true)}>
          Input contacts manually
        </InputManuallyButton>
        <p className="primary-text">Or</p>
        <DragAndDrop color="rgba(5, 19, 22, 1)"></DragAndDrop>
        <div className="justify-content-end mt-2 gap-3 flex-wrap d-flex">
          <div className="d-flex  gap-2 align-items-center">
            <FormCheck></FormCheck>
            {/* <input type="checkbox"></input> */}
            <p className=" mb-0 primary-text">First row is a header</p>
          </div>
          <CustomButton
            onclick={() => setActiveTopBar(2.3)}
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
