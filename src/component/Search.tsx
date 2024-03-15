import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
const ImgMod = styled.img`
  width: 23px;
  position: absolute;
  right: 20px;
  top: 17px;
`;
const Column = styled.div`
  width: 100%;
`;

const InputMod = styled.input<{ $theme?: string }>`
  float: right;
  padding: 6px 6px;
  border: none;
  margin-top: 8px;
  width: 100%;

  font-size: 17px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#E5ECEE" : "#0a2328"};
  outline: none;
  border-radius: 8px;
  color: #96adb3;
  @media (max-width: 600px) {
    width: 100%;
  }
  border-radius: 8px;
  color: #96adb3;
`;

function Search(props: any) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Column className="position-relative ">
      <InputMod
        $theme={theme}
        type="text"
        placeholder={props.placeholder ? props.placeholder : "search"}
      />
      <ImgMod src="/searchIcons.png" />
    </Column>
  );
}

export default Search;
