import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { DropdownButton } from "../DropDown";
import { OutcomeDropdownButton } from "../OutcomeDropDown";
import { DurationDropdownButton } from "../DurationDropdownButton";
import { createColumnHelper } from "@tanstack/react-table";
import CustomTable from "../CustomTable/Table";
import { defaultData } from "../../data/call";
import { RecordingTableType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./call.css";
import { ActionContainer, ActionImage } from "../CustomTable/TableComponent";
import DeleteModal from "../modals/DeleteModal";
import CustomButton from "../import/CustomButton";
import { useNavigate } from "react-router-dom";
import ButtonPopup from "../popup/ButtonPopup";
import ImageRender from "../ImageRender";

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

const Paragraph = styled.div`
  color: #394b4f;
  padding-bottom: 20px;
`;

const DatePickerWrapper = styled(DatePicker)<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "#0A2328"} !important;
  color: ${(props) =>
    props.$theme == "light" ? "#0A2328" : "#C9D5D8"} !important;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 13px;
  width: fit-content;
  flex-wrap: wrap;
`;
const SearchBtnContainer = styled.div`
  width: fit-content;
  height: fit-content !important;
  display: flex;
  gap: 3px;
`;
const DateParagraph = styled.p<{ $theme?: string }>`
  margin: 0px;
  color: ${(props) =>
    props.$theme == "light" ? "#384B4F !important" : "#C9D5D8 !important"};
`;
const CustomTableContainer = styled.div`
  height: calc(100vh - 340px) !important;
  overflow: auto;
`;

const columnHelper = createColumnHelper<RecordingTableType>();

function RecordingTable() {
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const columns = [
    columnHelper.accessor("contact", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.number, {
      id: "lastName",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Number</span>,
    }),
    columnHelper.accessor("campaign", {
      header: () => "Campaign",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("call", {
      header: () => <span>Call</span>,
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
      header: "Actions",
      cell: (props) => (
        <Row
          style={{
            display: "flex",
            margin: "0 2px",
            width: "100%",
            gap: "4px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActionContainer $theme={theme}>
            <ActionImage
              onClick={() => navigate("/playcall")}
              src="/resume.svg"
              alt=""
            />
          </ActionContainer>
          <ActionContainer $theme={theme}>
            <ActionImage
              src="/delete.svg"
              alt=""
              onClick={() => setDeleteModalshow(true)}
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
              <ButtonPopup
                setActionModalShow={setActionModalshow}
                rowId={props.row.id}
              ></ButtonPopup>
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
    <RecordingTableContainer className="">
      <Paragraph>Here are the calls currently running</Paragraph>

      <RecordingTableHeader>
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
              $theme={theme}
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              dropdownMode="select"
              calendarStartDay={1}
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
                <ImageRender
                  color={theme == "light" ? "#DCDCDC" : "#101010"}
                  fileName="/search.svg"
                />
              </div>
            }
          ></CustomButton>
        </SearchBtnContainer>
      </RecordingTableHeader>

      <CustomTableContainer className="table_container">
        <CustomTable
          data={defaultData}
          theme={theme}
          columns={columns}
        ></CustomTable>
      </CustomTableContainer>
      <DeleteModal
        onHide={() => setDeleteModalshow(false)}
        onCancel={() => setDeleteModalshow(false)}
        show={deleteModalshow}
        title="Are you sure you want to delete this call?"
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
    </RecordingTableContainer>
  );
}

export default RecordingTable;
