import styled, {keyframes, css} from "styled-components";
import React, { useState, useEffect } from 'react';
import Componentpage from './Componentpage'


const slideUP = keyframes`
  from{
    transform: translateY(550px);
  }
  to{
    transform: translateY(0px);
  }
`
const slideDown = keyframes`
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(550px);
  }
`

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  width: 100%;
  height: 80vh;
  flex-direction: row;
  border-radius: 30px;
  border: 3px solid black;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 30px;
  position: absolute;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUP};
  animation-fill-mode: forwards;
  z-index: 2;
  ${props => props.disappear && css`
    animation-name: ${slideDown};
  `}
  
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-direction: columns;
  border-radius: 3px;
  width: 100px;
  height: 120px;
  border: 1px solid black;
  margin: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  background: #FFFFFF;
`
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 4%;
  margin-left: 3%;
`;

export default function InfoPage({isOpen, handleClose}){
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(isOpen);

  useEffect(()=>{
    if(localVisible && !isOpen){
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(isOpen);
  },[localVisible, isOpen])
  if(!animate && !localVisible) return null;
  return(
    <div>
    <PageWrapper disappear={!isOpen}>
		<Componentpage/>	
    </PageWrapper>
    </div>
  )
}