import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomInput from "../CustomInput";

function CenteredModal(props: any) {
  return (
    <Modal
      {...props}
      className="centered_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div className="d-flex p-2  justify-content-between align-items-center">
          <p className="flex-grow h-fit text-center modal_title">
            Upload document
          </p>
          <img
            src="/close.svg"
            alt=""
            width={26}
            height={26}
            onClick={props.onHide}
          />
        </div>
      </div>
      <Modal.Body>{props.children}</Modal.Body>
      <div className="d-flex align-items-end justify-content-end pb-2 px-3">
        <button onClick={props.onContinue} className="modal_button">
          <div className="d-flex align-items-center">
            {props.btnText}
            {props.btnText == "Next" && <img src="/nextIcon.svg" alt="" />}
          </div>
        </button>
      </div>
    </Modal>
  );
}

export default CenteredModal;
