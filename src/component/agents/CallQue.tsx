import React from "react";
import styled from "styled-components";
const CallQueContainer = styled.div`
  background: linear-gradient(180deg, #0b2227 0%, #09181b 77.4%);
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
const DeleteContainer = styled.div`
  background-color: rgba(10, 35, 40, 1);
  border: 1px solid rgba(15, 46, 53, 1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const MoveButton = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 20px;
  background-color: rgba(15, 46, 53, 1);
`;
function CallQue() {
  return (
    <CallQueContainer>
      <div className="d-flex flex-column">
        <p>Raam Adi</p>
        <div className="d-flex gap-2">
          <p>+44786355278</p>
          <GreenContainer>
            <p className="mb-0">New Lead</p>
          </GreenContainer>
        </div>
      </div>
      <div className="d-flex gap-2">
        <DeleteContainer>
          <img src="/delete2.svg"></img>
        </DeleteContainer>
        <MoveButton className="gap-2">
          <p className="mb-0 ">Move</p>
          <img src="/move.svg"></img>
        </MoveButton>
      </div>
    </CallQueContainer>
  );
}

export default CallQue;
