import React, { useState } from "react";

import styled from "styled-components";
import CenteredModal from "../modals/Modal";
import CustomInput from "../CustomInput";

import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { DropdownHome } from "../DropDownHome";
import Calendar from "../Calendar";

const HMod = styled.h5<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "#051316" : "#c9d5d8")};
  font-weight: bold;
`;
const PMode = styled.p`
  color: #394b4f;
`;
const ModalContainer = styled.div <{ width?: string }>`
width:${prop => prop.width ? prop.width : "700px"};
`
const InputRow = styled.div<{ $theme?: string }>`
  display: flex;
  padding: 10px 20px;
  height:42px !important;
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
const CreateButton = styled.button<{ $theme?: string }>`
  background-color: #00b7df;
  border-radius: 20px;
  background-color: ${(props) =>
    props.$theme === "light" ? "#DCDCDC" : "#101010"};
  min-width: fit-content;
  height: 45px;
  font-size: 14px;
  color: ${(props) => (props.$theme == "light" ? "#DCDCDC" : "white")};
  border: none;
  &:hover {
    background-color: #0f2e35;
    color: #96adb3;
  }
`;
const ParentButton = styled.div<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme === "light" ? "#C9D5D8" : "#0b2227"};

  height: fit-content;
  width: fit-content;
  flex-wrap: wrap;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
  padding: 0.5rem;
`;
const ControllerContainer = styled.div<{ $selected?: boolean }>`
  display: ${(props) => (props.$selected ? "none" : "block")};
  @media (min-width: 1500px) {
    flex-direction: row !important;
  }
