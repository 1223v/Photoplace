import React, { useState, useRef, useEffect } from 'react';
//import {BsArrowCounterclockwise} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import * as tmImage from '@teachablemachine/image';
import Dots from 'react-activity/dist/Dots';
import 'react-activity/dist/Dots.css';
import styled from 'styled-components';
import { useDispatch} from 'react-redux';
import { aiUser } from '../../../_actions/user_actions';
import './AIcontent.css';
import Select from "./Select"

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: white;
	flex-direction: column;
	position: relative;
	/* justify-content:space-evenly; */

	/* position:relative; */
	@media (min-width: 800px) {
		width: 600px;
		height: 100vh;
		/* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
	}
`;

const ImageUploadContainer = styled.input`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: none;
`;

const ImageContainer = styled.div`
	position: relative;
	width: 70%;
	height: 28%;
	display: flex;
	background-color: rgba(0, 0, 0, 0.07);
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 25px #576574;
	
	flex-direction: column;
	box-shadow: 0px 3px 20px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
	width: 90%;
	height: 90%;
	border-radius: 10px;
`;
const SelectWrapper = styled.div`
	display: flex;
	margin: 10px;
	margin_bottom: 15px;
	width: 80%;
`;

const Busan = (props, { history }) => {
	let URL = 'https://teachablemachine.withgoogle.com/models/bPVTnnqcJ/';

	let OPTIONS = [
		{
			value: 'Busan',
			name: '부산',
			key: '/Busan',
		},
		{
			value: 'Seoul',
			name: '서울',
			key: '/Seoul',
		},
	];
	

	const modelURL = URL + 'model.json';
	const metadataURL = URL + 'metadata.json';

	let model;

	const [imgBase64, setImgBase64] = useState(''); // 파일 base64
	const [imgFile, setImgFile] = useState(null); //파일
	const [loading, setLoading] = useState(false);
	const [showResult, setShowResult] = useState(false);
	const [predictionArr, setPredictionArr] = useState([]);
	const [result, setResult] = useState(null);
	const [keyword, setKeyword] = useState(null);
	const dispatch = useDispatch();
	
	//react-router 사용
	const navigate = useNavigate();
	// input 태그를 클릭하는 것과 같은 효과를 주기 위해서 사용
	const inputRef = useRef();

	// Load the image model and setup the webcam
	async function init() {
		// let isIos = false;
		// // fix when running demo in ios, video will be frozen;
		// if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
		//   isIos = true;
		// }
		// load the model and metadata
		// Refer to tmImage.loadFromFiles() in the API to support files from a file picker
		// or files from your local hard drive
		// Note: the pose library adds "tmImage" object to your window (window.tmImage)
		model = await tmImage.load(modelURL, metadataURL);
		//총 클래스 수
		let maxPredictions;
		maxPredictions = model.getTotalClasses();
	}

	async function predict() {
		// predict can take in an image, video or canvas html element
		model = await tmImage.load(modelURL, metadataURL);
		const tempImage = document.getElementById('srcImg');
		const prediction = await model.predict(tempImage, false);
		prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
		setPredictionArr(prediction);
		setShowResult(true);
		setLoading(false);
		setResult(prediction[0].className);

		console.log('가장높은확률 : ', prediction[0].className);

		let body = {
			prediction: prediction[0].className,
		};

		dispatch(aiUser(body));
		navigate('/AImap');
	}

	const handleChangeFile = (event) => {
		setLoading(true);
		setShowResult(false);
		setPredictionArr(null);
		setResult(null);

		let reader = new FileReader();

		reader.onloadend = () => {
			// 2. 읽기가 완료되면 아래코드가 실행됩니다.
			const base64 = reader.result;
			if (base64) {
				setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
			}
		};
		if (event.target.files[0]) {
			reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
			setImgFile(event.target.files[0]); // 파일 상태 업데이트
			init().then(console.log('init 모델'), predict());
		}
	};


	return (
		<Container className="ai_page">
			<br/>
			<br/>
			<br/>
			<SelectWrapper>
				<Select options={OPTIONS} defaultValue="Busan" onChange></Select>
			</SelectWrapper>
			{showResult ? (
				<div>분석결과는?</div>
			) : (
				<div>{loading ? '잠시만 기다려주세요!' : '사진을 업로드 해주세요!'}</div>
			)}
			<ImageContainer
				onClick={() => {
					inputRef.current.click();
				}}
			>
				<ImageUploadContainer
					ref={inputRef}
					onChange={handleChangeFile}
					type="file"
					accept="image/*"
				/>
				{imgBase64 ? (
					<Image id="srcImg" src={imgBase64}></Image>
				) : (
					<div>
						<h3>GIVE ME YOUR PICTURE!</h3>
					</div>
				)}
			</ImageContainer>
			{!loading && result === null ? (
				<div>
					<br />
					<br />
					<h4>
						※ 업로드 된 사진은 별도로 수집, 보존 하지않고 얼굴인식 용도에만 사용됩니다.
					</h4>
				</div>
			) : null}

			{loading && result === null ? (
				<div>
					<Dots size={45} color="#224976"></Dots>
					<h2>분석중...</h2>
				</div>
			) : null}

			<div class="addthis_inline_share_toolbox_mxdj"></div>
		</Container>
	);
};

export default Busan;