/* global kakao */
import React, { useState, useEffect } from 'react';
import Modal from '../LandingPage/Sections/Modal';
import { useSelector } from 'react-redux';
import InfoPage from '../LandingPage/Sections/InfoPage';
import styled from 'styled-components';
import Axios from 'axios'


const InfoButton = styled.button`
	background-color: white;
	color: ${(props) => props.color};
	width: 80px;
	height: 40px;
	position: absolute;
	padding: 0;
	margin: 10px;
	border: 1px solid ${(props) => props.color};
`;

const Container = styled.div`
  margin-left:auto;
  margin-right:auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 10px;
  background-color: #FFFFFF;
  flex-direction: column;
  position:relative;
  @media (min-width: 800px) {
    width: 600px;
    height: 94vh;
    /* border:1px solid #95afc0; */
    /* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
  }
`;

const AImap = () => {
	const [ButtonColor, setButton] = useState('#18978F');
	const [showInfo, setShowInfo] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [imageSrcs, setimageSrcs] = useState('');
	const [contents, setcontents] = useState('');
	const [Titles, setTitles] = useState('');
	const [SubContent,setSubContent] = useState([]);
	const [SubimageSrcs,setSubimageSrcs] = useState([]);
	const [Nums, setNums] = useState([]);
	const [Citye, setCitye] = useState([]);
	
	const aicontent = useSelector((state) => state.user);
	

	
	
	const show = () => {
		setShowInfo(!showInfo);
		ButtonColor === '#18978F' ? setButton('#FF869E') : setButton('#18978F');
	};
	const closeModal = () => {
		setModalVisible(false);
	};
	useEffect(() => {
		const { kakao } = window;
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.486021038352995, 126.80229974931666),
			level: 13,
		};

		var map = new kakao.maps.Map(container, options);

		let body = {
			ainame: aicontent.aiSuccess.prediction,
			ainame2: aicontent.aiSuccess.prediction1,
			ainame3:aicontent.aiSuccess.prediction2,
		};
		
		Axios.post('/api/data/aimap',body)
        .then(response => {
            
		setSubContent(response.data[0].content);
		setSubimageSrcs(response.data[0].imageSrc)
		// 마커 이미지의 이미지 주소입니다
			
		
		var backSize = new kakao.maps.Size(62, 87);
			var backOption = {offset: new kakao.maps.Point(36, 78) };
			var back = new kakao.maps.MarkerImage(
				"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnGqcq%2FbtrLmzjp8fE%2FjUQKh5qVkFIRgmgLsyJoxK%2Fimg.png",
				backSize,
				backOption,
			);
			for (var i = 0; i < response.data.length; i++) {
				// 마커 이미지의 이미지 크기 입니다
				var imageSize3 = new kakao.maps.Size(55, 55);
				var imageOption3 = { offset: new kakao.maps.Point(30.5, 68.5) };
				var markerImage3 = new kakao.maps.MarkerImage(
					response.data[i].imageSrc,
					imageSize3,
					imageOption3
				);
				// 마커를 생성합니다
				var latlngs = new kakao.maps.LatLng(
					response.data[i].uplatlng,
					response.data[i].downlatlng
				);
				var marker3 = new kakao.maps.Marker({
					map: map, // 마커를 표시할 지도
					position: latlngs, // 마커를 표시할 위치
					title: response.data[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
					image: markerImage3, // 마커 이미지
				});
				var backMarker = new kakao.maps.Marker({
					map: map,
					position: latlngs,
					image: back,
				})
				kakao.maps.event.addListener(
					backMarker,
					'click',
					makeOverListener(
						map,
						marker3,
						response.data[i].imageSrc,
						response.data[i].content,
						response.data[i].title,
						response.data[i].num,
						response.data[i].city
					)
				);
				
				backMarker.setMap(map);
				marker3.setMap(map);
			}

			// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
			function makeOverListener(map, marker3, imageSrca, contents, titles, nums,citys) {
				return function () {
					setModalVisible(true);
					setimageSrcs(imageSrca);
					setcontents(contents);
					setTitles(titles);
					setNums(nums);
					setCitye(citys);
				};
			}
		});
	}, []);

	return (
		<Container>
			
			<div
				id="map"
				style={{ width: '90%', height: '70vh', marginLeft: 'auto',marginRight: 'auto',marginTop: '0px', borderRadius: '10px' }}
			>
				<div>
					<React.Fragment>
						{modalVisible && (
							<Modal
								visible={modalVisible}
								closable={true}
								maskClosable={true}
								onClose={closeModal}
								imageSrcs={imageSrcs}
								contents={contents}
								titles={Titles}
								nums={Nums}
								cityd={Citye}
							></Modal>
						)}
					</React.Fragment>
				</div>
				<InfoPage
					isOpen={showInfo}
					handleClose={show}
					style={{ justifyContent: 'center' }}
					SubContent={SubContent}
					SubimageSrcs={SubimageSrcs}
				></InfoPage>
			</div>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<InfoButton color={ButtonColor} onClick={show}>
					결과보기
				</InfoButton>
				
			</div>
			<br />
			<br />
			<br />
			<br />
		</Container>
	);
};

export default AImap;