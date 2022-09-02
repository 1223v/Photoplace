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
import { navUser } from '../../../_actions/user_actions';
import { useDispatch} from 'react-redux';

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
	const dispatch = useDispatch();
	let { id } = useParams();

 let Detailse = [
      {
         num: 0,
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
         right_loc: -40,
      },
      {
         num: 1,
         imSrc:
            'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRlsU4%2FbtrKgr7ub4S%2FzBMoMdwKKnobu3Vfd7IQz0%2Fimg.png',
         city: '장소이름2',
         loc_info: '주소2',
         dayCd: 2,
         dayNm: '화요일',
         touristCd: 2,
         touristNm: '외지인(b)',
         tourNum: 284354,
         baseYmd: 20210514,
         downlatlnged: 126.62274408181165,
         uplatlnged: 37.47545865728303,
         leftlng: 150,
         rightlng: 0,
      }
   ];


	useEffect(() => {
		let body = {
			Num: id,
		};
		
		Axios.post('/api/data/Detail/' + id, body).then((response) => {
			setDetails(response.data[0]);
			console.log(response.data[0].title);
			
			dispatch(navUser(response.data[0].title));
			
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
					<hr/>
					
					<div className="map_div">
						<div className="loc_info_with_map">위치정보</div>

						<div className="map_and_expln">
							
							<DETAIL>
								<Compo>
									<div>{Details.city}</div>
								</Compo>

								<div>
									<Detailmap
										num={Detailse[1].num}
										image={Detailse[1].imSrc}
										loc_name = {Detailse[1].city}
										up_loc={Detailse[1].uplatlnged}
										down_loc={Detailse[1].downlatlnged}
										left_loc={Detailse[1].leftlng}
										right_loc={Detailse[1].rightlng}
									/>
								</div>
							</DETAIL>
						</div>
					</div>
					
					<hr/>
				
					<div className="photo_div">
						<div className="photos_collection">사진 모음</div>
						<div className="img_and_expln">
							방문자 및 한국관광공사 제공 사진입니다.
							<div style={{ width: '100%'}} className="photos">
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
										{Detailse.map((array, index) => {
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
	margin-top: 10px;
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