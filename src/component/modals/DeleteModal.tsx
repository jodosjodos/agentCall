import { Modal } from 'react-bootstrap';
import { RootState } from "../../store";
import { useSelector } from "react-redux";

function DeleteModal(props: any) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Modal
      {...props}
      className={`centered_modal ${theme == "light" && "light-mode"}`}
      size="lg"
      id={props.id ? "flexible" : ""}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        className={`d-flex p-2  justify-content-end align-items-center`}
      >
        <img
          src={` ${theme == "light" ? "/close-light.svg" : "/close.svg"}`}
          alt=""
          className="cursor-pointer"
          width={26}
          height={26}
          onClick={props.onHide}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div
        className={`d-flex p-2  justify-content-center align-items-center`}
      >
        <img
          src="/warning.svg"
          alt=""
          width={75}
          height={75}
        />

      </div>

      <div>
        <div
          className={`d-flex p-2  justify-content-center align-items-center`}
          style={{ width: '90%', margin: 'auto' }}
        >
          <text
            className={`flex-grow h-fit text-center ${theme == "light" ? "modal_title_light" : "modal_title"
              } `}
            style={{ fontSize: '25px',lineHeight:'normal' }}
          >
            {props.title ? props.title : "Upload document"}
          </text>

        </div>
      </div>
      <div>
        <div
          className={`d-flex p-2  justify-content-between align-items-center`}
          style={{ width: '80%', margin: 'auto' }}
        >
          <p
            className={`flex-grow h-fit text-center ${theme == "light" ? "modal_title_light" : "modal_title"
              } `}
            style={{ color: "#96ADB3" }}
          >
            If you delete it will be permanently deleted
          </p>
        </div>
      </div>
      <div className="d-flex gap-2 align-items-end justify-content-center pb-2 px-3 mb-4">
        <button onClick={props.onCancel} className="modal_button">
          <div className="d-flex align-items-center">
            No I 'll keep it
          </div>
        </button>
        <button onClick={props.onContinue} className="modal_button">
          <div className="d-flex align-items-center">
            Yes I want to delete
          </div>
        </button>
      </div>
    </Modal>
  );
}

export default DeleteModal;
