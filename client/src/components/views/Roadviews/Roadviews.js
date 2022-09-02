import { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './Roadviews.css';

const Roadviews = (props) => {
	/*global kakao*/
	const history=useNavigate();
	const location = useLocation();
	useEffect(() => {
		console.log(location.state.up_loc, location.state.down_loc);
		const { kakao } = window;
		var img = document.createElement('img');
		img.id = 'overlayImg';
		img.src =location.state.image;
		console.log(location.state.image);
		const roadviewContainer = document.getElementById('roadview');
		const roadview = new kakao.maps.Roadview(roadviewContainer);
		const roadviewClient = new kakao.maps.RoadviewClient();
		const position = new kakao.maps.LatLng(location.state.up_loc, location.state.down_loc);

		roadviewClient.getNearestPanoId(position, 50, function (panoId) {
			roadview.setPanoId(panoId, position);
		});
		kakao.maps.event.addListener(roadview, 'init', function () {
			//로드뷰의 viewpoint값을 적절하게 이동시킵니다.
			roadview.setViewpoint(
				new kakao.maps.Viewpoint(location.state.left_loc, location.state.right_loc, -3)
			);

			//커스텀 오버레이를 로드뷰 위에 올립니다.
			var customOverlay=new kakao.maps.CustomOverlay({
				map: roadview,
				position: new kakao.maps.Viewpoint(
					location.state.left_loc,
					location.state.right_loc
				),
				content: img,
				setRange: 30
				
			});
			customOverlay.setRange(30);
		});
	});
	return (
		<Detail>
			<Compo>
				<BiArrowBack size="30" color="#000000" onClick={()=> history(-1)}/>	
			</Compo>
			<View id="roadview" />
		</Detail>
	);
};

export default Roadviews;

const View = styled.div`
	width: 100%;
	height: 100%;
`;

const Compo = styled.div`
	padding: 18px;
	background-color: white;
	display: flex;
	height: 60px;
	align-items:center;
	position: relative;
`;


const Detail = styled.div`
	margin: auto;

	right: 0;
	width: 100%;
	height: calc(100vh - 180px);

	background-color: #ffffff;

	z-index: 5;
`;