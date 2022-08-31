/* global kakao */
import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; //이미지 상단 <버튼 누르면 뒤로가기 구현 관련
import Sharemodal from '../LandingPage/Sections/ShareModal';
import Detailmap from '../Detailmap/Detailmap';
import '../../../index.css';
import Detailinfo from './Detailinfo';
import {useShare} from '../Context/forShareModal';

function Detail(props) {
	const {Appear, setAppear} = useShare();

	const init = () => {
		const url = document.URL;
		if (url.includes('true')) {
			setAppear(true);
		}
	};

	const closeModal = () => {
		setAppear(false);
	};
	
	const [Details, setDetails] = useState([]);
	const dragAreaRef = useRef(null);

	let { id } = useParams();

	let items = [
		{
			num: 0,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdAkhzL%2FbtrKkSb8Uwu%2FnXvvbZjHBykkBGmGdcOJIK%2Fimg.png',
			loc_name: '장소이름1',
			loc_info: '주소1',
			dayCd: 1,
			dayNm: '월요일',
			touristCd: 1,
			touristNm: '현지인(a)',
			tourNum: 30107,
			baseYmd: 20210513,
			down_loc: 126.99743695587028,
			up_loc: 37.710686362916505,
			left_loc: 0,
			right_loc: 0,
		},
		{
			num: 1,
			image:'https://blog.kakaocdn.net/dn/b6AJOq/btrKkgD7fRq/sxnHxFizAteJBSt2OORVR1/img.png',
			loc_name: '장소이름2',
			loc_info: '주소2',
			dayCd: 2,
			dayNm: '화요일',
			touristCd: 2,
			touristNm: '외지인(b)',
			tourNum: 284354,
			baseYmd: 20210514,
			down_loc: 126.69192912457233,
			up_loc: 35.3487825609607235,
			left_loc: 220,
			right_loc: 0,
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
			right_loc: -40,
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
			Num: id,
		};
		Axios.post('/api/data/Detail/' + id, body).then((response) => {
			setDetails(response.data[0]);
			
			
		});
		
	}, []);

	
	//<br/>왕창 준거 줄이면(or 늘리면) keenSlider 사진근처로 이동
	//animate={{y:-110}} <-- 페이지 새로고침했을 때 keenSlider 시작위치
	
	return (
		<div
			className="fixed"
			style={{
				backgroundRepeat: 'no-repeat',
				backgroundImage: 'url(' + `${Details.imageSrc}` + ')',
				backgroundPosition: 'center 8%',
			}}
		>
			<img src="#" onError={init} alt="profile" />
			<br />
			<br />
			<br />
			<br />

			<div>
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
				
				
			</div>
			<Container>
				<motion.div
					ref={dragAreaRef}
					whileTap={{ cursor: 'grabbing' }}
					className="KeenSlider"
					drag="y"
					dragConstraints={{ top: -1050, bottom: 0 }}
					style={{ width: '100%', height: '100%'}}
					
					initial={{y: 0}}
				>
					<div className="loc_info_expln">
						<br/>
						<div className="loc_name">{Details.title}</div>
						<div className="loc_explanation">{Details.content}</div>
					</div>

					<br />
					<div className="conges_info">
						<Detailinfo cityinfo ={Details.city}/>
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
									<div>{Details.city}</div>
								</Compo>

								<div>
									<Detailmap
										num={items[1].num}
										image={items[1].image}
										loc_name = {items[1].loc_name}
										up_loc={items[1].up_loc}
										down_loc={items[1].down_loc}
										left_loc={items[1].left_loc}
										right_loc={items[1].right_loc}
									/>
								</div>
							</DETAIL>
						</div>
					</div>

		
					<div className="photo_div">
						<div className="photos_collection">사진 모음</div>
						<div className="img_and_expln">
							방문자 및 한국관광공사 제공 사진입니다.
							<div style={{ width: '100%' }} className="photos">
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
										{items.map((array, index) => {
											return (
												<motion.div className="item7777" key={index}>
													<div>
														<img src={array.image} alt="" />
													</div>
												</motion.div>
											);
										})}
									</motion.div>
								</motion.div>
								<br/>
							</div>
						</div>
					</div>					
					
				</motion.div>
			</Container>
			<div>
				<React.Fragment>
					{Appear && (
						<Sharemodal
							visible={Appear}
							closable={true}
							maskClosable={true}
							onClose={closeModal}
							titles= {Details.title}
							description = {Details.content}
							img = {Details.imageSrc}
						></Sharemodal>
					)}
				</React.Fragment>
			</div>
		</div>
	);
}

export default Detail;

const Compo = styled.div`
	padding: 5px;
	background-color: white;
	display: flex;
	height: 40px;
	position: relative;
	align-items: center;
	border-top-right-radius:15px;
	border-top-left-radius:15px;
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
	border: 3px solid #f2f2f2;
	border-radius:15px;
	right: 0;
	width: 100%;
	height: 100%;

	background-color: #ffffff;

	z-index: 5;
`;

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
	flex-direction: column;
	position: relative;
	font-family: 'loadingpage_font';
	@media (min-width: 800px) {
		width: 600px;
		height: 100vh;
		/* border:1px solid #95afc0; */
		/* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
	}
`;