import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
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
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Modal
      {...props}
      className={`centered_modal ${theme=="light"&&"light-mode"}`}
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
          <ContinueButton onClick={props.onHide}>Continue</ContinueButton>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessMessage;
