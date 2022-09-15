import styled, { keyframes, css } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const slideUP = keyframes`
  from{
    transform: translateY(550px);
  }
  to{
    transform: translateY(0px);
  }
`;
const slideDown = keyframes`
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(550px);
  }
`;

const PageWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: space-around;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	flex-direction: row;
	border-radius: 10px;
	border: 3px solid black;
	background: rgba(255, 255, 255, 0.9);
	border-radius: 10px;
	position: absolute;
	animation-duration: 0.25s;
	animation-timing-function: ease-out;
	animation-name: ${slideUP};
	animation-fill-mode: forwards;
	z-index: 2;
	${(props) =>
		props.disappear &&
		css`
			animation-name: ${slideDown};
		`}
`;

const FirstCircle = styled.div`
	margin:auto;
	width: 200px;
	height: 200px;
	background-color: #FFD700;
	border-radius: 50%;
	text-align:center;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size:40px;
	color:white;
	z-index:10;
	
	
`;

const SecondCircle = styled.div`
	position: fixed;
    left: 110px;
    bottom: 40px;
    width: 160px;
    height: 160px;
	background-color: #0055ff;
	border-radius: 50%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size:25px;
	color:white;
	 @media (max-width: 550px) {
    left: 0px;
	bottom: 40px;
    
  }
`;

const ThirdCircle = styled.div`
	position: fixed;
    left: 100px;
	bottom: 320px;
	width: 140px;
	height: 140px;
	background-color: #ff0000;
	border-radius: 50%;
	display: flex;
	font-size:20px;
	color:white;
	justify-content: space-around;
	align-items: center;
	 @media (max-width: 550px) {
    left: 20px;
	bottom: 360px;
    
  }
`;

const FourthCircle = styled.div`
	position: fixed;
    left: 350px;
	bottom: 260px;
	width: 100px;
	height: 100px;
	background-color: #00ffff;
	border-radius: 50%;
	display: flex;
	font-size:20px;
	color:white;
	justify-content: space-around;
	align-items: center;
	 @media (max-width: 550px) {
    left: 210px;
	bottom: 110px;
    
  }
`;

export default function InPage({ isOpen, handleClose, SubContent, SubimageSrcs }) {
	const [animate, setAnimate] = useState(false);
	const [localVisible, setLocalVisible] = useState(isOpen);
	const aicontent = useSelector((state) => state.user);
	
	useEffect(() => {
		if (localVisible && !isOpen) {
			setAnimate(true);
			setTimeout(() => setAnimate(false), 250);
		}
		setLocalVisible(isOpen);
	}, [localVisible, isOpen]);
	if (!animate && !localVisible) return null;
	return (
		<div>
			<PageWrapper disappear={!isOpen}>
				
				
				<SecondCircle><b>{aicontent.aiSuccess.prediction1}</b></SecondCircle>
				
				<ThirdCircle><b>{aicontent.aiSuccess.prediction2}</b></ThirdCircle>
				
				<FourthCircle><b>{aicontent.aiSuccess.prediction3}</b></FourthCircle>
				
				<FirstCircle>
					<b>{aicontent.aiSuccess.prediction}</b>
				</FirstCircle>
			</PageWrapper>
		</div>
	);
}