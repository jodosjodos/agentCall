import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import CallQue from "./CallQue";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const GreenContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(38, 246, 96, 0.15);
  padding: 4px 8px;
  display: flex;

  color: rgba(16, 122, 71, 1);
`;
const CallOnQueParagraph = styled.p`
  font-size: 20px;
  color: rgba(201, 213, 216, 1);
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;
function OngoingCallModal(props: any) {
  const [showUpDown, setShowUpDown] = useState(false);
  const [activeCallQue, setActiveCallQue] = useState(0);
  const [call, setCall] = useState([
    { name: "Raam 1 adi", number: "+4476363636363" },
    { name: "Raam 2 adi", number: "+4476363636363" },
    { name: "Raam 3 adi", number: "+4476363636363" },
    { name: "Raam 4 adi", number: "+4476363636363" },
    { name: "Raam  5 adi", number: "+4476363636363" },
  ]);
  const dragCall = useRef<number>(0);
  const draggedOverCall = useRef<number>(0);
  const moveDown = (index: number) => {
    if (index < call.length - 1) {
      const updatedCalls = [...call];
      const temp = updatedCalls[index];
      updatedCalls[index] = updatedCalls[index + 1];
      updatedCalls[index + 1] = temp;
      setCall(updatedCalls);
    }
  };
  const moveUp = (index: number) => {
    if (index > 0) {
      const updatedCalls = [...call];
      const temp = updatedCalls[index];
      updatedCalls[index] = updatedCalls[index - 1];
      updatedCalls[index - 1] = temp;
      setCall(updatedCalls);
    }
  };
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Modal
      {...props}
      className={`centered_modal ${theme=="light"&&"light-mode"} modal_center`}
      size="lg"
      id={props.id ? "flexible" : ""}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="">
        <div className="d-flex p-2  justify-content-between align-items-center">
          <div className="d-flex gap-1">
            <GreenContainer className="gap-1">
              <img src="/green-wave.svg" alt="" />
              Ongoing call with +84965482487
            </GreenContainer>
          </div>
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
        <CallOnQueParagraph className="mb-0">
          All calls on queue
        </CallOnQueParagraph>
        <p>Drag numbers to re-arrange numbers on queue</p>
        <div className="d-flex flex-column gap-2">
          {call.map((i, item) => (
            <>
              <CallQue
                callItem={i}
                index={item - 1}
                onMoveDown={() => {
                  dragCall.current = item;
                  draggedOverCall.current = item;

                  moveDown(item);
                }}
                onMoveUp={() => {
                  dragCall.current = item;
                  draggedOverCall.current = item;

                  moveUp(item);
                }}
                activeCallQue={activeCallQue}
                setActiveCallQue={setActiveCallQue}
                showUpDown={showUpDown}
                setShowUpDown={setShowUpDown}
              ></CallQue>
            </>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OngoingCallModal;
