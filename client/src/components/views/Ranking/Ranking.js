import React, { useEffect, useState } from 'react';
import GridCards from '../commons/GridCards';
import Axios from 'axios';
import styled from 'styled-components';

function Ranking() {
	const [Rankings, setRankings] = useState([]);

	useEffect(() => {
		Axios.get('/api/data/seoulsmap').then((response) => {
			setRankings(response.data);
		});
	}, []);

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

					<div>
						게시물 <b>200</b>
						&nbsp;&nbsp;&nbsp; 카테고리 <b>5</b>
						&nbsp;&nbsp;&nbsp; 서비스 지역 <b>13</b>
					</div>

					<div>
						<b>Photoplace</b>
						<br />
						AI가 추천해주는 나의 여행지는?
					</div>
				</Insta>
			</Container>
			<hr style={{ width: '70%', margin: 'auto' }} />
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