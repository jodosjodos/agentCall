import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomTable from "../CustomTable/Table";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { OutcomeDropdownButton } from "../OutcomeDropDown";
import { DurationDropdownButton } from "../DurationDropdownButton";
import { createColumnHelper } from "@tanstack/react-table";
import { campaignTableTypeData } from "../../data/campaign";
import MaterialDesignSwitch from "../switch";
import { CampaignTableType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./campaign.css";
import DeleteModal from "../modals/DeleteModal";
import DuplicateModal from "../modals/DuplicateModal";

import { ActionContainer, ActionImage } from "../CustomTable/TableComponent";
import CustomButton from "../import/CustomButton";
import ActionPopup from "../popup/ActionPopup";
import ImageRender from "../ImageRender";

const CampaignTableContainer = styled.div`
  flex-grow: 1;
  padding: 24px 26px;
  overflow: hidden;
`;
const CampaignTableHeader = styled(Row)`
  flex-wrap: wrap;Date & Time
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
  color: ${(props) =>
    props.$theme == "light" ? "#384B4F !important" : "#C9D5D8 !important"};
`;
const CustomTableContainer = styled.div`
  height: calc(100vh - 260px) !important;
  overflow: auto;
`;

const columnHelper = createColumnHelper<CampaignTableType>();

const SearchBtnContainer = styled.div`
  width: fit-content;
  height: fit-content !important;
  display: flex;
  gap: 3px;
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
const DatePickerWrapper = styled(DatePicker)<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "#0A2328"} !important;
  color: ${(props) =>
    props.$theme == "light" ? "#0A2328" : "#C9D5D8"} !important;
`;

function CampaignTable() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const columns = [
    columnHelper.display({
      id: "switch",
      header: "Off/On",
      cell: () => <MaterialDesignSwitch />,
    }),
    columnHelper.accessor("campaign", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.type, {
      id: "type",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Type</span>,
    }),
    columnHelper.accessor("budget", {
      header: () => "Budget",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("list", {
      header: () => <span>List</span>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("agents", {
      header: "Agents",
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
        <Row className="gap-1  px-1">
          <ActionContainer $theme={theme}>
            <ActionImage src="/table-paste.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/delete.svg" alt="" />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage src="/table-menu.svg" alt="" />
          </ActionContainer>
        </Row>
      ),
      cell: (props) => (
        <Row className="gap-1  px-2">
          <ActionContainer $theme={theme}>
            <ActionImage
              src="/table-paste.svg"
              alt=""
              onClick={() => {
                setDuplicateModalshow(true);
              }}
            />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage
              src="/delete.svg"
              alt=""
              onClick={() => {
                setDeleteModalshow(true);
              }}
            />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage
              src="/table-menu.svg"
              alt=""
              onClick={() => {
                console.log(props.row.id);
                setActionModalshow(props.row.id);
              }}
            />
            {actionModalshow == props.row.id && (
              <ActionPopup
                setActionModalShow={setActionModalshow}
                rowId={props.row.id}
              ></ActionPopup>
            )}
          </ActionContainer>
        </Row>
      ),
    }),
  ];

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [camPaignList, setCamPaignList] = useState([]);
  const [campaign, setCampaign] = useState("");
  const [outcome, setOutcome] = useState("");
  const [duration, setDuration] = useState("");
  const [deleteModalshow, setDeleteModalshow] = useState(false);
  const [duplicateModalshow, setDuplicateModalshow] = useState(false);
  const [actionModalshow, setActionModalshow] = useState("");

  useEffect(() => {
    console.log(outcome);
    console.log(duration);
    console.log(campaign);
    setCamPaignList([]);
  }, []);

  const handleCampaignSelect = async (val: string) => {
    setCampaign(val);
  };

  const handleOutcomeSelect = async (val: string) => {
    setOutcome(val);
  };

  const handleDurationSelect = async (val: string) => {
    setDuration(val);
  };

  return (
    <CampaignTableContainer className="">
      <CampaignTableHeader>
        <Relative>
          <InputMod theme={theme} type="text" placeholder="searching for?" />
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
          <DateParagraph $theme={theme} className="">
            To
          </DateParagraph>
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
                <ImageRender fileName="/search.svg"/>
              </div>
            }
          ></CustomButton>
        </SearchBtnContainer>
      </CampaignTableHeader>
      <CustomTableContainer className="table_container">
        <CustomTable
          data={campaignTableTypeData}
          columns={columns}
          maxWidth={1430}
          theme={theme}
        ></CustomTable>
      </CustomTableContainer>
      <DeleteModal
        onHide={() => setDeleteModalshow(false)}
        onCancel={() => setDeleteModalshow(false)}
        show={deleteModalshow}
        title="Are you sure you want to delete this campaign?"
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
                To avoid clash please edit the campaign you would like to
                duplicate.
              </p>
            </div>
            <div className="d-flex gap-1 flex-column">
              <p className="mb-2">Campaign</p>
              <InputRow $theme={theme}>
                <Input
                  id="paste"
                  type="text"
                  className=""
                  placeholder="Rename campaign..."
                />
              </InputRow>
            </div>
          </div>
        }
      ></DuplicateModal>
    </CampaignTableContainer>
  );
}

export default CampaignTable;
