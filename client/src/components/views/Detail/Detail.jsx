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
import DetailSlide from './DetailSlide';
import { useShare } from '../Context/forShareModal';
import { navUser } from '../../../_actions/user_actions';
import { GrLocation } from 'react-icons/gr';
import { MdContentCopy } from 'react-icons/md';
import { useDispatch } from 'react-redux';

function Detail(props) {
	const {Appear, setAppear, setTitle, setNum, setDesc, setImg} = useShare();
	
	const closeModal = () => {
		setAppear(false);
	};

	const [Details, setDetails] = useState([]);
	const [Decity, setDecity] = useState([]);
	const dragAreaRef = useRef(null);
	const dispatch = useDispatch();
	let { id } = useParams();

	useEffect(() => {		
		let body = {
			Num: id,
		};

		Axios.post('/api/data/Detail/' + id, body).then((response) => {
			setDetails(response.data[0]);
			
			//kihun	
			let num = parseInt(document.URL.match(/\d+/g));
			setNum(num);
			setTitle(response.data[0].title);
			setDesc(response.data[0].content);
			setImg(response.data[0].imageSrc);
			///kihun
			
			let decity = response.data[0].city;
			let decitys = decity.split(' ', 2);
			setDecity(decitys);

			dispatch(navUser(response.data[0].title));
		});
		
		const url = document.URL;
		if (url.includes('true')) {
			setAppear(true);
		}
		
	}, []);

	//<br/>왕창 준거 줄이면(or 늘리면) keenSlider 사진근처로 이동
	//animate={{y:-110}} <-- 페이지 새로고침했을 때 keenSlider 시작위치
	
	const handleCopyClipBoard = async (e) => {
		let city = Details.city;
		let cityfs =(city||'').split('[', 2);
		if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      	}
		try {
		  await navigator.clipboard.writeText(cityfs[0]);
		  alert('복사 성공!');
		} catch (error) {
			try{
				const txt =  document.createElement('input');
				txt.value = city;
				document.body.appendChild(txt);
				txt.select();
				await document.execCommand("copy");
				document.body.removeChild(txt);
				alert('복사 성공!');
			}
			catch(error){
				try {
					e.preventDefault();
					e.clipboardData.setData(cityfs[0], cityfs[0]);
					alert('복사 성공!');
				}
				catch(error) {
					return alert('복사 실패');
				}
			}
		}
	  };
	
	return (
		<div
			className="fixed"
			style={{
				backgroundRepeat: 'no-repeat',
				backgroundImage: 'url(' + `${Details.imageSrc}` + ')',
				backgroundPosition: 'center 1%',
			}}
		>
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
					style={{ width: '100%', height: '100%' }}
					initial={{ y: 0 }}
				>
					<div className="loc_info_expln">
						<br />
						<div className="loc_name">{Details.title}</div>
						<div className="loccity">
							<GrLocation size="12" />
							{Decity[0]} {Decity[1]}
						</div>
						<br/>
						<div className="loc_explanation">{Details.content}</div>
						<br/>
						<div className="loctag">
							<b style={{backgroundColor:"#D3D3D3"}}>#{Details.tag_1}</b> <b style={{backgroundColor:"#D3D3D3"}}>#{Details.tag_2}</b> <b style={{backgroundColor:"#D3D3D3"}}>#{Details.tag_3}</b> <b style={{backgroundColor:"#D3D3D3"}}>#{Details.tag_4}</b>
						</div>
					</div>

					<br />
					<div className="conges_info">
						<Detailinfo cityinfo={Details.city} />
					</div>

					<br />
					<br />
					<hr />

					<div className="map_div">
						<div className="loc_info_with_map">위치정보</div>

						<div className="map_and_expln">
							<DETAIL>
								<Compo>
									<div>										
										{Details.city}&nbsp; 
										<MdContentCopy size="17" onClick={handleCopyClipBoard}/>
									</div>
								</Compo>

								<div>
									<Detailmap
										num={Details.num}
										image={Details.imSrc}
										loc_name={Details.city}
										up_loc={Details.uplatlnged}
										down_loc={Details.downlatlnged}
										left_loc={Details.leftlng}
										right_loc={Details.rightlng}
									/>
								</div>
							</DETAIL>
						</div>
					</div>

					<div className="photo_div">
						<br />
						<hr />
						<div className="photos_collection">사진 모음</div>
						<div className="img_and_expln">
							방문자 및 한국관광공사 제공 사진입니다.
							<DetailSlide cityinfo={Details.city}></DetailSlide>
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
							titles={Details.title}
							description={Details.content}
							img={Details.imageSrc}
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
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
`;

const DETAIL = styled.div`
	margin-top: 10px;
	border: 3px solid #f2f2f2;
	border-radius: 15px;
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