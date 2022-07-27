import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Axios from 'axios'
//import ImagesComponent from "./ImagesComponent.js";
import '../LandingPage/Sections/Componentpage.css';
import './Ranking.css';
import styled from "styled-components";
import Select from "./SelectBox"
const OPTIONS = [
	{value: "latest", name: "최신순"},
	{value: "popularity", name: "인기순"},
];


const SelectWrapper = styled.div`
  display: flex;
  margin: 10px;
  margin_bottom: 15px;
  width: 80%;
`
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin_bottom: 15px;
  width: 80%;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;
`;

const TitleImage = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 40px;
  height: 40px;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 8px;
  margin_bottom: 10px;
  font-weight: bold;
`
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
  flex-direction: row;
  border-radius: 40px;
  border: 2px solid black;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  width: 100%;
 `
function Ranking(){
	const [width, setwidth] = useState(0);
	const [Rankings,setRankings] = useState([])
	const dragAreaRef = useRef(null);
	
	
	
	let items = [
		{
			num:1,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '장소이름1',
			loc_info: '주소1',
		},
		{
			num:2,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '장소이름2',
			loc_info: '주소2',
		},
		{
			num:3,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '명동 몰토 카페',
			loc_info: '서울 중구 명동길 73 3층',
		},
		{
			num:4,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '서울 젠틀몬스터 팝업스토어',
			loc_info: '서울 중구 소공로 63 신세계백화점 명동점 신관 1층',
		},
		{
			num:5,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '전주 한벽굴 - 스물다섯 스물하나 촬영지',
			loc_info: '전북 전주시 완산구 교동',
		},
		{
			num:6,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '부산 흰여울 문화마을 해변 터널',
			loc_info: '부산광역시 영도구 영선동4가',
		},
	];
	

	useEffect(() => {
		setwidth(dragAreaRef.current.scrollWidth - dragAreaRef.current.offsetWidth);
		Axios.get('https://korea-app.run.goorm.io/api/data/map')
		.then(response=> {
		//console.log(response.data)
		setRankings(response.data)
		
	})
	}, []);
	
	return(
		<div style={{ width: '100%', height: '100%' }} className="wholeView">
			<PageWrapper>
				<SelectWrapper>
					<Select options={OPTIONS} defaultValue="latest"></Select>
				</SelectWrapper>
				
				<InfoWrapper>
					<TitleWrapper className="Tag">
						<TitleImage src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSys6r%2FbtrHrwYtLcD%2FzNleoQ90L2stofIU7YdjL0%2Fimg.png" alt="view"></TitleImage>
						<Title>야경</Title>
					</TitleWrapper>
					<ItemWrapper>
					<div style={{ width: '100%', height: '250px' }} className="imagesRow">
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>						
						{Rankings.map((array) => {
							return(
								<motion.div
									className="item7777" 
									key={array.imageSrc}
								>
									<img src={array.imageSrc} alt="" />	
									<br/>
									{array.title}
									<br/>
									{array.content}									
								</motion.div>					
							);
						})}
					
						
					</motion.div>
				</motion.div>
			</div>
					</ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper className="Tag">
						<TitleImage src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJrTtm%2FbtrHumoqUaU%2FGHWL78psTfZnbb061jkwyK%2Fimg.png" alt="attraction"></TitleImage>
						<Title>놀이공원</Title>
					</TitleWrapper>
					<ItemWrapper>
					<div style={{ width: '100%', height: '250px' }} className="imagesRow">
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>						
						{items.map((array) => {
							return(
								<motion.div
									className="item7777" 
									key={array.image}
								>
									<img src={array.image} alt="" />	
									<br/>
									{array.loc_name}
									<br/>
									{array.loc_info}									
								</motion.div>					
							);
						})}
					
						
					</motion.div>
				</motion.div>
			</div>
					</ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper className="Tag">
						<TitleImage src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbAb6O5%2FbtrHwkRgl35%2FLnZjTDFM2VbWwTE8Fki5gK%2Fimg.png" alt="photozone"></TitleImage>
						<Title>포토존</Title>
					</TitleWrapper>
					<ItemWrapper>
					<div style={{ width: '100%', height: '250px' }} className="imagesRow">
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>						
						{items.map((array) => {
							return(
								<motion.div
									className="item7777" 
									key={array.image}
								>
									<img src={array.image} alt="" />	
									<br/>
									{array.loc_name}
									<br/>
									{array.loc_info}									
								</motion.div>					
							);
						})}
					
						
					</motion.div>
				</motion.div>
			</div>
					</ItemWrapper>
				</InfoWrapper>
			</PageWrapper>
			
			
			
			
		</div>
	);
}

export default Ranking;