import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import CenteredModal from "../modals/Modal";
import Search from "../Search";
import CustomTable from "../CustomTable/Table";
import { ContactTableType } from "../../types/types";
import { createColumnHelper } from "@tanstack/react-table";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { defaultContactData } from "../../data/contactCall";
import { ActionContainer, ActionImage } from "../CustomTable/TableComponent";
import '../CustomTable/table.css'
import Switch from "../switch"
import CustomButton from "../import/CustomButton";
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
const InputMod = styled.input<{ $theme?: string }>`
  float: right;
  padding: 6px 6px;
  border: none;

  font-size: 17px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#E5ECEE" : "#0a2328"};
  outline: none;
  outline: none;
  border-radius: 8px;
  color: #96adb3;
  @media (max-width: 600px) {
    width: 100%;
  }
  border-radius: 8px;
  color: #96adb3;
`;


const Relative = styled.div`
  position: relative;
  width: fit-content;
  @media (max-width: 600px) {
    width: 100%;
  }
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
const DateButton = styled.div<{ $theme?: string }>`
  width: 134.5px;
  flex-grow: 1;
  padding: 4px;
  border-radius: 8px;
  border: 1px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#E5ECEE" : "#0a2328"};
  outline: none;
  padding: 9px;
  font-size: 14px;
  display: flex;
  color: ${(props) =>
    props.$theme == "light" ? "#0a2328" : "#c9d5d8"};
  
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
  flex-grow:1;
  height: calc(100vh - 340px) !important;
  overflow: auto;
`;

const LinkP = styled.div<{ $theme?: string }>`
  color: #c9d5d8;
  background-color: #0a2328;
  padding: 5px 8px;
  border-radius: 18px;
  display:flex;
  gap:4px;
  &:hover {
    cursor: pointer;  
  }
  @media (max-width: 445px) {
    margin-bottom: 20px;
    flex-grow: 1;
    align-text: center;
  }
`;
const UnderLineSpan = styled.span`
  text-decoration: none;
  font-weight: semi-bold;
  @media (max-width: 445px) {
    align-text: center;
  }
`;
const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  gap: 3px;
`;
const CustomRow = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  padding-top: 20px;
`;
const InputRow = styled.div<{ $theme?: string }>`
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.$theme == "light" ? "#FEFEFE" : "#051316"};
`;
const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const CheckBox = styled.input`
  width:80px !important;
  height:50px;
`;
const OverAllContainer = styled.div`
  height: 100lvh;
  width:100%;
`;
const SearchBtnContainer=styled.div`
width:fit-content;
height:fit-content !important;
display:flex;
gap:3px;

