import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import CustomButton from "./CustomButton";
import DragAndDrop from "../DragAndDrop";
import CustomTable from "../CustomTable/Table";
import { contactEditType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const UploadContainer = styled.div<{ $theme?: string }>`
  
  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "rgba(10, 35, 40, 1)"};
  border-radius: 10px;
  min-width:352px;
`;
const DownloadButton = styled.button<{$theme?:string}>`
  width: fit-content;
  max-width:fit-content;
  height: fit-content;
  display: flex;
  background-color: rgba(10, 35, 40, 1);
  border: none;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  gap: 2px;
  p{
    color:white;
  }
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
  padding-bottom:48px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
height:fit-content;
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
const TableContainer = styled.div<{$issidebarOpened?:boolean}>`

width:${props=>props.$issidebarOpened?"calc(100vw - 1005px) !important":"calc(100vw - 530px) !important"};
overflow:auto;
@media(max-width:1300px){
  width:calc(100vw - 200px) !important;
}
@media(max-width:1000px){
 
  width:calc(100vw - 80px) !important;
}
  
`;

const DownloadImage = styled.img`
  width: 20px;
`;


const InputContainer = styled.div<{$theme?:string}>`
display:flex;
background: ${props=>props.$theme=="light"?"linear-gradient(180deg, #C9D5D8 0%, #96ADB3  77.4%)":"linear-gradient(180deg, #0B2227 0%, #09181B 77.4%)"} ;
border: 1px solid #0F2E35
color: #96ADB3;
margin-right:10px;
border-radius:10px;
padding:8px;
gap:10px;


`;
const Input = styled.input`
flex-grow:1;
background-color:transparent;
font-size: 16px;
font-weight: 500;
line-height: 20.4px;
color: #96ADB3;
border:none;
outline:none;



`
const MoveButton = styled.div<{ $theme?: string }>`
  display: flex;
  align-items: center;
  padding: 3px 8px;
  color: white;
  &:hover {
    cursor: pointer;
  }

  border-radius: 20px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#224D57" : "rgba(10, 35, 40, 1)"};
`;
const SubContainer=styled.div`

height:fit-content !important;
width:100%;
min-width:fit-content;
overflow:auto;
`
const EditButton = styled.div<{ $theme?: string }>`
  display: flex;
  justify-content:center;
  align-items: center;
  width:30px;
  
  &:hover {
    cursor: pointer;
  }

  border-radius: 8px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#224D57" : "rgba(10, 35, 40, 1)"};
`;


const InputManuallyButton = styled.button<{ $theme?: string }>`
  padding: 10px;
  border-radius: 10px;
  color: rgba(0, 183, 223, 1);
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.$theme == "light" ? "" : "rgba(5, 19, 22, 1)"};
  border: 1px solid rgba(0, 183, 223, 1);
`;
const ParagraphTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  flex-grow: 1;
  color: #C9D5D8;

`;
const Container=styled.div`
@media(max-width:1300px){
  flex-direction:column;
}
`

