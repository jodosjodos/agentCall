import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
const BackButton = styled.button`
  height: 40px;
  padding: 8px, 12px;
  border-radius: 24px;
  background-color: #0f2e35;
  color: #96adb3;
  gap: 4px;
`;
function CenteredModal(props: any) {
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
          <p className="flex-grow h-fit text-center modal_title">
            {props.title ? props.title : "Upload document"}
          </p>
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
      <Modal.Body>{props.children}</Modal.Body>
      <div className="d-flex gap-2 align-items-end justify-content-end pb-2 px-3">
        {props.onBack && (
          <BackButton onClick={props.onBack} className="modal_button">
            <div className="d-flex align-items-center">Go back</div>
          </BackButton>
        )}
        <button onClick={props.onContinue} className="modal_button">
          <div className="d-flex align-items-center">
            {props.btnText}
            <img src="/nextIcon.svg" alt="" />
          </div>
        </button>
      </div>
    </Modal>
  );
}

export default CenteredModal;
