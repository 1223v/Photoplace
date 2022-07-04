/* global kakao */
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useSelector } from 'react-redux';
//const { kakao } = window;

const Map = () => {
	
	const [modalVisible, setModalVisible] = useState(false);
	const [imageSrcs, setimageSrcs] = useState("");
	const aicontent = useSelector((state) => state.user);
	//console.log(aicontent.aiSuccess);
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

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 마커를 표시할 위치입니다
		var markerPosition = new kakao.maps.LatLng(37.48637170971676, 126.80186916341724);
		var imageSrc =
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhRk06-nfObLkWTnoLLflwUciu_lbjOzpufdZepvPEDQ9bhxI2uwmCqyH7QkOpxSOWYM&usqp=CAU', // 마커이미지의 주소입니다
			imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage, // 마커이미지 설정
			clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
		});

		// 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
		// 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
		// marker.setClickable(true);

		// 마커를 지도에 표시합니다.
		marker.setMap(map);

		// 마커에 클릭이벤트를 등록합니다
		kakao.maps.event.addListener(marker, 'click', function () {
			// 마커 위에 인포윈도우를 표시합니다
			//setimageSrcs("")
			setModalVisible(true);
			setimageSrcs(imageSrc)
			
			
		});
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 마커를 표시할 위치입니다
		var markerPosition1 = new kakao.maps.LatLng(37.48537038266118, 126.81216094099648);
		var imageSrc1 =
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhRk06-nfObLkWTnoLLflwUciu_lbjOzpufdZepvPEDQ9bhxI2uwmCqyH7QkOpxSOWYM&usqp=CAU', // 마커이미지의 주소입니다
			imageSize1 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imageOption1 = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1);

		// 마커를 생성합니다
		var marker1 = new kakao.maps.Marker({
			position: markerPosition1,
			image: markerImage1, // 마커이미지 설정
			clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
		});

		// 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
		// 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
		// marker.setClickable(true);

		// 마커를 지도에 표시합니다.
		marker1.setMap(map);

				// 마커에 클릭이벤트를 등록합니다
		kakao.maps.event.addListener(marker1, 'click', function () {
			// 마커 위에 인포윈도우를 표시합니다
			//setimageSrcs("")
			setModalVisible(true);
			setimageSrcs(imageSrc1)
			
			
		});
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 마커를 표시할 위치입니다
		var markerPosition2 = new kakao.maps.LatLng(37.4829471177741, 126.79612326284906);
		var imageSrc2 =
				'https://ak-d.tripcdn.com/images/1i60l22158ewabw9t1A4F.jpg?proc=source/trip', // 마커이미지의 주소입니다
			imageSize2 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imageOption2 = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2);

		// 마커를 생성합니다
		var marker2 = new kakao.maps.Marker({
			position: markerPosition2,
			image: markerImage2, // 마커이미지 설정
			clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
		});

		// 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
		// 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
		// marker.setClickable(true);

		// 마커를 지도에 표시합니다.
		marker2.setMap(map);

				// 마커에 클릭이벤트를 등록합니다
		kakao.maps.event.addListener(marker2, 'click', function () {
			// 마커 위에 인포윈도우를 표시합니다
			//setimageSrcs("")
			setModalVisible(true);
			setimageSrcs(imageSrc2)
			
			
		});
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
							></Modal>
						)}
					</React.Fragment>
				</div>
			</div>
			
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<button type="button" class="btn btn-outline-primary">전체보기</button>
			</div>
			<br/>
			<br/>
			<br/>
		</div>
	);
};

export default Map;