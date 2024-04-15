import styled from "styled-components";

export const ActionContainer = styled.button<{ $theme?: string }>`
  position:relative;
  border-radius: 8px;
  border: ${(props) =>
    props.$theme == "light" ? "1px solid #0F2E35" : "0px solid transparent"};
  background-color: ${(props) =>
    props.$theme == "light" ? "#FEFEFE" : "#0f2e35"};
  display: flex;
  
  justify-content: center;
  width: 20px;
  
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
