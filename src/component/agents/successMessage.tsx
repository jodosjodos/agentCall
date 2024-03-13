import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
const ContinueButton = styled.div`
  background-color: rgba(16, 122, 71, 1);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;
const GreenParagraph = styled.p`
  color: rgba(16, 122, 71, 1);
`;
function SuccessMessage(props: any) {
  return (
    <Modal
      {...props}
      className="centered_modal"
      size="lg"
      id={props.id ? "flexible" : ""}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div className="d-flex p-2  justify-content-between align-items-center"></div>
      </div>
      <Modal.Body>
        <div className="d-flex gap-2 align-items-center justify-content-center pb-2 px-3 flex-column">
          <img src="/success.svg"></img>
          <GreenParagraph>Call redirected successfully</GreenParagraph>
          <ContinueButton>Continue</ContinueButton>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessMessage;
