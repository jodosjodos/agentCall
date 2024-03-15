import React, { useState } from "react";
import { DropdownButton } from "./DropDown";
import styled from "styled-components";
import CenteredModal from "../modals/Modal";
import CustomInput from "../CustomInput";

import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const HMod = styled.h5`
  color: #c9d5d8;
  font-weight: bold;
`;
const PMode = styled.p`
  color: #394b4f;
`;
const InputRow = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #051316;
`;
const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;
const CreateButton = styled.button<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#0A2328" : "#00b7df"};
  border-radius: 20px;
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
    props.$theme == "light" ? "#C9D5D8" : "#0b2227"};
  height: fit-content;
  width: fit-content;
  flex-wrap: wrap;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
  padding: 0.5rem;
`;
const Paragraph = styled.p`
  width: 300px;
  margin-bottom: 0px;
`;
const ControllerContainer = styled.div<{ $selected?: boolean }>`
  display: ${(props) => (props.$selected ? "none" : "block")};
  @media (min-width: 1500px) {
    flex-direction: row !important;
  }
`;

export function Controller({ selected }: { selected?: boolean }) {
  console.log(selected);

  const [showCreateAgentModal, setShowCreateAgentModal] = useState(false);
  const [showEditingMethodModal, setshowEditingMethodModal] = useState(false);
  const [showCreatePrompModal, setShowCreatePrompModal] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();
  return (
    <>
      {
        <ControllerContainer
          $selected
          className="d-flex  gap-2 flex-column flex-wrap justify-content-between py-4 px-4 "
        >
          <div className="d-flex flex-column">
            <HMod>Click any agent to select</HMod>
            <PMode>
              any agent selected would be displayed on the right of panel
            </PMode>
          </div>
          <ParentButton $theme={theme} className="d-flex  gap-2">
            <CreateButton
              $theme={theme}
              className=""
              onClick={() => setShowCreateAgentModal(true)}
            >
              Create new agent +
            </CreateButton>
            <DropdownButton name="Date" />
            <DropdownButton name="Week" />
            <DropdownButton name="Month" />
            <DropdownButton name="Custom" />
          </ParentButton>
        </ControllerContainer>
      }

      <CenteredModal
        title="Create a new Agent"
        children={
          <>
            <label htmlFor="agent_name ">Agent name</label>
            <InputRow>
              <Input
                id="agent_name"
                type="text"
                className=""
                placeholder="Paste text"
              />
            </InputRow>
            <div className="d-flex gap-2 flex-column">
              <label htmlFor="paste">Choose what type of document </label>
              <CustomInput
                name="type"
                label="Sales"
                value="Sales"
                active={""}
              ></CustomInput>
              <CustomInput
                name="type"
                active={""}
                label="Customer service"
                value="customer_service"
              ></CustomInput>
              <CustomInput
                active={""}
                name="type"
                label="Others (Custom use cases)"
                value="others"
              ></CustomInput>
            </div>
          </>
        }
        show={showCreateAgentModal}
        btnText="Create Agent"
        onHide={() => setShowCreateAgentModal(false)}
        onContinue={() => {
          setShowCreateAgentModal(false);
          setTimeout(() => {}, 2000);
          setshowEditingMethodModal(true);
        }}
      ></CenteredModal>
      <CenteredModal
        title="Create a new Agent"
        id="flexible"
        children={
          <>
            <div className="d-flex gap-2 ">
              <CustomInput
                children={
                  <div className="d-flex flex-column">
                    <Paragraph className="mb-2">
                      Standard (Recommended)
                    </Paragraph>
                    <Paragraph className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </Paragraph>
                  </div>
                }
                name="type"
                label="Sales"
                value="Sales"
                active={""}
              ></CustomInput>
              <CustomInput
                children={
                  <div className="d-flex flex-column">
                    <Paragraph className="mb-2">Advanced</Paragraph>
                    <Paragraph className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </Paragraph>
                  </div>
                }
                name="type"
                label="Sales"
                value="Sales"
                active={""}
              ></CustomInput>
            </div>
          </>
        }
        show={showEditingMethodModal}
        btnText="Choose selected method"
        onHide={() => setshowEditingMethodModal(false)}
        onBack={() => {
          setshowEditingMethodModal(false);
          setTimeout(() => {}, 2000);
          setShowCreateAgentModal(true);
        }}
        onContinue={() => {
          setshowEditingMethodModal(false);
          setTimeout(() => {}, 2000);
          setShowCreatePrompModal(true);
        }}
      ></CenteredModal>
      <CenteredModal
        title="How do you want to create a prompt for your agent to follow?"
        id="flexible"
        children={
          <>
            <div className="d-flex gap-2 ">
              <CustomInput
                children={
                  <div className="d-flex flex-column">
                    <div className="d-flex mb-2 align-items-center gap-2">
                      <img src="/magic.svg" alt="Magic" />
                      <Paragraph>Magically generate prompt with AI</Paragraph>
                    </div>

                    <Paragraph className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </Paragraph>
                  </div>
                }
                name="type"
                label="Sales"
                value="Sales"
                active={""}
              ></CustomInput>
              <CustomInput
                children={
                  <div className="d-flex flex-column">
                    <Paragraph className="mb-2">
                      Create prompt from scratch
                    </Paragraph>
                    <Paragraph className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </Paragraph>
                  </div>
                }
                name="type"
                label="Sales"
                value="Sales"
                active={""}
              ></CustomInput>
            </div>
          </>
        }
        show={showCreatePrompModal}
        btnText="Choose selected method"
        onHide={() => setShowCreatePrompModal(false)}
        onBack={() => {
          setShowCreatePrompModal(false);
          setTimeout(() => {}, 2000);
          setshowEditingMethodModal(true);
        }}
        onContinue={() => {
          setShowCreatePrompModal(false);
          setTimeout(() => {}, 2000);
          navigate("/agent/prompt_editor");
        }}
      ></CenteredModal>
    </>
  );
}
