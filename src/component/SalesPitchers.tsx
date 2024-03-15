import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";

const ParentProgressBar = styled.div<{ theme: string }>`
  border: 2px solid #09d799;
  border-radius: 20px;
  background-color: ${(props) => (props.theme === "light" ? "" : "#0b2227")};
  padding: 5px;
  min-width: 140px;
`;
const ChildProgressBar = styled.div`
  background-color: #09d799;
  border-radius: 20px;
  color: black;
  width: 90%;
  padding-inline: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
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

export function SalesPitchers({ activeButton }: { activeButton: string }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <TableParent>
      <TheadMade>
        <Th theme={theme} className="first_header">
          File Name
        </Th>
        <Th theme={theme}>Campaign</Th>
        <Th theme={theme} className="last_header text-end px-1">
          <ParentProgressBar theme={theme}>
            <ChildProgressBar>90% embedded</ChildProgressBar>
          </ParentProgressBar>
        </Th>
      </TheadMade>

      <tbody>
        <TRrMade theme={theme} className="pt-5">
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
        </TRrMade>
      </tbody>
    </TableParent>
  );
}
