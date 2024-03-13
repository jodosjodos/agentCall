import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import CallQue from "./CallQue";
const GreenContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(38, 246, 96, 0.15);
  padding: 4px 8px;
  color: rgba(16, 122, 71, 1);
`;

function OngoingCallModal(props: any) {
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
        <div className="d-flex p-2  justify-content-between align-items-center">
          <GreenContainer>Ongoing call with +84965482487</GreenContainer>
          <img
            src="/close.svg"
            alt=""
            className="cursor-pointer"
            width={26}
            height={26}
            onClick={props.onHide}
          />
        </div>
      </div>
      <Modal.Body>
        <p>All calls on queue</p>
        <p>Drag numbers to re-arrange numbers on queue</p>
        <div className="d-flex flex-column gap-2">
          <CallQue></CallQue>
          <CallQue></CallQue>
          <CallQue></CallQue>
          <CallQue></CallQue>
          <CallQue></CallQue>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OngoingCallModal;
