import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Col } from "react-bootstrap";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { promptdata } from "../../data/prompt";
import CenteredModal from "../modals/Modal";
import DragAndDrop from "../DragAndDrop";
import PoscallModal from "../modals/Postcall";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const Menu = styled.div<{ $theme?: string }>`
  border-radius: 16px;
  padding: 24px;
  min-width: 394px;
  border: ${(props) =>
    props.$theme == "light" ? "1px solid #9ABCC4" : "none"};
  color: ${(props) => (props.$theme == "light" ? "#0F2E35" : "")};
  background-color: ${(props) =>
    props.$theme == "light" ? "#E4EBED" : "#0b2227"};
`;
const Paragraph = styled.div`
  margin-bottom: 0px;
  color: white;
`;
const EditorContainer = styled.div<{ $theme?: string }>`
  color: ${(props) => (props.$theme == "light" ? "#384B4F" : "white")};
`;
const PromptContainer = styled.div`
  padding: 20px;
`;
const Head = styled.div`
  color: #00b7df;
  font-size: 36px;
  font-weight: 600;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: left;
`;

const GreenContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(38, 246, 96, 0.15);
  padding: 4px 8px;
  height: fit-content;
  color: rgba(16, 122, 71, 1);
  width: fit-content;
  margin-bottom: 15px;
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


function PromptEditor() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const [currentData, setCurrentData] = useState('')
  const [agentModalShow, setAgentModalShow] = useState(false);
  const [postcallShow, setPostcallShow] = useState(false)

  useEffect(() => {
    setCurrentData(promptdata[0])
  }, [])

  const handleData = async (val: number) => {
    setCurrentData(promptdata[val])
  }

  const getFileData = (fileData: File | null | undefined) => {
    console.log(fileData);
  }


  return (
    <Col>
      <Header />

      <PromptContainer>
        <Row className="align-items-start gap-3">
          <EditorContainer $theme={theme}>
            <Head>{currentData}</Head>
            <p>Edit the prompt</p>
            <p>Hello my name is agent smith, pleased to meet you</p>
            <p>Await response</p>
            <p>
              Hello my name is agent smith, pleased to meet you.
            </p>
            <p>Await response</p>
            <p>
              Hello my name is agent smith, pleased to meet you.
            </p>
            <p>Await response</p>
            <p>
              Hello my name is agent smith, pleased to meet you.
            </p>
            <p>Await response</p>
            <p>
              Hello my name is agent smith, pleased to meet you.
            </p>
            <p>Await response</p>
            <p>
              Hello my name is agent smith, pleased to meet you.
            </p>
            <p>Await response</p>
            <p>
              Hello my name is agent smith, pleased to meet you.
            </p>
          </EditorContainer>
          <div style={{ display: "flex", flexDirection: 'column' }}>
            <Menu $theme={theme}>
              <Row className="justify-content-start gap-2 py-2" onClick={() => handleData(0)}>
                <img src="/edit.svg" alt="" width={20} />
                <Paragraph>Introduction prompt</Paragraph>
              </Row>
              <Row className="justify-content-start gap-2 py-2" onClick={() => handleData(1)}>
                <img src="/edit.svg" alt="" width={20} />
                <Paragraph>Awaiting response</Paragraph>
              </Row>
              <Row className="justify-content-start gap-2 py-2" onClick={() => handleData(2)}>
                <img src="/edit.svg" alt="" width={20} />
                <Paragraph>Calendar availability</Paragraph>
              </Row>
              <Row className="justify-content-start gap-2 py-2" onClick={() => handleData(3)}>
                <img src="/edit.svg" alt="" width={20} />
                <Paragraph>Prospect nam</Paragraph>
              </Row>
              <Row className="justify-content-start gap-2 py-2" onClick={() => handleData(4)}>
                <img src="/edit.svg" alt="" width={20} />
                <Paragraph>Prospect email</Paragraph>
              </Row>
              <Row className="justify-content-start gap-2 py-2" onClick={() => handleData(5)}>
                <img src="/edit.svg" alt="" width={20} />
                <Paragraph>Company</Paragraph>
              </Row>
              <Row className="justify-content-start gap-2 py-2 ">
                <img src="/add.svg" alt="" width={25} />
                <Paragraph>Add a prompt section</Paragraph>
              </Row>
            </Menu>

            <Menu style={{ marginTop: "30px" }} $theme={theme}>
              <Row className="justify-content-start gap-2 py-2 "
                onClick={() => setPostcallShow(true)}
              >
                <img src="/paste.svg" alt="" />
                <Paragraph>Post call notes</Paragraph>
              </Row>
              <Row className="justify-content-start gap-2 py-2 " onClick={() => setAgentModalShow(true)}>
                <img src="/changeAgent.svg" alt="" />
                <Paragraph>Change agent Name and image</Paragraph>
              </Row>
            </Menu>
          </div>
        </Row>
      </PromptContainer>
      <CenteredModal
        children={
          <div
            className={`d-flex  flex-column gap-1 ${theme == "light" ? "light" : ""
              }`}
          >
            <div className="d-flex gap-0 flex-column">
              <p className="mb-0">Agent name</p>
              <InputRow $theme={theme}>
                <Input
                  id="paste"
                  type="text"
                  className=""
                  placeholder="Rename agent name..."
                  value={""}
                />
              </InputRow>
            </div>
            <DragAndDrop
              color={theme == "light" ? "#E5ECEE" : `rgba(5, 19, 22, 1)`}
              getFileData={getFileData}
            />
          </div>
        }
        show={agentModalShow}
        btnText="Save"
        onHide={() => setAgentModalShow(false)}
        onContinue={() => setAgentModalShow(false)}
        title="Change agent image and name"
      />
      <PoscallModal
        children={
          <EditorContainer>
            <div className="d-flex items-center justify-start justify-content-between align-items-center">
              <div>
                <p>Tags on call</p>
                <div className="d-flex items-center justify-start">
                  <GreenContainer style={{ marginRight: "15px" }}>
                    <p className="mb-0" >#complaint</p>
                  </GreenContainer>
                  <GreenContainer>
                    <p className="mb-0">#meeting</p>
                  </GreenContainer>
                </div>
              </div>

              <button className="modal_button" style={{ height: "50px", width: '60px' }}>
                <div className="d-flex align-items-center">
                  Post
                </div>
              </button>
            </div>
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <GreenContainer>
                    <p className="mb-0">#complaint</p>
                  </GreenContainer>
                  <p style={{ fontWeight: 'bold' }}>Customer</p>
                  <p>Hello can we schedule a meeting.</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div><div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div><div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <GreenContainer>
                    <p className="mb-0">#meeting</p>
                  </GreenContainer>
                  <p style={{ fontWeight: 'bold' }}>Customer</p>
                  <p>Hello can we schedule a meeting.</p>
                </div>
              </div>
            </div>
          </EditorContainer>
        }
        show={postcallShow}
        btnText="Post"
        onHide={() => setPostcallShow(false)}
        onContinue={() => setPostcallShow(false)}
        title="Post Call"
      />
    </Col>
  );
}

export default PromptEditor;
