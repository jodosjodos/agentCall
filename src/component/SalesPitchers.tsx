import styled from "styled-components";

const ParentProgressBar = styled.div`
  border: 2px solid #09d799;
  border-radius: 20px;
  background-color: #0b2227;
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
  background-color: #0f2e35;
  color: #c9d5d8;
  padding: 4px;
`;

const TRrMade = styled.tr`
  background-color: #0b2227;
  border-bottom: 1px solid #0f2e35;
`;

export function SalesPitchers() {
  return (
    <TableParent>
      <TheadMade>
        <th>File Name</th>
        <th>Campaign</th>
        <th>
          <ParentProgressBar>
            <ChildProgressBar>90% embedded</ChildProgressBar>
          </ParentProgressBar>
        </th>
      </TheadMade>

      <tbody>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">Inbound</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">Inbound</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">Inbound</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">Inbound</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
        <TRrMade className="pt-5">
          <td className="pt-4 pb-2">3093578590</td>
          <td className="pt-4 pb-2">Inbound</td>
          <td className="pt-4 pb-2"></td>
        </TRrMade>
      </tbody>
    </TableParent>
  );
}
