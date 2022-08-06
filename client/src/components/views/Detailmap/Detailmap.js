import { useEffect } from 'react';
import { BiWebcam } from 'react-icons/bi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Detailmap = (props) => {
	/*global kakao*/
	useEffect(() => {
		kakao.maps.load(() => {
			const container = document.getElementById('map1'),
				options = {
					center: new kakao.maps.LatLng(props.up_loc, props.down_loc),
					level: 3,
					scrollwheel: false,
					draggable: false,
				};
			const map = new kakao.maps.Map(container, options);
			const circle = new kakao.maps.Circle({
				center: new kakao.maps.LatLng(props.up_loc, props.down_loc),
				radius: 50,
				strokeWeight: 5,
				strokeColor: '#ffa409',
				strokeOpacity: 1,
				strokeStyle: 'dashed',
				fillColor: '#ffa409',
				fillOpacity: 0.5,
			});

			circle.setMap(map);
		});
	});

	return (
		<MAP id="map1">
			<Button>
				<Link
					to={'/Roadviews'}
					state={{num:props.num, up_loc: props.up_loc, down_loc: props.down_loc, left_loc: props.left_loc, right_loc: props.right_loc}}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<BiWebcam size="25" />
					로드뷰보기
				</Link>
			</Button>
		</MAP>
	);
};

const MAP = styled.div`
	position: relative;

	width: 100%;
	height: 306px;
`;

const Button = styled.button`
	z-index: 5;
	position: absolute;
	text-align: center;
	border: 1px solid rgb(238, 238, 238);
	bottom: 0px;
	padding: 13px;
	height: 47px;
	width: 100%;
	background-color: white;
	font-size: 16px;
	cursor: pointer;
`;

export default Detailmap;