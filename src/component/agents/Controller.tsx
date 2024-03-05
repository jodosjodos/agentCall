import React from "react";
import { Button } from "react-bootstrap";
import { DropdownButton } from "./DropDown";
import styled from "styled-components";

const HMod = styled.h5`
  color: #c9d5d8;
  font-weight: bold;
`;
const PMode = styled.p`
  color: #394b4f;
`;

const CreateButton = styled.button`
  background-color: #00b7df;
  border-radius: 20px;
  border: none;
  &:hover {
    background-color: #0f2e35;
    color: #96adb3;
  }
`;
const ParentButton = styled.div`
  background-color: #0b2227;
  height: 50px;
  border-radius: 20px;
  padding: 0.5rem;
`;
export function Controller() {
  return (
    <div className="d-flex flex-row justify-content-between py-4 px-4">
      <div className="d-flex flex-column">
        <HMod>Click any agent to select</HMod>
        <PMode>
          any agent selected would be displayed on the right of panel
        </PMode>
      </div>
      <ParentButton className="d-flex flex-row  gap-3">
        <CreateButton>Create new agent +</CreateButton>
        <DropdownButton name="Date" />
        <DropdownButton name="Week" />
        <DropdownButton name="Month" />
        <DropdownButton name="Custom" />
      </ParentButton>
    </div>
  );
}
