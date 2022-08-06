/* global kakao */
import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation, useNavigate, Link } from 'react-router-dom'; //이미지 상단 <버튼 누르면 뒤로가기 구현 관련
import Share_modal from '../LandingPage/Sections/Share_modal';
import Detailmap from '../Detailmap/Detailmap'

import './Detail.css';
import './KeenSlider_style.css';

//items의 dayCd - 요일 구분코드(1~7)
//items의 dayNm - 요일 구분명 (월~일)
//items의 touristCd - 관광객 코드
//items의 touristNm - 관광객 구분명
//items의 tourNum - 관광객 수
//items의 baseYmd - 기준 년월일

function Detail(props) {
	const [Appear, setAppear] = useState(false);
	
	const init = () => {
		if(location.state.IsShare == true) {
			setAppear(true)
		}
	}
	
	const closeModal = () => {
		setAppear(false);
	};

	const [width, setwidth] = useState(0);
	const [Rankings, setRankings] = useState([]);
	const [Details, setDetails] = useState([]);
	const dragAreaRef = useRef(null);
	const location = useLocation();
	
	const num = location.state.num;
	

	const navigate = useNavigate();

	let items = [
		{
			num: 1,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '장소이름1',
			loc_info: '주소1',
			dayCd: 1,
			dayNm: '월요일',
			touristCd: 1,
			touristNm: '현지인(a)',
			tourNum: 30107,
			baseYmd: 20210513,
			down_loc: 128.7273531,
			up_loc: 35.3490459,
			left_loc: 320,
			right_loc: -40
		},
		{
			num: 2,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '장소이름2',
			loc_info: '주소2',
			dayCd: 2,
			dayNm: '화요일',
			touristCd: 2,
			touristNm: '외지인(b)',
			tourNum: 284354,
			baseYmd: 20210514,
			down_loc: 128.7273531,
			up_loc: 35.3490459,
			left_loc: 320,
			right_loc: -40
		},
		{
			num: 3,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '명동 몰토 카페',
			loc_info: '서울 중구 명동길 73 3층',
			dayCd: 3,
			dayNm: '수요일',
			touristCd: 2,
			touristNm: '외지인(b)',
			tourNum: 484354,
			baseYmd: 20210515,
			down_loc: 128.7273531,
			up_loc: 35.3490459,
			left_loc: 320,
			right_loc: -40
		},
		{
			num: 4,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '서울 젠틀몬스터 팝업스토어',
			loc_info: '서울 중구 소공로 63 신세계백화점 명동점 신관 1층',
			dayCd: 4,
			dayNm: '목요일',
			touristCd: 3,
			touristNm: '외국인(c)',
			tourNum: 234826,
			baseYmd: 20210516,
		},
		{
			num: 5,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '전주 한벽굴 - 스물다섯 스물하나 촬영지',
			loc_info: '전북 전주시 완산구 교동',
			dayCd: 5,
			dayNm: '금요일',
			touristCd: 3,
			touristNm: '외국인(c)',
			tourNum: 146631,
			baseYmd: 20210517,
		},
		{
			num: 6,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '부산 흰여울 문화마을 해변 터널',
			loc_info: '부산광역시 영도구 영선동4가',
			dayCd: 6,
			dayNm: '토요일',
			touristCd: 2,
			touristNm: '외지인(b)',
			tourNum: 282352,
			baseYmd: 20210518,
		},
	];

	useEffect(() => {
		

		let body = {
			Num: num,
		};
		Axios.post('https://korea-app.run.goorm.io/api/data/Detail/:num', body).then((response) => {
			console.log(response.data[0]);
			setDetails(response.data[0]);
		});
		setwidth(dragAreaRef.current.scrollWidth - dragAreaRef.current.offsetWidth);
	}, []);

	return (
		<div
			className="fixed"
			style={{
				backgroundRepeat: 'no-repeat',
				backgroundImage: 'url(' + `${Details.imageSrc}` + ')',
				backgroundPosition: 'center top',
			}}
		>
			<div className="locName_and_btn_back">
				<Link to="/">
					<IoIosArrowBack size="30" color="#FFE9BD" />
				</Link>
				{Details.title}
			</div>

			<div>
				<img src="#" onError={init} />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>

			<motion.div
				ref={dragAreaRef}
				whileTap={{ cursor: 'grabbing' }}
				className="KeenSlider"
				drag="y"
				dragConstraints={{ top: -850, bottom: 200 }}
				style={{ width: '100%', height: '100%' }}
			>
				<div className="line">-</div>

				<div className="loc_info_expln">
					<div className="loc_name">젠틀가든 팝업 스토어(여기에 장소 이름!!)</div>
					<div className="loc_explanation">
						장소설명 넣으면 됩니당
						<br />
						(젠틀몬스터가 블랙핑크 제니와 협업한 프로젝트 ‘JENTLE GARDEN: 젠틀가든’ 팝업
						공간으로, 젠틀몬스터와 제니가 함께 상상한 판타지 세계를 다양한 디오라마
						설치물과 화려한 꽃, 핑크빛 호수 등을 활용해 몽환적인 공간으로 재현했습니다.)
						<br />
					</div>
				</div>

				<br />
				<div className="conges_info">
					<div className="conges_info_inner">
						<div className="d_cong">요일별 혼잡도</div>
						<div className="d_cong_expln">
							* 월-일 일주일 간 방문객 수를 나타낸 혼잡도입니다.
						</div>

						<div className="days">
							월&nbsp;&nbsp;&nbsp;&nbsp;화&nbsp;&nbsp;&nbsp;&nbsp;수&nbsp;&nbsp;&nbsp;&nbsp;목&nbsp;&nbsp;&nbsp;&nbsp;금&nbsp;&nbsp;&nbsp;&nbsp;토&nbsp;&nbsp;&nbsp;&nbsp;일
						</div>
						<div className="cong_circles">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className="c_green">.</div>&nbsp;&nbsp;&nbsp;
							<div className="c_green">.</div>&nbsp;&nbsp;&nbsp;
							<div className="c_yellow">.</div>&nbsp;&nbsp;&nbsp;
							<div className="c_orange">.</div>&nbsp;&nbsp;&nbsp;
							<div className="c_red">.</div>&nbsp;&nbsp;&nbsp;
							<div className="c_red">.</div>&nbsp;&nbsp;&nbsp;
							<div className="c_orange">.</div>
							<br />
							<br />
							<br />
							<br />
						</div>
						<br />
						<br />
					</div>
				</div>

				<br />
				<br />
				<br />

				<div className="map_div">
					<div className="loc_info_with_map">위치정보</div>

					<div className="map_and_expln">
						해당 장소의 위치 정보 입니다.
						<DETAIL>
							<Compo>
								<Button>장소 위치</Button>
							</Compo>

							<div>
								<Detailmap
									num={items[1].num}
									up_loc={items[1].up_loc}
									down_loc={items[1].down_loc}
									left_loc={items[1].left_loc}
									right_loc={items[1].right_loc}
								/>
							</div>
						</DETAIL>
					</div>
				</div>

				<br />
				<br />
				<br />

				<div className="photo_div">
					<div className="photos_collection">사진 모음</div>
					<div className="img_and_expln">
						방문자 및 한국관광공사 제공 사진입니다.
						<div style={{ width: '100%', height: '100%' }} className="photos">
							<motion.div
								ref={dragAreaRef}
								className="dragAreaRef"
								whileTap={{ cursor: 'grabbing' }}
							>
								<motion.div
									style={{ width: '100%', height: '100%' }}
									drag="x"
									dragConstraints={{ right: 0, left: -650 }}
									className="inner-carousel"
								>
									{items.map((array) => {
										return (
											<motion.div className="item7777" key={array.image}>
												<div>
													<img src={array.image} alt="" />
												</div>
											</motion.div>
										);
									})}
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</motion.div>
			<div>
			<React.Fragment>
				{location.state.IsShare && (
					<Share_modal
						visible={Appear}
						closable={true}
						maskClosable={true}
						onClose={closeModal}
						titles="임시이름"
					></Share_modal>
				)}
			</React.Fragment>
		</div>
		</div>
	);
}

export default Detail;

const Compo = styled.div`
	padding: 18px;
	background-color: white;
	display: flex;
	height: 50px;
	position: relative;
`;

const Button = styled.button`
	display: absoulte;
	font-size: 15px;
	cursor: pointer;
	border: 0;
	outline: 0;
	background-color: #ffffff;
`;

const DETAIL = styled.div`
	margin: auto;

	right: 0;
	width: 100%;
	height: calc(100vh - 180px);

	background-color: #ffffff;

	z-index: 5;
`;
