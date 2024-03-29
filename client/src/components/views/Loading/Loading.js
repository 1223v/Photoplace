import React from 'react'
import styled from "styled-components";
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";

const Container = styled.div`
  margin-left:auto;
  margin-right:auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FED06E;
  flex-direction: column;
  position:relative;
  font-family: "loadingpage_font";
  @media (min-width: 800px) {
    width: 600px;
    height: 100vh;
    /* border:1px solid #95afc0; */
    /* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
  }
`;

const MainText=styled.h1`
   color:white;
   font-size:50px;
   font-weight:bolder;
   font-family: 'Yellowtail', cursive;
   @media (min-width: 800px) {
    font-size:60px;
  }
`;
const SubText=styled.h3`
   color:white;
   font-size:25px;
   font-weight:bolder;
   @media (min-width: 800px) {
    font-size:15px;
  }
`;
const LoadingContainer=styled.div`
    flex-direction:column;
    position:relative;
    top:35px;
    justify-content:flex-end;
    align-items:center;
    display:flex;
`;

const BottomText=styled.h1`
   color:#C0B27F;
   font-size:20px;
   font-weight:bolder;
   font-family: 'loadingpage_font';
  @media (min-width: 800px) {
    font-size:40px;
  }
`;


export default function Loading() {
  return (
    <Container className="loading_KOR">
		<MainText id= "maint">Photo Place</MainText>
        <SubText>나와 어울리는 여행지는?</SubText>
        <LoadingContainer>
			<br/>
			<br/>
		  	<br/>
		  	<br/>
            <Bounce size={30} color="#BAAD7D"></Bounce>
			<br/>		  
            <BottomText>LOADING</BottomText>
        </LoadingContainer>
        
    </Container>
  )
}


