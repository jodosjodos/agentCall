import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
const CallQueContainer = styled.div<{ $theme?: string }>`
  background: ${(props) =>
    props.$theme == "light"
      ? "transparent"
      : "linear-gradient(180deg, #0b2227 0%, #09181b 77.4%)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  flex-grow: 1;
  border: 1px solid rgba(15, 46, 53, 1);
  border-radius: 10px;
`;
const GreenContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(38, 246, 96, 0.15);
  padding: 4px 8px;
  height: fit-content;
  color: rgba(16, 122, 71, 1);
`;
const DeleteContainer = styled.div<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#E5ECEE" : "rgba(10, 35, 40, 1)"};
  border: 1px solid rgba(15, 46, 53, 1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const MoveButton = styled.div<{ $theme?: string }>`
  display: flex;
  align-items: center;
  padding: 3px 8px;
  color: ${(props) =>
    props.$theme == "light" ? "rgba(10, 35, 40, 1)" : "white"};
  &:hover {
    cursor: pointer;
  }

  border-radius: 20px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#E5ECEE" : "rgba(10, 35, 40, 1)"};
`;
const MoveUpDownContainer = styled.div`
  width: 130px;
  font-size: 14px;
  top: 40px;
  display: flex;
  align-items: end;
  padding: 3px 8px;
  border-radius: 7px;
  background-color: rgba(15, 46, 53, 1);
`;
function CallQue(props: any) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <CallQueContainer $theme={theme}>
      <div className="d-flex flex-column">
        <p>{props.callItem.name}</p>
        <div className="d-flex gap-2">
          <p>{props.callItem.number}</p>
          <GreenContainer>
            <p className="mb-0">New Lead</p>
          </GreenContainer>
        </div>
      </div>
      <div className="d-flex position-relative gap-2">
        <DeleteContainer $theme={theme}>
          <img src="/delete2.svg"></img>
        </DeleteContainer>
        <MoveButton
          $theme={theme}
          onClick={() => {
            props.setShowUpDown(!props.showUpDown);
            props.setActiveCallQue(props.index);
          }}
          className="gap-2"
        >
          <p className="mb-0 ">Move </p>
          <img src="/move.svg"></img>
        </MoveButton>
        {props.activeCallQue == props.index && props.showUpDown && (
          <MoveUpDownContainer className="position-absolute flex-column  left-0 ">
            <MoveButton
              className="gap-2"
              onClick={() => {
                props.onMoveUp();
                props.setShowUpDown(!props.showUpDown);
                props.setActiveCallQue(props.index);
              }}
            >
              <p className="mb-0 "> move up </p>
              <img src="/move.svg"></img>
            </MoveButton>
            <MoveButton
              className="gap-2"
              onClick={() => {
                props.onMoveDown();
                props.setShowUpDown(!props.showUpDown);
                props.setActiveCallQue(props.index);
              }}
            >
              <p className="mb-0 ">move down </p>
              <img src="/move.svg"></img>
            </MoveButton>
          </MoveUpDownContainer>
        )}
      </div>
    </CallQueContainer>
  );
}

export default CallQue;