`;

export function Controller({ selected, selectedDate, setSelectedDate, currentYear, setCurrentYear, currentMonth, setCurrentMonth }: { selected?: boolean, selectedDate: number, setSelectedDate: any, currentYear: number, setCurrentYear: any, currentMonth: number, setCurrentMonth: any }) {
  console.log(selected);

  const [showCreateAgentModal, setShowCreateAgentModal] = useState(false);
  const [showEditingMethodModal, setshowEditingMethodModal] = useState(false);
  const [showCreatePrompModal, setShowCreatePrompModal] = useState(false);
  const [showGeneratePrompModal, setShowGeneratePrompModal] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [selectedInput, setSelectedInput] = useState("");
  const navigate = useNavigate();
  return (
    <>
      {
        <ControllerContainer
          $selected
          className="d-flex  gap-2 flex-column flex-wrap justify-content-between py-4 px-4 "
        >
          <div className="d-flex flex-column">
            <HMod theme={theme}>Click any agent to select</HMod>
            <PMode>
              any agent selected would be displayed on the right of panel
            </PMode>
          </div>
          <ParentButton $theme={theme} className="d-flex  gap-2">
            <CreateButton
              className=""
              onClick={() => setShowCreateAgentModal(true)}
            >
              Create new agent +
            </CreateButton>
            <DropdownHome action={<Calendar setCurrentMonth={setCurrentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentYear={currentYear} setCurrentYear={setCurrentYear} currentMonth={currentMonth} />} name="Filter by Date" />
            <DropdownHome action={<Calendar setCurrentMonth={setCurrentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentYear={currentYear} setCurrentYear={setCurrentYear} currentMonth={currentMonth} isMonthSelector />} name="Filer by month" />

          </ParentButton>
        </ControllerContainer>
      }

      <CenteredModal
        id="flexible2"
        title="Create a new Agent"
        children={
          <ModalContainer width="500px" className="container">
            <label htmlFor="agent_name ">Agent name</label>
            <InputRow $theme={theme}>
              <Input
                id="agent_name"
                type="text"
                className=""
                placeholder="how would you want your agent to be called"
              />
            </InputRow>
            <div className="d-flex gap-2 flex-column">
              <label htmlFor="paste">Choose what type of document </label>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Sales
                    </p>
                    <p className="">
                      Ideal for clients aiming to boost their sales efforts. Our agents specialize in proactively reaching out to potential customers and handling incoming inquiries about products and services.
                    </p>
                  </div>
                }
                name="type"
                label="Sales"
                value="Sales"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Customer service
                    </p>
                    <p className="">
                      Perfect for clients needing support for their customers. This option involves managing both inbound issues and outbound follow-ups to ensure customer satisfaction and resolve any service-related concerns.
                    </p>
                  </div>
                }
                name="type"
                label="customerService"
                value="cservice"
                active={""}
              ></CustomInput>

              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Secretary
                    </p>
                    <p className="">
                      Suitable for clients requiring assistance with administrative tasks. Our agents can manage appointments, handle call routing, and provide general information, acting as the first point of contact for your business.
                    </p>
                  </div>
                }
                name="type"
                label="secretary"
                value="secretary"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Feedback Collection Agent
                    </p>
                    <p className="">
                      For clients focused on improving their products or services through customer insights. These agents are trained to gather detailed customer feedback through outbound calls and manage inbound feedback queries.
                    </p>
                  </div>
                }
                name="type"
                label="fca"
                value="fca"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Feedback Collection Agent
                    </p>
                    <p className="">
                      For clients focused on improving their products or services through customer insights. These agents are trained to gather detailed customer feedback through outbound calls and manage inbound feedback queries.
                    </p>
                  </div>
                }
                name="type"
                label="ca2"
                value="ca2"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Institutional Agent
                    </p>
                    <p className="">
                      Best for clients dealing with institutional, educational, or corporate partners. These agents are equipped to handle formal inquiries, provide detailed information, and facilitate communication between organizations.
                    </p>
                  </div>
                }
                name="type"
                label="iagent"
                value="iagent"
                active={""}
              ></CustomInput>
            </div>
          </ModalContainer>
        }
        show={showCreateAgentModal}
        btnText="Create Agent"
        onHide={() => setShowCreateAgentModal(false)}
        onContinue={() => {
          setShowCreateAgentModal(false);
          setTimeout(() => { }, 2000);
          setshowEditingMethodModal(true);
        }}
      ></CenteredModal>
      <CenteredModal
        title="Create a new Agent"
        id="flexible2"
        children={
          <ModalContainer className="container">
            <div className={`d-flex flex-column gap-2 ${theme == "light" && "light-mode"}`}>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Standard (Recommended)
                    </p>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </p>
                  </div>
                }
                name="type"
                label="standard"
                value="standard"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">Advanced</p>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </p>
                  </div>
                }
                name="type"
                label="advanced"
                value="advanced"
                active={""}
              ></CustomInput>
            </div>
          </ModalContainer>
        }
        show={showEditingMethodModal}
        btnText="Choose selected method"
        onHide={() => setshowEditingMethodModal(false)}
        onBack={() => {
          setshowEditingMethodModal(false);
          setTimeout(() => { }, 2000);
          setShowCreateAgentModal(true);
        }}
        onContinue={() => {
          setshowEditingMethodModal(false);
          setTimeout(() => { }, 2000);
          setShowCreatePrompModal(true);
        }}
      ></CenteredModal>
      <CenteredModal
        title="How do you want to create a prompt for your agent to follow?"
        id="flexible2"
        children={
          <ModalContainer className="container">
            <div className="d-flex flex-column gap-2 ">
              <CustomInput

                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex  flex-column">
                    <div className="d-flex mb-2 align-items-center gap-2">
                      <img src="/magic.svg" alt="Magic" />
                      <p className="mt-3">AI assisted creation</p>
                    </div>

                    <p className="">
                      Let the power of AI craft your script effortlessly. Simply upload a call recording, enter an existing script, or respond to a few questions from Epic Caller to provide context, and watch as your script is generated as if by magic.
                    </p>
                  </div>
                }
                name="type"
                label="generate"
                value="generate"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Manual creation
                    </p>
                    <p className="">
                      Begin with a clean slate and construct your script manually from the ground up.
                    </p>
                  </div>
                }
                name="type"
                label="scratch"
                value="scratch"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-2">
                      Professional Assistance from Epic Caller Management
                    </p>
                    <p className="">
                      Seek the expertise of Epic Caller Management team for personalized, professional guidance in script development. Perfect for those looking for a tailored approach and expert input.
                    </p>
                  </div>
                }
                name="type"
                label="scratch2"
                value="scratch2"
                active={""}
              ></CustomInput>
            </div>
          </ModalContainer>
        }
        show={showCreatePrompModal}
        btnText="Choose selected method"
        onHide={() => setShowCreatePrompModal(false)}
        onBack={() => {
          setShowCreatePrompModal(false);
          setTimeout(() => { }, 2000);
          setshowEditingMethodModal(true);
        }}
        onContinue={() => {
          setShowCreatePrompModal(false);
          setTimeout(() => { }, 2000);
          selectedInput == "generate" ? setShowGeneratePrompModal(true) : navigate("/agent/prompt_editor");
        }}
      ></CenteredModal>
      <CenteredModal
        title="How do you magically generate a prompt?"
        id="flexible2"
        children={
          <ModalContainer className="container">
            <div className="d-flex flex-grow-1 flex-column gap-2 ">
              <CustomInput

                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-grow- flex-column">
                    <div className="d-flex mb-2 align-items-center gap-2">
                      <img src="/magic.svg" alt="Magic" />
                      <p className="mb-0">Magically generate prompt with AI</p>
                    </div>

                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </p>
                  </div>
                }
                name="type"
                label="generate"
                value="generate"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-0">
                      Create prompt from scratch
                    </p>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </p>
                  </div>
                }
                name="type"
                label="scratch"
                value="scratch"
                active={""}
              ></CustomInput>
              <CustomInput
                selected={selectedInput}
                setSelected={setSelectedInput}
                children={
                  <div className="d-flex flex-column">
                    <p className="mb-0">
                      Create prompt from scratch
                    </p>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </p>
                  </div>
                }
                name="type"
                label="scratch2"
                value="scratch2"
                active={""}
              ></CustomInput>
            </div>
          </ModalContainer>
        }
        show={showGeneratePrompModal}
        btnText="Choose selected method"
        onHide={() => setShowGeneratePrompModal(false)}
        onBack={() => {
          setShowGeneratePrompModal(false);
          setTimeout(() => { }, 2000);
          setShowCreatePrompModal(true);
        }}
        onContinue={() => {
          setShowGeneratePrompModal(false);
          setTimeout(() => { }, 2000);
          navigate("/agent/prompt_editor");
        }}
      ></CenteredModal>
    </>
  );
}
