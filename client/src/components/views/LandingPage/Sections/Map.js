/* global kakao */
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useSelector } from 'react-redux';
const { kakao } = window;

const Map = () => {
	const [modalVisible, setModalVisible] = useState(true);
	const aicontent = useSelector((state) => state.user);
	console.log(aicontent);
	const closeModal = () => {
		setModalVisible(false);
	};
	useEffect(() => {
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.486021038352995, 126.80229974931666),
			level: 10,
		};

		var map = new kakao.maps.Map(container, options);

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 마커를 표시할 위치입니다
		var markerPosition = new kakao.maps.LatLng(37.48637170971676, 126.80186916341724);
		var imageSrc =
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhRk06-nfObLkWTnoLLflwUciu_lbjOzpufdZepvPEDQ9bhxI2uwmCqyH7QkOpxSOWYM&usqp=CAU', // 마커이미지의 주소입니다
			//인스타 게시글 링크로 붙여넣어서 해도 사진 뜨나?????????
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

		// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
		var iwContent =
				'        <div>' +
				'                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhRk06-nfObLkWTnoLLflwUciu_lbjOzpufdZepvPEDQ9bhxI2uwmCqyH7QkOpxSOWYM&usqp=CAU" width="180" height="150">' +
				//'                <br/><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a>' +
				'        </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

		// 인포윈도우를 생성합니다
		var infowindow = new kakao.maps.InfoWindow({
			content: iwContent,
			removable: iwRemoveable,
		});

		// 마커에 클릭이벤트를 등록합니다
		kakao.maps.event.addListener(marker, 'click', function () {
			// 마커 위에 인포윈도우를 표시합니다
			infowindow.open(map, marker);
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

		// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
		var iwContent1 =
				'        <div>' +
				`                <img src=${imageSrc1} width="180" height="150">` +
				//'                <br/><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a>' +
				'        </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

		// 인포윈도우를 생성합니다
		var infowindow1 = new kakao.maps.InfoWindow({
			content: iwContent1,
			removable: iwRemoveable,
		});

		// 마커에 클릭이벤트를 등록합니다
		kakao.maps.event.addListener(marker1, 'click', function () {
			// 마커 위에 인포윈도우를 표시합니다
			infowindow1.open(map, marker1);
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

		// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
		var iwContent2 =
				'        <div>' +
				'                <img src="https://ak-d.tripcdn.com/images/1i60l22158ewabw9t1A4F.jpg?proc=source/trip" width="180" height="150">' +
				'        </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			iwRemoveable2 = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

		// 인포윈도우를 생성합니다
		var infowindow2 = new kakao.maps.InfoWindow({
			content: iwContent2,
			removable: iwRemoveable2,
		});

		// 마커에 클릭이벤트를 등록합니다
		kakao.maps.event.addListener(marker2, 'click', function () {
			// 마커 위에 인포윈도우를 표시합니다
			infowindow2.open(map, marker2);
		});
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	}, []);

	return (
		<div>
			<div id="map" style={{ width: '1530px', height: '670px' }}>
				<div>
					<React.Fragment>
						{modalVisible && (
							<Modal
								visible={modalVisible}
								closable={true}
								maskClosable={true}
								onClose={closeModal}
							></Modal>
						)}
					</React.Fragment>
				</div>
			</div>
		</div>
	);
};

export default Map;