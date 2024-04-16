import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomTable from "../CustomTable/Table";
import { Col, Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { OutcomeDropdownButton } from "../OutcomeDropDown";
import { DurationDropdownButton } from "../DurationDropdownButton";
import { createColumnHelper } from "@tanstack/react-table";

import MaterialDesignSwitch from "../switch";
import { CompanyTableData } from "../../data/company";
import CompanyModal from "../modals/CompanyModal";
import { CompanyTableType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './company.css'
import DeleteModal from "../modals/DeleteModal";
import DuplicateModal from "../modals/DuplicateModal";
import ActionModal from "../modals/ActionModal";
import { ActionContainer, ActionImage } from "../CustomTable/TableComponent";
import PhoneModal from "../modals/PhoneModal";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import CustomButton from "../import/CustomButton";

import TableImageRender from "../TableImageRender";

const CompanyTableContainer = styled.div`
  flex-grow: 1;
  padding: 24px 26px;
  overflow: hidden;
`;
const CompanyTableHeader = styled(Row)`
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
const Relative = styled.div`
  position: relative;
  width: fit-content;
`;
const SearchBtnContainer = styled.div`
width:fit-content;
height:fit-content !important;
display:flex;
gap:3px;

`
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


const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 13px;
  width: fit-content;
  flex-wrap: wrap;
`;
const DateParagraph = styled.p<{ $theme?: string }>`
  margin: 0px;
  color: ${props => props.$theme == "light" ? "#384B4F !important" : "#C9D5D8 !important"};
`;
const DatePickerWrapper = styled(DatePicker)<{$theme?:string}>`
  background-color: ${props => props.$theme == "light" ? "#C9D5D8" : "#0A2328"} !important;
  color: ${props => props.$theme == "light" ? "#0A2328" : "#C9D5D8"} !important;
`;
const CustomTableContainer = styled.div`
  height: calc(100vh - 260px) !important;
  overflow: auto;
`;



const columnHelper = createColumnHelper<CompanyTableType>();

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
const InputRow = styled.div<{ $theme?: string }>`
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  margin-bottom:20px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.$theme == "light" ? "#FEFEFE" : "#0f2e35"};
`;

const Input = styled.input<{$theme?:string}>`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.$theme == "light" ?"black":"white"};
`;
function CompanyTable() {
  const [showCreateCompany, setShowCreateCompany] = useState(false);
  useEffect(() => {
    console.log(showCreateCompany);
  }, [showCreateCompany]);
  const theme = useSelector((state: RootState) => state.theme.theme);
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
        <Row className="gap-1  px-2">
          <ActionContainer $theme={theme}>
            <ActionImage >
              <TableImageRender light="/table-paste-light.svg" dark="/table-paste.svg"/>
            </ActionImage>
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage 
              
            >
              <TableImageRender light="/delete-light.svg" dark="/delete.svg"/>
            </ActionImage>
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage 
              
            >
              <TableImageRender light="/table-menu-light.svg" dark="/table-menu.svg"/>
            </ActionImage>
          </ActionContainer>
        </Row>
      ),
      cell: () => (
        <Row className="gap-1  px-2">
          <ActionContainer $theme={theme}>
            <ActionImage 
              onClick={() => {
                setDuplicateModalshow(true)
              }}
            >
             <TableImageRender light="/table-paste-light.svg" dark="/table-paste.svg"/>
            </ActionImage>
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage 
              onClick={() => {
                setDeleteModalshow(true)
              }}
            >
              <TableImageRender light="/delete-light.svg" dark="/delete.svg"/>
            </ActionImage>
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage 
              onClick={() => {
                setActionModalshow(true)
              }}
            >
                <TableImageRender light="/table-menu-light.svg" dark="/table-menu.svg"/>
            </ActionImage>
          </ActionContainer>
        </Row>
      ),
    }),
  ];

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [camPaignList, setCamPaignList] = useState([])
  const [campaign, setCampaign] = useState('')
  const [outcome, setOutcome] = useState('')
  const [duration, setDuration] = useState('')
  const [deleteModalshow, setDeleteModalshow] = useState(false)
  const [phoneModalshow, setPhoneModalshow] = useState(false)
  const [duplicateModalshow, setDuplicateModalshow] = useState(false)
  const [actionModalshow, setActionModalshow] = useState(false)
  const [value, setValue] = useState<string>();

  useEffect(() => {
    console.log(outcome)
    console.log(duration)
    console.log(campaign)
    setCamPaignList([])
  }, [])


  const handleCampaignSelect = async (val: string) => {
    setCampaign(val);
  }

  const handleOutcomeSelect = async (val: string) => {
    setOutcome(val);
  }

  const handleDurationSelect = async (val: string) => {
    setDuration(val);
  }

  return (
    <>
      <CompanyTableContainer className="flex-grow-1">
        <div className="d-flex flex-lg-row flex-column items-center justify-content-between">
          <Col>
            <Title theme={theme}>Company</Title>
            <Paragraph>Here are the calls currently running</Paragraph>
          </Col>
          <LinkP
            onClick={() => setShowCreateCompany(true)}
            className="text-lg-end text-center py-2 mb-lg-0 mb-2"
          >
            + <UnderLineSpan>Add a new company</UnderLineSpan>
          </LinkP>
        </div>

        <CompanyTableHeader>
          <Relative>
            <InputMod theme={theme} type="text" placeholder="searching for?" />

          </Relative>
          <DropdownButton
            options={camPaignList}
            onSelect={handleCampaignSelect}
            placeholder="Company"
          />
          <OutcomeDropdownButton
            onSelect={handleOutcomeSelect}
          />
          <DurationDropdownButton
            onSelect={handleDurationSelect}
          />
          <DateContainer>
            <div className="input-with-icon" >
              <DatePickerWrapper
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dropdownMode="select"
                calendarStartDay={1}
                $theme={theme}
              />
            </div>
            <DateParagraph $theme={theme} >To</DateParagraph>
            <div className="input-with-icon">
              <DatePickerWrapper
              $theme={theme}
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                dropdownMode="select"
                calendarStartDay={1}
              />
            </div>
          </DateContainer>

          <SearchBtnContainer >

            <CustomButton child={<div className="gap-2 align-items-center d-flex"><p className="mb-0">Search</p> <img style={{ width: "20px", height: "20px" }} src="/search.svg" alt="" /></div>}></CustomButton>
          </SearchBtnContainer>
        </CompanyTableHeader>
        <CustomTableContainer className="table_container">
          <CustomTable
            data={CompanyTableData}
            columns={columns}
            maxWidth={1430}
            theme={theme}
          ></CustomTable>
        </CustomTableContainer>
      </CompanyTableContainer>
      {showCreateCompany && (
        <CompanyModal
          onHide={() => setShowCreateCompany(false)}
          onContinue={() => { setShowCreateCompany(false); setPhoneModalshow(true) }}
          show={showCreateCompany}
          title="Create a new Company"
          btnText="save"
          children={
            <div className="d-flex flex-row gap-1 justify-content-between" >
              <div style={{ width: '470px' }}>
                <div className="d-flex gap-1 flex-column">
                  <p className="mb-0">Company Name</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Input agent name..."
                      $theme={theme}
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Contact Name 1</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company email address..."
                      $theme={theme}
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Contact Name 2</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company phone number..."
                      $theme={theme}
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Email address 1</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company email address..."
                      $theme={theme}
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Email address 2</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company email address..."
                      $theme={theme}
                    />
                  </InputRow>
                </div>
              </div>
              <div style={{ width: '470px' }}>
                <div className="d-flex gap-0 flex-column">
                  <div className="d-flex gap-0 flex-row justify-content-between">
                    <p className="mb-0">Phone Number 1</p>
                    <div className="d-flex gap-0 flex-row align-items-center">
                      <p className="mb-0" style={{ marginRight: '10px' }}>Get a paid phone number</p>
                      <MaterialDesignSwitch />
                    </div>
                  </div>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company phone number..."
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <div className="d-flex gap-0 flex-row justify-content-between">
                    <p className="mb-0">Phone Number 2</p>
                    <div className="d-flex gap-0 flex-row align-items-center">
                      <p className="mb-0" style={{ marginRight: '10px' }}>Get a paid phone number</p>
                      <MaterialDesignSwitch />
                    </div>
                  </div>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company phone number..."
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Company DBA</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company phone number..."
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Company Address Line 1</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company phone number..."
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Company Address Line 2</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Company phone number..."
                    />
                  </InputRow>
                </div>
              </div>
              <div style={{ width: '470px' }}>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">City</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Input city name..."
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">State</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Input state name..."
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Country</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Input Country name..."
                    />
                  </InputRow>
                </div>
                <div className="d-flex gap-0 flex-column">
                  <p className="mb-0">Amount spent</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Input Zip code name..."
                    />
                  </InputRow>
                </div>
              </div>
            </div>
          }
        ></CompanyModal>
      )}
      <PhoneModal
        onHide={() => setPhoneModalshow(false)}
        onCancel={() => setPhoneModalshow(false)}
        onContinue={() => setPhoneModalshow(false)}
        show={phoneModalshow}
        title="Create a new Company"
        children={
          <div className="d-flex flex-column gap-1">
            <div className="d-flex gap-0 flex-column">
              <p style={{ fontSize: "30px" }} className="mb-0 text-lg text-red-500">Buy a number from any country of your choice</p>
            </div>
            <div className="d-flex gap-0 flex-column">
              <p style={{ fontSize: "20px" }} className="mb-0">Buy a number from any country of your choice</p>
            </div>
            <div className="d-flex gap-0 flex-row justify-content-between align-items-center">
              <div className="d-flex gap-0 flex-column">
                <div className="d-flex gap-0 flex-column mb-4">
                  <p className="mb-2">Country name</p>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={value}
                    onChange={setValue}
                    countrySelectProps={{
                      style: {
                        display: 'flex',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        alignItems: 'center',
                        marginBottom: '20px',
                        justifyContent: 'space-between',
                        backgroundColor: '#0f2e35',
                        color: 'white'
                      }
                    }}
                    inputProps={{
                      style: {
                        display: 'flex',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        alignItems: 'center',
                        marginBottom: '20px',
                        justifyContent: 'space-between',
                        backgroundColor: 'red'
                      }
                    }}
                  />
                </div>
                <div className="d-flex gap-1 flex-column">
                  <p className="mb-2">Zip code</p>
                  <InputRow $theme={theme}>
                    <Input
                      id="paste"
                      type="text"
                      className=""
                      placeholder="Input zip code..."
                    />
                  </InputRow>
                </div>
              </div>
              <div>
                <img style={{ width: '200px', height: '200px' }} src="./earth.png" />
              </div>
            </div>
          </div>
        }
      />
      <DuplicateModal
        onHide={() => setDuplicateModalshow(false)}
        onCancel={() => setDuplicateModalshow(false)}
        show={duplicateModalshow}
        title="Please rename the duplicate to avoid clash"
        btnText="save"
        children={
          <div className="d-flex flex-column gap-1">
            <div className="d-flex gap-0 flex-column">
              <p className="mb-0 text-center" style={{ color: "#384b4f" }}>
                To avoid clash please edit the company you would like to duplicate.
              </p>
            </div>
            <div className="d-flex gap-1 flex-column">
              <p className="mb-2">Company</p>
              <InputRow $theme={theme}>
                <Input
                  id="paste"
                  type="text"
                  className=""
                  placeholder="Rename company..."
                />
              </InputRow>
            </div>
          </div>
        }
      ></DuplicateModal>
      <ActionModal
        onHide={() => setActionModalshow(false)}
        onCancel={() => setActionModalshow(false)}
        show={actionModalshow}
        title="Please rename the duplicate to avoid clash"
        btnText="save"
        children={
          <div className="d-flex flex-column gap-1">
            <div className="d-flex gap-0 flex-column">
              <p className="mb-3">
                Export
              </p>
            </div>
            <div className="d-flex gap-0 flex-column">
              <p className="mb-3">
                Export statistics
              </p>
            </div>
            <div className="d-flex gap-0 flex-column">
              <p className="mb-3">
                Export Overview
              </p>
            </div>
            <div className="d-flex gap-0 flex-column">
              <p className="mb-3">
                Export Highlights
              </p>
            </div>
            <div className="d-flex gap-0 flex-column">
              <p className="mb-3">
                Export Conversation
              </p>
            </div>
          </div>
        }
      />
      <DeleteModal
        onHide={() => setDeleteModalshow(false)}
        onCancel={() => setDeleteModalshow(false)}

        show={deleteModalshow}
        title="Are you sure you want to delete this company?"
        btnText="save"
        children={
          <div className="d-flex flex-column gap-1">
            <div className="d-flex gap-0 flex-column">
              <p className="mb-0">
                If you delete it will be permanently deleted
              </p>
            </div>
          </div>
        }
      />
    </>
  );
}

export default CompanyTable;