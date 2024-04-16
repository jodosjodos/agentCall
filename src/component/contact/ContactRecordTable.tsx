import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { OutcomeDropdownButton } from "../OutcomeDropDown";
import { DurationDropdownButton } from "../DurationDropdownButton";
import CenteredModal from "../modals/Modal";
import Search from "../BlueButton";
import CustomTable from "../CustomTable/Table";
import { ContactTableType, ListTableType } from "../../types/types";
import { createColumnHelper } from "@tanstack/react-table";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ActionContainer, ActionImage } from "../CustomTable/TableComponent";
import "../CustomTable/table.css";

import CustomButton from "../import/CustomButton";
import contacts from "../../api/contacts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DeleteModal from "../modals/DeleteModal";
import "./contact.css";
import CustomInput from "../CustomInput";
import ImageRender from "../ImageRender";
import TableImageRender from "../TableImageRender";

const RecordingTableContainer = styled.div`
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
const Title = styled.div<{ selected?: boolean; $theme?: string }>`
  cursor: pointer;
  flex: 1;
  background: ${(props) => (props.selected ? "#224D57" : "transparent")};
  border-radius: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  color: ${(props) => (props.$theme == "light" ? "#0F2E35" : "#c9d5d8")};
  padding: 8px;
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
const DateParagraph = styled.p`
  margin: 0px;
`;
const CustomTableContainer = styled.div`
  flex-grow: 1;
  height: calc(100vh - 340px) !important;
  overflow: auto;
`;

const LinkP = styled.div<{ $theme?: string }>`
  color: #c9d5d8;
  background-color: #0a2328;
  padding: 5px 8px;
  border-radius: 18px;
  display: flex;
  gap: 4px;
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
const InputRow = styled.div<{ $theme?: string }>`
  display: flex;
  padding: 8px 20px;
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

const OverAllContainer = styled.div`
  height: 100lvh;
  width: 100%;
  overflow: scroll;
`;
const SearchBtnContainer = styled.div`
  width: fit-content;
  height: fit-content !important;
  display: flex;
  gap: 3px;
`;
const ActionDiv = styled.div`
  width: 180px;
`;
const Tab = styled.div<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "#0A2328"};
  padding: 4px;
  display: flex;
  gap: 1px;
  border-radius: 4px;
