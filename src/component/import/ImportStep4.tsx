import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
const ImportStep4Container = styled(Row)`
  padding: 48px;
   
  height:calc(100vh - 200px) !important;
  margin: 0px;
  width: 100%;
  flex-grow: 1;
  gap:8px;
  
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;



const SuccessImage = styled.img`
widht:50px;
height:50px;
`

const DownloadButton = styled.button`
  width: fit-content;
   padding:5px 20px;
  display: flex;
  background-color: rgba(10, 35, 40, 1);
  border: none;

  align-items: center;


  border-radius: 16px;
  gap: 2px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
const DownloadImage = styled.img`
  width: 30px;
`;
function ImportStep4() {
 
  


  

  return (
    <>
      <ImportStep4Container>
        <SuccessImage src="/impSuccess.svg" alt="" />
        <p className="primary-text text-center">
        1 row was imported successfully imported
        </p>
        <DownloadButton>
          <DownloadImage src="/download.svg" alt="Download" />
          <p className="primary-text mb-0">Download csv with imported rows</p>
        </DownloadButton>
      
      </ImportStep4Container>
      
    </>
  );
}

export default ImportStep4;
