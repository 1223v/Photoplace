/* global kakao */
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import InfoPage from './InfoPage';
import styled from 'styled-components';
//const { kakao } = window;

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
	const aicontent = useSelector((state) => state.user);
	//console.log(aicontent.aiSuccess);
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

		var positions = [
			{
				title: '카카오',
				content: '카카오',
				latlng: new kakao.maps.LatLng(33.450705, 126.570677),
				imageSrc:
					'https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDhfNTcg/MDAxNjI1Njk5NTY4MzMy.zA5Xni1yJz4czhUhfL4wiPfRHPnLrXJPxbR96kDBU2kg.j8m-qT3T4fiF9kpWzWuKhkQUEoM-kN_lfrL23n18IFEg.JPEG.arlaflgk006/SE-934880cc-939e-4719-b604-4849a2ea0685.jpg?type=w800',
			},
			{
				title: '생태연못',
				content: '생태연못',
				latlng: new kakao.maps.LatLng(33.450936, 126.569477),
				imageSrc: 'https://i1.sndcdn.com/artworks-Z5SLEGyINrvdjrkz-CQbgFA-t500x500.jpg',
			},
			{
				title: '텃밭',
				content: '텃밭',
				latlng: new kakao.maps.LatLng(33.450879, 126.56994),
				imageSrc: 'https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg',
			},
			{
				title: '근린공원',
				content: '근린공원',
				latlng: new kakao.maps.LatLng(33.451393, 126.570738),
				imageSrc:
					'https://blog.kakaocdn.net/dn/NuIEf/btraPurzdkd/aGFxQ0JKL0wD3BLYQX4NNk/img.jpg',
			},
		];

		// 마커 이미지의 이미지 주소입니다

		for (var i = 0; i < positions.length; i++) {
			// 마커 이미지의 이미지 크기 입니다
			var imageSize3 = new kakao.maps.Size(64, 69);
			var imageOption3 = { offset: new kakao.maps.Point(27, 69) };
			// 마커 이미지를 생성합니다
			var markerImage3 = new kakao.maps.MarkerImage(
				positions[i].imageSrc,
				imageSize3,
				imageOption3
			);
			var imageSrca = positions[i].imageSrc;
			var contents = positions[i].content;
			var titles = positions[i].title;
			
			// 마커를 생성합니다
			var marker3 = new kakao.maps.Marker({
				map: map, // 마커를 표시할 지도
				position: positions[i].latlng, // 마커를 표시할 위치
				title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
				image: markerImage3, // 마커 이미지
			});

			kakao.maps.event.addListener(
				marker3,
				'click',
				makeOverListener(map, marker3, imageSrca, contents,titles)
			);
		}

		// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
		function makeOverListener(map, marker3, imageSrca, contents,titles) {
			return function () {
				setModalVisible(true);
				setimageSrcs(imageSrca);
				setcontents(contents);
				setTitles(titles)
			};
		}
	}, []);

	return (
		<div>
			<div
				id="map"
				style={{ width: '90%', height: '80vh', margin: 'auto', borderRadius: '30px' }}
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

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<InfoButton color={ButtonColor} onClick={show}>
					전체보기
				</InfoButton>
			</div>
			<br />
			<div class="addthis_inline_share_toolbox_mxdj"></div>
			<br />
			<br />
			<br />
		</div>
	);
};

export default Map;