import { useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";
import { RootState } from "../store";
import { ActionContainer, ActionImage } from "./CustomTable/TableComponent";
import DeleteModal from "./modals/DeleteModal";
import Knowledge from "../api/Knowledge";

const TableParent = styled.table`
  color: #c9d5d8;
`;

const TheadMade = styled.tr`
  border-radius: 20px;
  color: #c9d5d8;
  padding: 20px;
`;

const TRrMade = styled.tr<{ theme: string }>`
  background-color: ${(props) => (props.theme === "light" ? "" : "#0b2227")};
color: ${(props) => (props.theme === "light" ? "#0F2E35" : "inherit")};
  border-bottom: 1px solid #0f2e35;
`;
const Th = styled.th<{ theme: string }>`
  padding: 10px;
  background-color: ${(props) =>
    props.theme === "light" ? "#C9D5D8" : "#0f2e35"};
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
  color: ${(props) => (props.theme === "dark" ? "#C9D5D8" : "#0f2e35")};
`;
const Td = styled.td`
  padding-top: 10px;
  padding-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
`;


export function SalesPitchers({ filelist, GetAllKnowledge }: { filelist: any; GetAllKnowledge: () => void; }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const [showmodal, setShowmodal] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')

  const handleDelete = async () => {
    await Knowledge.deleteKnowledge(selectedItem);
    await GetAllKnowledge();
    setShowmodal(false)
  };


  return (
    <TableParent>
      <TheadMade>
        <Th theme={theme} className="first_header">
          File Name
        </Th>
      </TheadMade>
      <tbody>
        {filelist.map((item: any) => (
          <TRrMade theme={theme} className="pt-5">
            <Td className="pt-4 pb-2">{item.file_name}</Td>
            <Td className="pt-4 pb-2">
              <ActionContainer onClick={() => { setSelectedItem(item.id); setShowmodal(true) }} $theme={theme}>
                <ActionImage src="/delete.svg" alt="" />
              </ActionContainer>
            </Td>
          </TRrMade>
        ))}
        <DeleteModal
          onHide={() => setShowmodal(false)}
          onCancel={() => setShowmodal(false)}
          onContinue={() => handleDelete()}
          show={showmodal}
          title="Are you sure you want to delete this file?"
          btnText="save"
          children={
            <div className="d-flex flex-column gap-1">
              <div className="d-flex gap-0 flex-column">
                <p className="mb-0">
                  If you delete it will be permanently deleted
                </p>
              </div>
            </div>
          }
        ></DeleteModal>
        {/* <TRrMade theme={theme} className="pt-5">
          <Td className="pt-4  pb-2">3093578590</Td>
          <Td className="pt-4 pb-2">{activeButton}</Td>
          <Td className="pt-4 pb-2"></Td>
        </TRrMade>
        <TRrMade theme={theme} className="pt-5">
          <Td className="pt-4 pb-2">3093578590</Td>
          <Td className="pt-4 pb-2">{activeButton}</Td>
          <Td className="pt-4 pb-2"></Td>
        </TRrMade>
        <TRrMade theme={theme} className="pt-5">
          <Td className="pt-4 pb-2">3093578590</Td>
          <Td className="pt-4 pb-2">{activeButton}</Td>
          <Td className="pt-4 pb-2"></Td>
        </TRrMade>
        <TRrMade theme={theme} className="pt-5">
          <Td className="pt-4 pb-2">3093578590</Td>
          <Td className="pt-4 pb-2">{activeButton}</Td>
          <Td className="pt-4 pb-2"></Td>
        </TRrMade>
        <TRrMade theme={theme} className="pt-5">
          <Td className="pt-4 pb-2">3093578590</Td>
          <Td className="pt-4 pb-2">{activeButton}</Td>
          <td className="pt-4 pb-2"></td>
        </TRrMade> */}
      </tbody>
    </TableParent >
  );
}
