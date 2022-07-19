import React from "react";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Axios from 'axios'
import styled from "styled-components";

//여기다 디자인 하면 됨~~~! 아마 슈잉 디자인 따라서
//items의 dayCd - 요일 구분코드(1~7)
//items의 dayNm - 요일 구분명 (월~일)
//items의 touristCd - 관광객 코드
//items의 touristNm - 관광객 구분명
//items의 tourNum - 관광객 수 
//items의 baseYmd - 기준 년월일

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
  margin-bottom: 50px;
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

function Detail(){
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
			dayCd:1,
			dayNm: "월요일",
			touristCd:1,
			touristNm: "현지인(a)",
			tourNum: 30107,
			baseYmd: 20210513,
		},
		{
			num:2,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '장소이름2',
			loc_info: '주소2',
			dayCd:2,
			dayNm: "화요일",
			touristCd:2,
			touristNm: "외지인(b)",
			tourNum: 284354,
			baseYmd: 20210514,
		},
		{
			num:3,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '명동 몰토 카페',
			loc_info: '서울 중구 명동길 73 3층',
			dayCd:3,
			dayNm: "수요일",
			touristCd:2,
			touristNm: "외지인(b)",
			tourNum: 484354,
			baseYmd: 20210515,
		},
		{
			num:4,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '서울 젠틀몬스터 팝업스토어',
			loc_info: '서울 중구 소공로 63 신세계백화점 명동점 신관 1층',
			dayCd:4,
			dayNm: "목요일",
			touristCd:3,
			touristNm: "외국인(c)",
			tourNum: 234826,
			baseYmd: 20210516,
		},
		{
			num:5,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '전주 한벽굴 - 스물다섯 스물하나 촬영지',
			loc_info: '전북 전주시 완산구 교동',
			dayCd:5,
			dayNm: "금요일",
			touristCd:3,
			touristNm: "외국인(c)",
			tourNum: 146631,
			baseYmd: 20210517,
		},
		{
			num:6,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '부산 흰여울 문화마을 해변 터널',
			loc_info: '부산광역시 영도구 영선동4가',
			dayCd:6,
			dayNm: "토요일",
			touristCd:2,
			touristNm: "외지인(b)",
			tourNum: 282352,
			baseYmd: 20210518,
		},
	];
	
	
	return(
		
	<div style={{ width: '100%', height: '100%' }} className="">
			<PageWrapper><InfoWrapper>
					<TitleWrapper className="Tag">
						
						<Title>사진들 넣어야돼</Title>
					</TitleWrapper>
					<ItemWrapper></ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper className="Tag">
						<Title>정보</Title>
					</TitleWrapper>
					<ItemWrapper></ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper className="Tag">
						<Title>혼잡도</Title>
					</TitleWrapper>
					<ItemWrapper>
					</ItemWrapper>
				</InfoWrapper>
			</PageWrapper>
			
			
			
			
		</div>

	);
}

export default Detail;