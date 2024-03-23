import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { Col, FormCheck, Row } from "react-bootstrap";
import styled from "styled-components";

import CustomButton from "./CustomButton";
import DragAndDrop from "../DragAndDrop";
import CustomTable from "../CustomTable/Table";
import { contactEditType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const UploadContainer = styled.div<{ $theme?: string }>`
  width:500px;

  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "rgba(10, 35, 40, 1)"};
  border-radius: 10px;
`;
const ImportStep2Container = styled(Row)`
  padding: 0 40px;
  margin: 0;

  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
const ParagraphTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  flex-grow: 1;
`;
const InputManuallyButton = styled.button<{ $theme?: string }>`
  padding: 10px;
  border-radius: 10px;
  color: #C9D5D8;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.$theme == "light" ? "" : "rgba(5, 19, 22, 1)"};
  border:none;
`;

function ImportStep2({ setActiveTopBar }: { setActiveTopBar?: any }) {
  const columnHelper = createColumnHelper<contactEditType>();

  const columns = [
    
    
    columnHelper.accessor("firstName", {
      header: () => "FirstName",
      cell: () => <Input placeholder="RAAM"></Input>,
    }),
    columnHelper.accessor("lastName", {
      header: () => "LastName",
      cell: () => <Input placeholder="Roon"></Input>,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "Example",
      cell: () => <Input placeholder="email@email.com"></Input>,
      header: () => <span>Example</span>,
    }),
    columnHelper.accessor("phone", {
      cell: () => <Input placeholder="+135792468"></Input>,
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

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ImportStep2Container>
         
        <Col className="titles mx-0 px-0">
          <ParagraphTitle>Check if all columns match</ParagraphTitle>
          <p className="primary-text">
          Check if all the columns match.
          </p>
      </Col>
      

        
      
      
      
        <TableContainer>
          <CustomTable
            theme={theme}
            columns={columns}
            data={sampleData}
            hidePagination={true}
          ></CustomTable>
        </TableContainer>
    
      <UploadContainer $theme={theme} className="p-2">
        <InputManuallyButton
          $theme={theme}
          
        >
          Input contacts manually
        </InputManuallyButton>
        <p className="primary-text">Or</p>
        
        <DragAndDrop
          color={theme == "light" ? "#E5ECEE" : `rgba(5, 19, 22, 1)`}
        ></DragAndDrop>
        
        
        <div className="justify-content-end mt-2 gap-3 flex-wrap d-flex">
          <div className="d-flex  gap-2 align-items-center">
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
    </ImportStep2Container>
  );
}

export default ImportStep2;
