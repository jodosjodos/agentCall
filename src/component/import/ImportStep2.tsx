import React from "react";
import { FormCheck, Row } from "react-bootstrap";
import styled from "styled-components";

import CustomButton from "./CustomButton";
import DragAndDrop from "../DragAndDrop";

import { useSelector } from "react-redux";
import { RootState } from "../../store";


const UploadContainer = styled.div<{ $theme?: string }>`
  width:500px;

  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "rgba(10, 35, 40, 1)"};
  border-radius: 10px;
`;
const ImportStep2Container = styled(Row)`
  padding: 0 40px;
  margin: 0;

  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  height:calc(100vh - 200px);
`;



function ImportStep2({ setActiveTopBar }: { setActiveTopBar?: any}) {



  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ImportStep2Container>










      <UploadContainer $theme={theme} className="p-2">



        <DragAndDrop
        subTitle=" (only accepting csv, xls, xlsx, xlsb, formats)"
          color={theme == "light" ? "#E5ECEE" : `rgba(5, 19, 22, 1)`}
        ></DragAndDrop>


        <div className="justify-content-end mt-2 gap-3 flex-wrap d-flex">
          <div className="d-flex  gap-2 align-items-center">
            <FormCheck></FormCheck>
            {/* <input type="checkbox"></input> */}
            <p className=" mb-0 primary-text">First row is a header</p>
          </div>
          <CustomButton
            onclick={() => setActiveTopBar(3)}
            child={
              <div className="d-flex gap-2">
                Next step
                <img src="/nextIcon.svg" alt="" />
              </div>
            }
          ></CustomButton>
        </div>
      </UploadContainer>
    </ImportStep2Container>
  );
}

export default ImportStep2;
