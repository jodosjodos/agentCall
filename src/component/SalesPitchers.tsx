import styled from "styled-components";

const ParentProgressBar = styled.div`
  border: 2px solid #09d799;
  border-radius: 20px;
  background-color: #0b2227;
  padding: 5px;
`;
const ChildProgressBar = styled.div`
  background-color: #09d799;
  border-radius: 20px;
  color: black;
  width: 90%;
  padding-inline: 5px;
`;
const TableParent = styled.table`
  color: #c9d5d8;
`;

const TheadMade = styled.tr`
  border-radius: 20px;
  color: #c9d5d8;
  padding: 20px;
`;

const TRrMade = styled.tr`
  background-color: #0b2227;
  border-bottom: 1px solid #0f2e35;
`;
const Th = styled.th`
  padding: 10px;
  background-color: #0f2e35;
`;

export function SalesPitchers({activeButton}:{activeButton:string}) {
  return (
    <TableParent>
      <TheadMade>
        <Th className="first_header">File Name</Th>
        <Th>Campaign</Th>
        <Th className="last_header text-end px-1">
          <ParentProgressBar>
            <ChildProgressBar>90% embedded</ChildProgressBar>
          </ParentProgressBar>
        </Th>
      </TheadMade>

      <tbody>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">{activeButton}</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">{activeButton}</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">{activeButton}</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">{activeButton}</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">{activeButton}</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
      </tbody>
    </TableParent>
  );
}