function ImportStep2({ setActiveTopBar,isSidebarOpened }: { setActiveTopBar?: any,isSidebarOpened:boolean }) {
  const columnHelper = createColumnHelper<contactEditType>();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [editRow, setEditRow] = useState<{ firstName: boolean, lastName: boolean, email: boolean, phoneNumber: boolean }>({ firstName: true, lastName: true, email: true, phoneNumber: true });


  const columns = [


    columnHelper.accessor("firstName", {
      header: () => "First name",

      cell: () => <InputContainer $theme={theme}><Input placeholder="John" disabled={editRow.firstName}></Input>
        <EditButton $theme={theme} onClick={() => {
          setEditRow(prevState => ({
            ...prevState,
            firstName: false
          }));
        }}>
          <img src="/edit.svg" width={18} ></img>
        </EditButton>
        <MoveButton
          $theme={theme}
          onClick={() => {

          }}
          className="gap-2"
        >
          <p className="mb-0 ">Move </p>
          <img src="/move.svg"></img>
        </MoveButton>
      </InputContainer>,
    }),
    columnHelper.accessor("lastName", {
      header: () => "Last name",
      cell: () => <InputContainer $theme={theme} ><Input disabled={editRow.lastName} placeholder="Jonah"></Input>
        <EditButton $theme={theme} onClick={() => {
          setEditRow(prevState => ({
            ...prevState,
            lastName: false
          }));
        }}>
          <img src="/edit.svg" width={18} ></img>
        </EditButton>
        <MoveButton
          $theme={theme}
          onClick={() => {

          }}
          className="gap-2"
        >
          <p className="mb-0 ">Move </p>
          <img src="/move.svg"></img>
        </MoveButton>


      </InputContainer>,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      cell: () => <InputContainer $theme={theme} ><Input disabled={editRow.email} placeholder="John@mail..."></Input>
        <EditButton $theme={theme} onClick={() => {
          setEditRow(prevState => ({
            ...prevState,
            email: false
          }));
        }}>
          <img src="/edit.svg" width={18} ></img>
        </EditButton>
        <MoveButton
          $theme={theme}
          onClick={() => {

          }}
          className="gap-2"
        >
          <p className="mb-0 ">Move </p>
          <img src="/move.svg"></img>
        </MoveButton> </InputContainer>,
      header: () => <span>Example</span>,
    }),
    columnHelper.accessor("phone", {
      cell: () => <InputContainer $theme={theme}><Input disabled={editRow.phoneNumber} placeholder="+4499654..."></Input>
        <EditButton $theme={theme} onClick={() => {
          setEditRow(prevState => ({
            ...prevState,
            phoneNumber: false
          }));
        }}>
          <img src="/edit.svg" width={18} ></img>
        </EditButton>
        <MoveButton
          $theme={theme}
          onClick={() => {

          }}
          className="gap-2"
        >
          <p className="mb-0 ">Move </p>
          <img src="/move.svg"></img>
        </MoveButton> </InputContainer>,
    }),



  ];
  const sampleData: contactEditType[] = [
    {
      phone: "Phone",
      email: "3093578590",
      firstName: "Long firstName",
      lastName: "Leads phone number",
    },
    {
      phone: "Phone",
      email: "3093578590",
      firstName: "Long firstName",
      lastName: "Leads phone number",
    },
    {
      phone: "Phone",
      email: "3093578590",
      firstName: "Long firstName",
      lastName: "Leads phone number",
    },
    {
      phone: "Phone",
      email: "3093578590",
      firstName: "Long firstName",
      lastName: "Leads phone number",
    },
  ];

  const bg= theme  === "light" ? "#C9D5D8" : "#0A2328";
  return (
    <ImportStep2Container>
      <ImportStep2SubContainer>
        <div className="d-flex flex-column flex-md-row" >
        <Col className="titles mx-0 px-0">
          <ParagraphTitle>Check if all columns match</ParagraphTitle>
          <p className="primary-text">
          Check if all the columns match.
          </p>
        </Col>
        <ButtonContainer className="d-flex mb-2 ">
          <DownloadButton>
            <DownloadImage src="/down.svg" alt="Download" />
            <p className=" mb-0">Add to List</p>
          </DownloadButton>
          <CustomButton   
          onclick={() => setActiveTopBar(4)}
            child={
              <div className="d-flex gap-2">
                Finish importing
                <img src="/nextIcon.svg" alt="" />
              </div>
            } ></CustomButton>
        </ButtonContainer>
        </div>
      </ImportStep2SubContainer>
      <Container className="d-flex  w-full gap-3">
        <TableContainer $issidebarOpened={isSidebarOpened}>
           <SubContainer className="table">
           <CustomTable
            hideCheckbox={true}
            headerColor={"#051316"}
            backgroundColor={bg}
            radius={"20px"}
            hidePagination={true}
            columns={columns}
            data={sampleData}
            maxWidth={400}
            theme={theme}
          ></CustomTable>
           </SubContainer>
        
        </TableContainer>

        <UploadContainer $theme={theme}  className="p-2">
          <InputManuallyButton $theme={theme} onClick={() => { }}>
            Input contacts manually
          </InputManuallyButton>
          <p className="primary-text">Or</p>
          <DragAndDrop
            color={theme == "light" ? "#E5ECEE" : `rgba(5, 19, 22, 1)`}
          ></DragAndDrop>
        
        </UploadContainer>
      </Container>

    </ImportStep2Container>
  );
}

export default ImportStep2;
