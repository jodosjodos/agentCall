import styled from "styled-components";
const ImgMod = styled.img`
  width: 23px;
  position: absolute;
  right: 20px;
  top: 17px;
`;
const Column = styled.div`
  width: 100%;
`;
const InputMod = styled.input`
  float: right;
  padding: 6px 6px;
  border: none;
  margin-top: 8px;
  flex-grow: 1;

  font-size: 17px;
  background-color: #0a2328;
  outline: none;
  border-radius: 8px;
  color: #96adb3;
  width: 100%;
  border-radius: 8px;
  color: #96adb3;
`;

function Search() {
  return (
    <Column lg={2} className="position-relative ">
      <InputMod type="text" placeholder="search" />
      <ImgMod src="/searchIcons.png" />
    </Column>
  );
}

export default Search;
