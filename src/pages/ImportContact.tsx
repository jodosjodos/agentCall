import React from "react";
import { Header } from "../component/agents/Header";
import TopBar from "../component/TopBar";
import styled from "styled-components";
const ImportContactContainer=styled.div`
height:100vh;

`

function ImportContact({isSidebarOpened}:{isSidebarOpened:boolean}) {
  return (
    <ImportContactContainer>
      <Header hideSearch={true}></Header>
      <TopBar></TopBar>
      
    </ImportContactContainer>
  );
}

export default ImportContact;
