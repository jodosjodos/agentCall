import styled from "styled-components";

export const ActionContainer = styled.button<{ $theme?: string }>`
  border-radius: 8px;
  border: ${(props) => (props.$theme == "light" ? "1px solid #000000" : "")};
  background-color: ${(props) =>
    props.$theme == "light" ? "#FEFEFE" : "#0f2e35"};
  display: flex;
  width: fit-content;
  justify-content: center;
  width: 30px;
  padding: 5px 0;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #17454f;
  }
  &:hover {
    background-color: #17454f;
  }
`;

export const ActionImage = styled.img`
  width: 20px;
`;
