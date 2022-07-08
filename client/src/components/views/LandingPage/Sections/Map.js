/* global kakao */
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import InfoPage from "./InfoPage"
import styled from "styled-components";
//const { kakao } = window;

const InfoButton = styled.button`
  		background-color: white;
  		color: ${props => props.color};
        width: 80px;
        height: 40px;
        position: absolute;
        padding: 0;
        margin: 10px;
		border: 1px solid ${props => props.color};
`;

const Map = () => {
	const[ButtonColor, setButton] = useState('#18978F');
	const[showInfo, setShowInfo] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [imageSrcs, setimageSrcs] = useState("");
	const aicontent = useSelector((state) => state.user);
	//console.log(aicontent.aiSuccess);
	const show = () => {
		setShowInfo(!showInfo);
		ButtonColor === '#18978F' ? setButton('#FF869E') : setButton('#18978F');
	}
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
		/*var markerPosition1 = new kakao.maps.LatLng(37.48537038266118, 126.81216094099648);
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
		*/
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '카카오', 
        latlng: new kakao.maps.LatLng(33.450705, 126.570677),
		imageSrc: "https://ak-d.tripcdn.com/images/1i60l22158ewabw9t1A4F.jpg?proc=source/trip"
    },
    {
        title: '생태연못', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
		imageSrc: "https://ak-d.tripcdn.com/images/1i60l22158ewabw9t1A4F.jpg?proc=source/trip"
    },
    {
        title: '텃밭', 
        latlng: new kakao.maps.LatLng(33.450879, 126.569940),
		imageSrc: "https://ak-d.tripcdn.com/images/1i60l22158ewabw9t1A4F.jpg?proc=source/trip"
    },
    {
        title: '근린공원',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
		imageSrc: "https://ak-d.tripcdn.com/images/1i60l22158ewabw9t1A4F.jpg?proc=source/trip" 
    }
];

// 마커 이미지의 이미지 주소입니다

    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize3 = new kakao.maps.Size(64, 69); 
    var imageOption3 = { offset: new kakao.maps.Point(27, 69) };
    // 마커 이미지를 생성합니다    
    var markerImage3 = new kakao.maps.MarkerImage(positions[i].imageSrc, imageSize3,imageOption3); 
    
    // 마커를 생성합니다
    var marker3 = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage3 // 마커 이미지 
    });
	
	kakao.maps.event.addListener(marker3, 'click', function () {
			
			setModalVisible(true);
			setimageSrcs(positions[i].imageSrc)
			
			
		});
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
							></Modal>
						)}
					</React.Fragment>
				</div>
				<InfoPage isOpen={showInfo} handleClose={show} style={{justifyContent: 'center'}}></InfoPage>
			</div>
			
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<InfoButton color={ButtonColor} onClick={show}>전체보기</InfoButton>
	
			</div>
			<br/>
			<div class="addthis_inline_share_toolbox_mxdj"></div>
			<br/>
			<br/>
			<br/>
			<br/>
			
			
		</div>
	);
};

export default Map;