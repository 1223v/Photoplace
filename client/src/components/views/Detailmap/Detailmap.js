import { useEffect } from 'react';
import { BiWebcam } from 'react-icons/bi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//<BiWebcam size="25" />

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
		//이 부분은 윤기훈이 수정함 꼬이면 알려주세요
		<MAP id="map1">
			<Button>	
				<LeftBox>
					<Link
						to={'/Roadviews'}
						state={{num:props.num, up_loc: props.up_loc, down_loc: props.down_loc, left_loc: props.left_loc, right_loc: props.right_loc, image: props.image}}
						style={{ textDecoration: 'none', color: 'black' }}
					>
						로드뷰보기
					</Link>
				</LeftBox>
				<RightBox>
					<a
						href={"https://map.kakao.com/link/to/" + props.loc_name + "," + props.up_loc + "," + props.down_loc}
						target='_blank'
						style={{ textDecoration: 'none', color: 'black' }}
					>
						길찾기
					</a>
				</RightBox>
			</Button>
		</MAP>
	);
};

const LeftBox = styled.div`
	float: left;
	width: 50%;
	border-bottom-left-radiuis:15px;
`
const RightBox = styled.div`
	float: right;
	width: 50%;
	border-bottom-right-radius:15px;
`

const MAP = styled.div`
	position: relative;
	border-bottom-right-radius:15px;
	border-bottom-left-radius:15px;
	width: 100%;
	height: 306px;
`;

const Button = styled.button`
	z-index: 5;
	position: absolute;
	text-align: center;
	border: none;
	border-bottom-right-radius:15px;
	border-bottom-left-radius:15px;
	bottom: 0px;
	padding: 13px;
	height: 47px;
	width: 100%;
	background-color: white;
	font-size: 16px;
	cursor: pointer;
`;

export default Detailmap;