import styled from "styled-components";
import { HomeDataType } from "../../types/types";
import { Row } from "react-bootstrap";
const callSteps = [
  { name: "Intro", color: "#F0B723", active: true },
  { name: "Interest", color: "#E4F150", active: true },
  { name: "Info", color: "#00B7DF", active: true },
  { name: "Closing", color: "#0FBC0C", active: true },
];

const CallStep = styled.div<{
  $isFirst?: boolean;
  $background?: string;
  $isLast?: boolean;
}>`
width:24%;
  height: 39px;
  flex-grow: 1;
  padding: 6px, 12px;width
  text-align: end;
  color: black;
  font-size:12px; 
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: ${(props) =>
    props.$background ? props.$background : "white"};
  border-top-left-radius: ${(props) => (props.$isFirst ? "20px" : "")};
  border-bottom-left-radius: ${(props) => (props.$isFirst ? "20px" : "")};
  border-top-right-radius: ${(props) => (props.$isLast ? "20px" : "")};
  border-bottom-right-radius: ${(props) => (props.$isLast ? "20px" : "")};
  gap: 8px;
`;

const SectionParent = styled.div`
  background: linear-gradient(180deg, #0b2227 0%, #09181b 77.4%);
  border-radius: 20px;
  color: #96adb3;
  border: 1px solid #0f2e35;
`;
const DataRow = styled(Row)`
  padding: 3px;
  border: 3px solid #0f2e35;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  gap: 3px;
`;
export function SectionModal({ home }: { home: HomeDataType }) {
  return (
    <SectionParent className="px-4 py-2">
      <h5 className="fw-bold ">{home?.name}</h5>
      <p>{home?.contact}</p>
      <div className="d-flex flex-row justify-content-between ">
        <div>
          <p>Average call Time (%)</p>
          <p className="fs-1">{home?.averageTime}</p>
        </div>
        <div>
          <p>Follow up (%)</p>
          <p className="fs-1">{home?.followUp}</p>
        </div>
        <div>
          <p>Closing (%)</p>
          <p className="fs-1">{home?.closing}</p>
        </div>
      </div>
      <DataRow className="">
        {home.callSteps.map((item, i) => (
          <CallStep
            key={i}
            $isFirst={i == 0}
            $isLast={i == callSteps.length - 1}
            $background={item.color}
          >
            {item.name} {item.value}%
          </CallStep>
        ))}
      </DataRow>
    </SectionParent>
  );
}
