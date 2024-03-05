import React, { useState } from "react";
import { DropdownButton } from "./DropDown";
import styled from "styled-components";
import CenteredModal from "../modals/Modal";
import CustomInput from "../CustomInput";

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
const CreateButton = styled.button`
  background-color: #00b7df;
  border-radius: 20px;
  border: none;
  &:hover {
    background-color: #0f2e35;
    color: #96adb3;
  }
`;
const ParentButton = styled.div`
  background-color: #0b2227;
  height: 50px;
  border-radius: 20px;
  padding: 0.5rem;
`;
const Paragraph = styled.p`
  width: 300px;
  margin-bottom: 0px;
`;
const FullParagraph = styled.p`
  width: 600px;
  margin-bottom: 0px;
`;
export function Controller() {
  const [showCreateAgentModal, setShowCreateAgentModal] = useState(false);
  const [showEditingMethodModal, setshowEditingMethodModal] = useState(false);
  const [showCreatePrompModal, setShowCreatePrompModal] = useState(false);
  const [showGeneratePromptModal, setShowGeneratePromptModal] = useState(false);
  const [showEditor,setShowEditor]=useState(false)
  return (
    <>
      <div className="d-flex flex-row justify-content-between py-4 px-4">
        <div className="d-flex flex-column">
          <HMod>Click any agent to select</HMod>
          <PMode>
            any agent selected would be displayed on the right of panel
          </PMode>
        </div>
        <ParentButton className="d-flex flex-row  gap-3">
          <CreateButton onClick={() => setShowCreateAgentModal(true)}>
            Create new agent +
          </CreateButton>
          <DropdownButton name="Date" />
          <DropdownButton name="Week" />
          <DropdownButton name="Month" />
          <DropdownButton name="Custom" />
        </ParentButton>
      </div>
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
          setShowGeneratePromptModal(true);
        }}
      ></CenteredModal>
      <CenteredModal
        title="How do you magically generate a prompt?"
        id="flexible"
        children={
          <>
            <div className="d-flex flex-column gap-2 ">
              <CustomInput
                children={
                  <div className="d-flex flex-column">
                    <div className="d-flex mb-2 align-items-center gap-2">
                      <img src="/magic.svg" alt="Magic" />
                      <Paragraph className="w-full">
                        Magically generate prompt with AI
                      </Paragraph>
                    </div>

                    <FullParagraph className="w-full">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </FullParagraph>
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
                    <FullParagraph className="">
                      Lorem ipsum dolor sit amet consectetur. Et rhoncus rutrum
                      neque nulla sit velit adipiscing magna viverra. Eget sit
                      et ornare gravida duis sapien. Pellentesque ac eget netus
                      sapien. Amet ultrices quis suspendisse aliquet suspendisse
                      ac.
                    </FullParagraph>
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
        show={showGeneratePromptModal}
        btnText="Choose selected method"
        onHide={() => setShowGeneratePromptModal(false)}
        onBack={() => {
          setShowGeneratePromptModal(false);
          setTimeout(() => {}, 2000);
          setShowCreatePrompModal(true);
        }}
        onContinue={() => {}}
      ></CenteredModal>
    </>
  );
}