`;
//
const DatePickerWrapper = styled(DatePicker)<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "#0A2328"} !important;
  color: ${(props) =>
    props.$theme == "light" ? "#0A2328" : "#C9D5D8"} !important;
`;
export function ContactRecordTable({ onContinue }: { onContinue: any }) {
  const [activeTab, setActiveTab] = useState(0);
  const [showImportLead, setShowImportLead] = useState(false);
  const [showCreateCompany, setShowCreateCompany] = useState(false);
  const [showCreateList, setShowCreateList] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const [showEditContactModal, setEditShowContactModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState("");

  const [fullname, setFullname] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [camPaignList, setCamPaignList] = useState([]);
  const [campaign, setCampaign] = useState("");
  const [outcome, setOutcome] = useState("");
  const [duration, setDuration] = useState("");
  const [deleteModalshow, setDeleteModalshow] = useState(false);
  const [selectedInput, setSelectedInput] = useState("");

  useEffect(() => {
    console.log(outcome);
    console.log(duration);
    setCamPaignList([]);
  }, []);

  const handleuploadContact = async () => {
    await CreateNewContact({
      contact: fullname,
      Number: contactnumber,
      Campaign: campaign,
      Call_Date_Start: "2023-04-01T14:00:00Z",
      Call_Date_End: "2023-04-01T14:05:00Z",
      Duration: 300,
      Outcome: "Successful",
    });
    await GetAllcontacts();
    setShowCreateCompany(false);
  };

  const GetAllcontacts = async () => {
    const response = await contacts.getAllContacts();
    setTableData(response.data.results);
  };

  const GetSpecificContact = async (id: string) => {
    const response = await contacts.getSpecificContact(id);
    return response;
  };

  const CreateNewContact = async (body: any) => {
    await contacts.createNewContact(body);
  };

  const UpdateContact = async (id: string, body: any) => {
    await contacts.updateContact(id, body);
  };

  const DeleteContact = async (id: string) => {
    await contacts.deleteContact(id);
  };
  const [tableData, setTableData] = useState([]);
  const listData = [
    {
      id: "1",
      listName: "List 1",
      company: "Agentsmith",
      followUp: 5,
      notInterested: 12,
      closed: 43,
      dateCreated: "24-11-23",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      await GetAllcontacts();
    };
    fetchData();
  }, []);

  const contactColumnHelper = createColumnHelper<ContactTableType>();
  const listColumnHelper = createColumnHelper<ListTableType>();

  const handleDeleteContact = async () => {
    await DeleteContact(selectedRow);
    await GetAllcontacts();
    setDeleteModalshow(false);
  };

  const handleupdateContact = async () => {
    await UpdateContact(selectedRow, {
      contact: fullname,
      Number: contactnumber,
      Campaign: campaign,
      Call_Date_Start: "2023-04-01T14:00:00Z",
      Call_Date_End: "2023-04-01T14:05:00Z",
      Duration: 300,
      Outcome: "Successful",
    });
    setEditShowContactModal(false);
    await GetAllcontacts();
  };

  const showEditModal = async (selectedRow: string) => {
    setSelectedRow(selectedRow);
    const data = await GetSpecificContact(selectedRow);
    setContactnumber(data.data.Number);
    setCampaign(data.data.Campaign);
    setEditShowContactModal(true);
  };

  const handleCampaignSelect = async (val: string) => {
    setCampaign(val);
  };

  const handleOutcomeSelect = async (val: string) => {
    setOutcome(val);
  };

  const handleDurationSelect = async (val: string) => {
    setDuration(val);
  };

  const contactColumn = [
    contactColumnHelper.accessor((row) => row.Number, {
      id: "number",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Number</span>,
    }),
    contactColumnHelper.accessor("contact", {
      header: () => "contact",
      cell: (info) => info.renderValue(),
    }),
    contactColumnHelper.accessor("Campaign", {
      header: () => "Campaign",
      cell: (info) => info.renderValue(),
    }),
    contactColumnHelper.accessor("Duration", {
      header: "Duration",
    }),
    contactColumnHelper.accessor("Outcome", {
      header: "Outcome",
    }),
    contactColumnHelper.accessor("Call", {
      header: () => <span>Call</span>,
    }),
    contactColumnHelper.accessor("Call_Date_Start", {
      header: "Call_Date_Start",
    }),
    contactColumnHelper.accessor("Call_Date_End", {
      header: "Call_Date_End",
    }),

    contactColumnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <ActionDiv>
          <Row className="gap-1 d-flex  px-2">
            <ActionContainer $theme={theme}>
              <ActionImage
                
                onClick={() => {
                  if (typeof row.original?.id !== "undefined") {
                    showEditModal(row.original.id.toString());
                  } else {
                    console.error("ID is undefined");
                  }
                }}
              >
                <TableImageRender light="/edit2-light.svg" dark="/edit2.svg"/>
              </ActionImage>
            </ActionContainer>
            <ActionContainer $theme={theme}>
              <ActionImage >
              <TableImageRender light="/date-light.svg" dark="/date.svg"/>
              </ActionImage>
            </ActionContainer>
            <ActionContainer $theme={theme}>
              <ActionImage
                
                onClick={() => {
                  if (typeof row.original?.id !== "undefined") {
                    setSelectedRow(row.original.id.toString());
                    setDeleteModalshow(true);
                  } else {
                    console.error("ID is undefined");
                  }
                }}
              >
                <TableImageRender light="/delete-light.svg" dark="/delete.svg"/>
              </ActionImage>
            </ActionContainer>
          </Row>
        </ActionDiv>
      ),
    }),
  ];
  const listColumn = [
    listColumnHelper.accessor("listName", {
      header: () => "Lists name",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    listColumnHelper.accessor("company", {
      header: () => "Company",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    listColumnHelper.accessor("followUp", {
      header: () => "Follow up",
      cell: (info) => <span> {info.getValue()}</span>,
    }),
    listColumnHelper.accessor("notInterested", {
      header: () => "Not Interested",
      cell: (info) => <span> {info.getValue()}</span>,
    }),
    listColumnHelper.accessor("closed", {
      header: () => "Closed ",
      cell: (info) => <span> {info.getValue()}</span>,
    }),
    listColumnHelper.accessor("dateCreated", {
      header: () => "Date created",
      cell: (info) => <span> {info.getValue()}</span>,
    }),
    listColumnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <ActionDiv>
          <Row className="gap-1 justify-content-end px-3 d-flex  ">
            <ActionContainer className="" $theme={theme}>
              <ActionImage
               
                onClick={() => {
                  if (typeof row.original?.id !== "undefined") {
                    showEditModal(row.original.id.toString());
                  } else {
                    console.error("ID is undefined");
                  }
                }}
              >
               <TableImageRender light="/edit2-light.svg" dark="/edit2.svg"/>
              </ActionImage>
            </ActionContainer>
            <ActionContainer $theme={theme}>
              <ActionImage >
              <TableImageRender light="/export-light.svg" dark="/export.svg"/>
              </ActionImage>
            </ActionContainer>
            <ActionContainer $theme={theme}>
              <ActionImage
                
                onClick={() => {
                  if (typeof row.original?.id !== "undefined") {
                    setSelectedRow(row.original.id.toString());
                    setDeleteModalshow(true);
                  } else {
                    console.error("ID is undefined");
                  }
                }}
              >
                <TableImageRender light="/delete-light.svg" dark="/delete.svg"/>
              </ActionImage>
            </ActionContainer>
          </Row>
        </ActionDiv>
      ),
    }),
  ];
  const EditOrCreateMOdal = (props: {
    show: boolean;
    setShow: (arg0: boolean) => any;
    onContinue: () => any;
    modalTitle?: string;
  }) => {
    return (
      <CenteredModal
        onHide={() => props.setShow(false)}
        onContinue={onContinue}
        show={props.show}
        title={props.modalTitle ? props.modalTitle : "Add a new contact"}
        btnText="save"
        children={
          <div className="d-flex flex-column gap-3">
            <div className="d-flex  gap-0 flex-column">
              <p className="mb-0">Full Name</p>
              <InputRow className="" $theme={theme}>
                <Input
                  id="paste"
                  type="text"
                  className=""
                  placeholder="Input agent name..."
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
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
                  value={contactnumber}
                  onChange={(event) => setContactnumber(event.target.value)}
                />
              </InputRow>
            </div>
            <div className="d-flex gap-0 flex-column">
              <p className="mb-0">Campaign</p>
              <InputRow className="p-0" $theme={theme}>
                <DropdownButton
                  color={["#E5ECEE", "#051316"]}
                  options={[""]}
                  onSelect={handleCampaignSelect}
                  placeholder="Campaign"
                ></DropdownButton>
              </InputRow>
            </div>
            <div className="d-flex  gap-0 flex-column">
              <p className="mb-0">Company</p>
              <InputRow className="p-0" $theme={theme}>
                <DropdownButton
                  color={["#E5ECEE", "#051316"]}
                  options={[""]}
                  onSelect={handleCampaignSelect}
                  placeholder="Company"
                ></DropdownButton>
              </InputRow>
            </div>
            <div className="d-flex gap-0 flex-column">
              <p className="mb-0">List</p>
              <InputRow className="p-0" $theme={theme}>
                <DropdownButton
                  color={["#E5ECEE", "#051316"]}
                  options={[""]}
                  onSelect={handleCampaignSelect}
                  placeholder="List"
                ></DropdownButton>
              </InputRow>
            </div>
          </div>
        }
      ></CenteredModal>
    );
  };

  const AddListModal = (props: {
    show: boolean;
    setShow: (arg0: boolean) => any;
    onContinue: () => any;
    modalTitle?: string;
  }) => {
    return (
      <CenteredModal
        onHide={() => props.setShow(false)}
        onContinue={onContinue}
        show={props.show}
        title={props.modalTitle ? props.modalTitle : "Add a new List"}
        btnText="save"
        children={
          <div className="d-flex flex-column gap-3">
            <div className="d-flex  gap-0 flex-column">
              <p className="mb-0">List name</p>
              <InputRow className="" $theme={theme}>
                <Input
                  id="paste"
                  type="text"
                  className=""
                  placeholder="Input list name..."
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                />
              </InputRow>
            </div>
            <div className="d-flex  gap-0 flex-column">
              <p className="mb-0">Company affiliated</p>
              <InputRow className="" $theme={theme}>
                <Input
                  id="paste"
                  type="text"
                  className=""
                  placeholder=""
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                />
              </InputRow>
            </div>
          </div>
        }
      ></CenteredModal>
    );
  };
  return (
    <OverAllContainer className="">
      <RecordingTableContainer className="">
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
          <div>
            <Tab $theme={theme}>
              <Title
                $theme={theme}
                selected={activeTab == 0}
                onClick={() => setActiveTab(0)}
              >
                Contacts
              </Title>
              <Title
                $theme={theme}
                selected={activeTab == 1}
                onClick={() => setActiveTab(1)}
              >
                List
              </Title>
            </Tab>
            <Paragraph>Here are the current contacts</Paragraph>
          </div>
          <div className="d-flex gap-2">
            <LinkP
              $theme={theme}
              className=" text-center "
              onClick={() => {
                activeTab == 0
                  ? setShowCreateCompany(true)
                  : setShowCreateList(true);
              }}
            >
              +{" "}
              <UnderLineSpan>
                {activeTab == 0 ? "Add a new contact" : "Add a new List"}
              </UnderLineSpan>
            </LinkP>
            <LinkP
              $theme={theme}
              className=" text-center "
              onClick={() => {
                activeTab == 0 ? setShowImportLead(true) : null;
              }}
            >
              <img src="/import.svg" alt="import" />
              <UnderLineSpan>
                {activeTab == 0 ? "Import new Contact" : "Import a new list"}
              </UnderLineSpan>
            </LinkP>
          </div>
        </div>
        {activeTab == 0 && (
          <RecordingTableHeader>
            <Relative>
              <InputMod
                $theme={theme}
                type="text"
                placeholder="Searching for?"
              />
            </Relative>

            <DropdownButton
              options={camPaignList}
              onSelect={handleCampaignSelect}
              placeholder="Campaign"
            ></DropdownButton>
            <OutcomeDropdownButton onSelect={handleOutcomeSelect} />
            <DurationDropdownButton onSelect={handleDurationSelect} />
            <DateContainer>
              <div className="input-with-icon">
                <DatePickerWrapper
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  dropdownMode="select"
                  calendarStartDay={1}
                  $theme={theme}
                />
              </div>
              <DateParagraph className="">To</DateParagraph>
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
            <SearchBtnContainer>
              <CustomButton
                child={
                  <div className="gap-2 align-items-center d-flex">
                    <p className="mb-0">Search</p>{" "}
                    <ImageRender color={theme=="light"?"#DCDCDC":"#101010"} fileName="/search.svg"/>
                  </div>
                }
              ></CustomButton>
            </SearchBtnContainer>
          </RecordingTableHeader>
        )}

        <CustomTableContainer className="table_container">
          <CustomTable
            hideCheckbox={activeTab == 0 ? false : true}
            maxWidth={1600}
            data={activeTab == 0 ? tableData : listData}
            columns={activeTab == 0 ? contactColumn : listColumn}
            theme={theme}
          ></CustomTable>
        </CustomTableContainer>
      </RecordingTableContainer>
      <DeleteModal
        onHide={() => setDeleteModalshow(false)}
        onCancel={() => setDeleteModalshow(false)}
        onContinue={() => handleDeleteContact()}
        show={deleteModalshow}
        title="Are you sure you want to delete this contact?"
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
      ></DeleteModal>
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
            <Search />
            <div className="mt-2">
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex  flex-column">
                    <p className="">
                      By checking this box i confirm that all the contacts i am
                      importing have given me express written consent to contact
                      them with artificial and pre-recorded voice calls. I also
                      agree to comply with all relevant TCPA, TSR and regulatory
                      laws/guidelines concerning my communication with these
                      contacts.
                    </p>
                  </div>
                }
                name="type"
                type="checkbox"
                label="Sales"
                value="Sales"
                active={""}
              />
            </div>
          </ModalContainer>
        }
        title="Select a list to import leads into"
      ></CenteredModal>
      {showEditContactModal && (
        <EditOrCreateMOdal
          show={showEditContactModal}
          setShow={setEditShowContactModal}
          onContinue={() => handleupdateContact()}
        ></EditOrCreateMOdal>
      )}
      {showCreateCompany && (
        <EditOrCreateMOdal
          show={showCreateCompany}
          setShow={setShowCreateCompany}
          onContinue={() => handleuploadContact()}
        ></EditOrCreateMOdal>
      )}
      {showCreateList && (
        <AddListModal
          show={showCreateList}
          setShow={setShowCreateList}
          onContinue={() => handleuploadContact()}
        ></AddListModal>
      )}
    </OverAllContainer>
  );
}
