/* global kakao */
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import InfoPage from './InfoPage';
import styled from 'styled-components';
import Axios from 'axios';

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

const Map = () => {
	const [ButtonColor, setButton] = useState('#18978F');
	const [showInfo, setShowInfo] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [imageSrcs, setimageSrcs] = useState('');
	const [contents, setcontents] = useState('');
	const [Titles, setTitles] = useState('');
	const [Nums, setNums] = useState([]);

	const show = () => {
		setShowInfo(!showInfo);
		ButtonColor === '#18978F' ? setButton('#FF869E') : setButton('#18978F');
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	useEffect(() => {
		
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.486021038352995, 126.80229974931666),
			level: 13,
		};

		var map = new kakao.maps.Map(container, options);

		Axios.get('https://korea-app.run.goorm.io/api/data/map').then((response) => {
			// 마커 이미지의 이미지 주소입니다

			for (var i = 0; i < response.data.length; i++) {
				// 마커 이미지의 이미지 크기 입니다
				var imageSize3 = new kakao.maps.Size(64, 69);
				var imageOption3 = { offset: new kakao.maps.Point(27, 69) };
				// 마커 이미지를 생성합니다
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

				kakao.maps.event.addListener(
					marker3,
					'click',
					makeOverListener(map, marker3, response.data[i].imageSrc, response.data[i].content, response.data[i].title, response.data[i].num)
				);
			}

			// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
			function makeOverListener(map, marker3, imageSrca, contents, titles, nums) {
				return function () {
					setModalVisible(true);
					setimageSrcs(imageSrca);
					setcontents(contents);
					setTitles(titles);
					setNums(nums);
				};
			}
		});
	}, []);

	return (
		<div>
			<br />
			<br />
			<br />
			<div
				id="map"
				style={{ width: '90%', height: '80vh', margin: 'auto', borderRadius: '20px' }}
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
							></Modal>
						)}
					</React.Fragment>
				</div>
				<InfoPage
					isOpen={showInfo}
					handleClose={show}
					style={{ justifyContent: 'center' }}
				></InfoPage>
			</div>
		</div>
	);
};

export default Map;