import React, { useEffect, useState } from 'react';
import GridCards from '../commons/GridCards';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Ranking() {
	const [City, setCity] = useState([]);
	const [Rankings, setRankings] = useState([]);
	const [Page, setPage] = useState(0);
	
	useEffect(() => {
		// Axios.get('/api/data/seoulsmap').then((response) => {
		// 	setRankings(response.data);
		// });
		Axios.get('/api/data/Ranking').then((response) => {
			setCity(response.data);
		});
		let body = {
			rankingObject: City.slice(0, 5)
		}
		Axios.post('api/data/Rankinginfo', body)
		.then(response => {
			setRankings(response.data)
			console.log(Rankings);
		})
	}, []);
	
	const Limit = (data) => {
		let start = 0 + 5 * Page;
		return data.slice(start, start + 5);
	}	
	
	const Click = () =>{
		console.log(City);
		let body = {
			rankingObject: Limit(City)
		}
		Axios.post('api/data/Rankinginfo', body)
		.then(response => {
			setRankings([...Rankings, ...response.data])
			setPage(Page + 1);
		})
	}
	
	return (
		<div>
			<br />
			<br />
			<br />

			<Container>
				<Instag>
					<IMage
						src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fw7ESw%2FbtrJSgj0ouA%2FnfHjce7OVL7jBZujWrKyW0%2Fimg.png"
						alt=""
					/>
				</Instag>
				<Insta>
					<h3>
						Photoplace 
						<br/>
						<Button href="https://www.instagram.com/photoplace70/">팔로우</Button>
						&nbsp;&nbsp;···
					</h3>	

					<Ins>
						게시물 <b>200</b>
						&nbsp;&nbsp;&nbsp; 카테고리 <b>5</b>
						&nbsp;&nbsp;&nbsp; 서비스 지역 <b>13</b>
					</Ins>

					<Ins>
						<b>Photoplace</b>
						<br />
						AI가 추천해주는 나의 여행지는?
					</Ins>
				</Insta>
			</Container>
			<br/>
			<Containered>
				<ContentBar key='5'>
				
				
         <ContentBa key='1'><Link style={{textDecoration: 'none', color: 'inherit'}} to="/"><ContentImage alt='ph1' src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZpuBZ%2FbtrJB3Uv0j1%2FPMw9UW5233SHt3mACd9DX0%2Fimg.jpg"/><Contenttype>서울 핫플</Contenttype></Link></ContentBa>
         <ContentBa key='2'><Link style={{textDecoration: 'none', color: 'inherit'}} to="/BusanMap"><ContentImage alt='ph2' src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbcp5G1%2FbtrJC5EjiCr%2FvNDlQpmTTekbBci9j0W2sk%2Fimg.jpg"/><Contenttype>부산 핫플</Contenttype></Link></ContentBa>
         <ContentBa key='3'><Link style={{textDecoration: 'none', color: 'inherit'}} to="/JejuMap"><ContentImage alt='ph3' src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsIu9O%2FbtrJCqol93S%2F7YEKkox4JUMSVvklKKgqNK%2Fimg.jpg"/><Contenttype>제주 핫플</Contenttype></Link></ContentBa>
         <ContentBa key='4'><Link style={{textDecoration: 'none', color: 'inherit'}} to="/DramaMap"><ContentImage alt='ph4' src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQwTTe%2FbtrJLSwqsZE%2FDjAkDnIVkBoOJkr3TGaxW0%2Fimg.jpg"/><Contenttype>드라마<br/>/영화</Contenttype></Link></ContentBa>
       			
				
			</ContentBar>
			</Containered>
			<hr style={{ width: '70%', margin: 'auto'}} />
			<div style={{ margin: '1rem auto', textAlign: 'center' }}>
				{Rankings.map((rank, index) => (
					<React.Fragment key={index}>
						<GridCards
							image={rank.imageSrc}
							index={index + 1}
							num={rank.num}
							title={rank.title}
							content={rank.content}
						/>
					</React.Fragment>
				))}

				<br />
				<br />
			</div>
			<div style={{ textAlign: 'center' }}>
				<CButton onClick={Click}>더보기</CButton>
			</div>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}
export default Ranking;

const IMage = styled.img`
	border-radius: 100%;
	width: 150px;
	height: 150px;
	margin-right: 60px;
	@media (max-width: 430px) {
		margin-right: 20px;
		width: 77px;
		height: 77px;
	}
`;

const Insta = styled.div`
	@media only screen and (max-width: 430px) {
		body {
		}
	}
`;

const Button = styled.a`
	background-color: #0095F6;
	border: 1px solid #0095F6;
	border-radius: 5px;
	font-size: 50%;
	text-align: center;
	text-decoration: none;
	color: white;
	padding:5px 9px;
	font-weight:bold;
	:hover{
		text-decoration: none;
		color: white;
	}
`;

const Ins = styled.div`
	font-size: 90%;
`;


const Instag = styled.div`
	display: flex;
	position: relative;
`;

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 80%;

	align-items: center;
	justify-content: center;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	position: relative;

	@media (min-width: 800px) {
		width: 600px;
		height: 30vh;
		/* border:1px solid #95afc0; */
		/* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
	}
`;

const Containered = styled.div`
  margin-left:auto;
  margin-right:auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  flex-direction: column;
  position:relative;
  font-family: "loadingpage_font";
  @media (max-width: 480px) {
    
    
    /* border:1px solid #95afc0; */
    /* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
  }
`;

const ContentBar = styled.ul`
	display: flex;
	margin-top: 8px;
	margin-left: auto;
	margin-right: auto;
	
  	padding-left:0px;
	background-color: white;
	font-family: 'main_font';
`;

const Contenttype = styled.span`
	display: flex;
	margin-left:auto;
	margin-right:auto;
	background-color: white;
	font-family: 'main_font';
`;

const ContentBa = styled.li`
	display: inline-block;
	float: left;
	margin-left:15px;
	margin-right:auto;
	position: relative;
	background-color: white;
	font-family: 'main_font';
`;

const ContentImage = styled.img`
	margin: auto;
	width: 60px;
	height: 60px;
	border-radius: 100%;
`;
const CButton = styled.button`
	background-color: white;
	color: #18978F;
	width: 80px;
	height: 40px;
	position: absolute;
	padding: 0;
	margin: 10px;
	border: 1px solid #18978F;
	border-radius: 30px;
`;