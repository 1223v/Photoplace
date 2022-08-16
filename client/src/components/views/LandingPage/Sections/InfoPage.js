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
  background: rgba(255, 255, 255, 0.8);
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


export default function InfoPage({isOpen, handleClose, SubContent,SubimageSrcs}){
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
		<Componentpage SubContents={SubContent} SubimageSrces={SubimageSrcs}/>
    </PageWrapper>
    </div>
  )
}