`
const ActionDiv = styled.div`
width:180px;
`

export function ContactRecordTable({ onContinue }: { onContinue: any }) {
  const [showImportLead, setShowImportLead] = useState(false);
  const [showCreateCompany, setShowCreateCompany] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  

  const [tableData,setTableData]=useState(defaultContactData)
  const columnHelper = createColumnHelper<ContactTableType>();
  useEffect(() => {
    console.log("item removed")
  }, [tableData])
  
  const handleDelete = (indexToRemove:number) => {
    const updatedTableData = tableData.filter((_, index) => index !== indexToRemove);
    setTableData(updatedTableData);
  };
  const columns = [
    
    columnHelper.accessor("fullName", {
      cell: (info) => info.getValue(),
      header:"Full name"
    }),
    columnHelper.accessor((row) => row.number, {
      id: "number",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Number</span>,
    }),
    columnHelper.accessor("campaign", {
      header: () => "Campaign",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("country", {
      header: () => <span>Country</span>,
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
      header:"Actions",
      cell: (props) => (
        <ActionDiv>
  <Row className="gap-1 d-flex  px-2">
          
          <div style={{
            width:"fit-content"
          }}>
          <Switch></Switch>
             </div>
           
          <ActionContainer $theme={theme}>
            <ActionImage src="/resume_outline.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/date.svg" alt="" />
          </ActionContainer>
          <ActionContainer onClick={() =>handleDelete(props.row.index)} $theme={theme}>
            <ActionImage src="/delete.svg" alt="" />
          </ActionContainer>
        </Row>
        </ActionDiv>
      
      ),
    }),
  ];

  return (
    <OverAllContainer className="flex-grow-1">
      <RecordingTableContainer className="flex-grow-1">
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
          <div>
            <Title>Contacts</Title>
            <Paragraph>Here are the current contacts</Paragraph>
          </div>
          <div className="d-flex gap-2">
          <LinkP
            $theme={theme}
            className=" text-center "
            onClick={() => setShowCreateCompany(true)}
          >
            + <UnderLineSpan>Add a new contact</UnderLineSpan>
            </LinkP>
            <LinkP
            $theme={theme}
            className=" text-center "
            onClick={() => setShowImportLead(true)}
          >
            <img src="/import.svg" alt="import"  /><UnderLineSpan>Import new Contact</UnderLineSpan>
          </LinkP>
          </div>
          
        </div>

        <RecordingTableHeader>
          <Relative>
            <InputMod $theme={theme} type="text" placeholder="Searching for?" />
          
          </Relative>
          <DropdownButton name="Compaign"></DropdownButton>
          <DropdownButton name="Outcome"></DropdownButton>
          <DropdownButton name="Call duration"></DropdownButton>
          <DateContainer>
            <DateButton $theme={theme}>
              Date & Time
              <img src="/date.svg" alt="" />
            </DateButton>
            <DateParagraph className="">To</DateParagraph>
            <DateButton $theme={theme}>
              Date & Time
              <img src="/date.svg" alt="" />
            </DateButton>
          </DateContainer>
          <SearchBtnContainer >

          <CustomButton child={<div className="gap-2 align-items-center d-flex"><p className="mb-0">Search</p> <img style={{width:"20px",height:"20px"}} src="/search.svg" alt="" /></div>}></CustomButton>
          </SearchBtnContainer>
        </RecordingTableHeader>
        <CustomTableContainer className="table_container">
          <CustomTable
            maxWidth={1600}
            data={tableData}
            columns={columns}
            theme={theme}
          ></CustomTable>
        </CustomTableContainer>
      </RecordingTableContainer>

      <CenteredModal
        show={showImportLead}
        btnText="Done"
        onHide={() => setShowImportLead(false)}
        onContinue={() => {
          setShowImportLead(false);
          setTimeout(() => {}, 2000);
          onContinue();
        }}
        children={
          <ModalContainer>
            <Search></Search>
            <CustomRow>
              <CheckBox type="checkbox" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                aliquam quam nesciunt quisquam iusto vel, dolorum quaerat error
                facere itaque fugiat quae, ex voluptates nisi ipsa, omnis eius
                veniam ab.
              </p>
            </CustomRow>
          </ModalContainer>
        }
        title="Select a list to import leads into"
      ></CenteredModal>
         {showCreateCompany && (
        <CenteredModal
          onHide={() => setShowCreateCompany(false)}
          onContinue={() => setShowCreateCompany(false)}
          show={showCreateCompany}
          title="Add a new contact"
          btnText="save"
          children={
            <div className="d-flex flex-column gap-1">
              <div className="d-flex gap-0 flex-column">
                <p className="mb-0">Full Name</p>
                <InputRow $theme={theme}>
                  <Input
                    id="paste"
                    type="text"
                    className=""
                    placeholder="Input agent name..."
                  />
                </InputRow>
              </div>
            
              <div className="d-flex gap-0 flex-column">
                <p className="mb-0">Contact number</p>
                <InputRow $theme={theme}>
                  <Input
                    id="paste"
                    type="text"
                    className=""
                    placeholder="e.g +445656565"
                  />
                </InputRow>
              </div>
              <div className="d-flex gap-0 flex-column">
                <p className="mb-0">Campaign</p>
                <InputRow $theme={theme}>
                  <Input
                    id="paste"
                    type="text"
                    className=""
                    placeholder="Campaign"
                  />
                </InputRow>
              </div>
              <div className="d-flex gap-0 flex-column">
                <p className="mb-0">Company</p>
                <InputRow $theme={theme}>
                  <Input
                    id="paste"
                    type="text"
                    className=""
                    placeholder="Company"
                  />
                </InputRow>
              </div>
            </div>
          }
        ></CenteredModal>
      )}
    </OverAllContainer>
  );
}
