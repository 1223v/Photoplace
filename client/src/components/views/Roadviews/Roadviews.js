import { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './Roadviews.css';

const Roadviews = (props) => {
	/*global kakao*/
	const location = useLocation();
	useEffect(() => {
		var img = document.createElement('img');
		img.id = 'overlayImg';
		img.src =
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FG0YYM%2FbtrIXxAjM1u%2FYtXlXpsFIEYkWKPab038JK%2Fimg.png';

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
			new kakao.maps.CustomOverlay({
				map: roadview,
				position: new kakao.maps.Viewpoint(
					location.state.left_loc,
					location.state.right_loc
				),
				content: img,
			});
		});
	});
	return (
		<Detail>
			
			<Compo>
				<Link
					to={`/Detail/${location.state.num}`}
					state={{num:location.state.num}}
					key={location.key}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					{BiArrowBack()}
					돌아가기
				</Link>
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
	height: 50px;
	position: relative;
`;

const Button = styled.button`
	display: absoulte;
	font-size: 15px;
	cursor: pointer;
	border: 0;
	outline: 0;
	background-color: #ffffff;
`;

const Detail = styled.div`
	margin: auto;

	right: 0;
	width: 100%;
	height: calc(100vh - 180px);

	background-color: #ffffff;

	z-index: 5;
`;