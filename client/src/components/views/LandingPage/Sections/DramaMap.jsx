/* global kakao */
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DramaMap = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [imageSrcs, setimageSrcs] = useState('');
	const [contents, setcontents] = useState('');
	const [Titles, setTitles] = useState('');
	const [Nums, setNums] = useState([]);
	const [Citye, setCitye] = useState([]);

	const closeModal = () => {
		setModalVisible(false);
	};

	useEffect(() => {
		const { kakao } = window;
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(36.9910113, 127.9259497),
			level: 12,
		};

		var map = new kakao.maps.Map(container, options);

		Axios.get('/api/data/dramasmap').then((response) => {
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
				style={{
					width: '90%',
					height: '70vh',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '0px',
					borderRadius: '10px',
				}}
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
			</div>
			<ContentBar key="5">
				<ContentBa key="1">
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
						<ContentImage
							alt="ph1"
							src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZpuBZ%2FbtrJB3Uv0j1%2FPMw9UW5233SHt3mACd9DX0%2Fimg.jpg"
						/>
						<Contenttype>서울</Contenttype>
					</Link>
				</ContentBa>
				<ContentBa key="2">
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/BusanMap">
						<ContentImage
							alt="ph2"
							src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbcp5G1%2FbtrJC5EjiCr%2FvNDlQpmTTekbBci9j0W2sk%2Fimg.jpg"
						/>
						<Contenttype>부산</Contenttype>
					</Link>
				</ContentBa>
				<ContentBa key="3">
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/JejuMap">
						<ContentImage
							alt="ph3"
							src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsIu9O%2FbtrJCqol93S%2F7YEKkox4JUMSVvklKKgqNK%2Fimg.jpg"
						/>
						<Contenttype>제주</Contenttype>
					</Link>
				</ContentBa>
				<ContentBa key="4">
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/DramaMap">
						<ContentImage
							alt="ph4"
							src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQwTTe%2FbtrJLSwqsZE%2FDjAkDnIVkBoOJkr3TGaxW0%2Fimg.jpg"
						/>
						<Contenttype>
							방송
						</Contenttype>
					</Link>
				</ContentBa>
			</ContentBar>
		</Container>
	);
};

export default DramaMap;

const ContentBar = styled.ul`
	display: flex;
	width:100%;
	margin-top: 8px;
	margin-left: auto;
	margin-right: auto;
  	padding-left:0px;
	background-color: white;
	font-family: 'main_font';
`;

const Contenttype = styled.span`
	display: flex;
	margin-left:auto;
	margin-right:auto;
	background-color: white;
	font-weight:bold;
	font-family: 'main_font';
	justify-content:center;
`;

const ContentBa = styled.li`
	display: inline-block;
	float: left;
	margin-left:auto;
	margin-right:auto;
	position: relative;
	background-color: white;
	font-family: 'main_font';
	
`;

const ContentImage = styled.img`
	margin: auto;
	width: 60px;
	height: 60px;
	border-radius: 100%;
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