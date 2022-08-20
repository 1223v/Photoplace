import React, { useState, useRef} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import * as tmImage from '@teachablemachine/image';
import Dots from 'react-activity/dist/Dots';
import 'react-activity/dist/Dots.css';
import styled from 'styled-components';
import { useDispatch} from 'react-redux';
import { aiUser } from '../../../_actions/user_actions';

//import Select from "./Select"


const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: white;
	flex-direction: column;
	font-family: "AIpage_font";
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

const UpperIconsContainer = styled.div`
	width: 100%;
	height: 20px;
	display : flex;
	position: absolute;
	top:10px;

	justify-content: center;
`
const LowerIconsContainer = styled.div`
	width: 100%;	
	height: 50px;
	position: absolute;
	bottom: 20px;
	text-align: center;
`

const ImageUploadContainer = styled.input`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: none;
`;

const ImageContainer = styled.div`
	position: relative;
	width: 85%;
	height: 60%;
	display: flex;
	background-color: rgb(252, 248, 232);
	
	
	
	background: linear-gradient(to right bottom, #8033F1, #ffa69e);
    color: transparent;
	
	
	
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	
	z-index: 5;
	flex-direction: column;
	box-shadow: 0px 3px 5px 1px rgb(252, 248, 232);
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px;
`;
const AnalyzingContainer=styled.div`
	top:50px;
`

const Seoul = (props, { history }) => {
	let URL = 'https://teachablemachine.withgoogle.com/models/D563JHUM9/'; //<--TM url

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
			predictionper: prediction[0].probability.toFixed(2),
			prediction1: prediction[1].className,
			predictionper1: prediction[1].probability.toFixed(2),
			prediction2: prediction[2].className,
			predictionper2: prediction[2].probability.toFixed(2),
			prediction3: prediction[3].className,
			predictionper3: prediction[3].probability.toFixed(2),
			prediction4: prediction[4].className,
			predictionper4: prediction[4].probability.toFixed(2),
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
			<br/><br/><br/>
			{showResult ? (
				<div>분석결과는?</div>
			) : (
				<div style={{ width:'80%', fontSize:'20px', fontWeight:'bolder'}}>{loading ? '잠시만 기다려주세요!' : 'AI가 어울리는 여행지를 추천해드려요! (서울)'}</div>
			)}

			{!loading && result === null ? (
				<div style={{ width:'80%' , fontSize:'10px'}}>
						※ 업로드 된 사진은 별도로 수집, 보존 하지않고 얼굴인식 용도에만 사용됩니다.
						<br/><br/>
				</div>
			) : null}

			<ImageContainer>
				<UpperIconsContainer>
					<img alt="photo1" style={{marginRight:'38%' }} src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Flyjkg%2FbtrIT91lvHy%2FseRbk2IR9tYKBWeHKG69u1%2Fimg.png"></img>
					<img alt="photo2" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoqlOl%2FbtrISNEqoeV%2FOv6miOdVjaOADzyXcllPnK%2Fimg.png"></img>
					<img alt="photo3" style={{ marginLeft:'38%'}} src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkHhiq%2FbtrIRF7H6gC%2FnoqrnCCKbzrZThW8EGjYZ0%2Fimg.png"></img>
				</UpperIconsContainer>

				<LowerIconsContainer>
					<img 
						onClick={() => {
							inputRef.current.click();
						}}
						alt = "photo4" 
						style={{width:'13%', marginRight:'27%'}} 
						src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbiwEn6%2FbtrIVhLB9E9%2FhKikwNymyj7ScBirSWVZ20%2Fimg.png"></img>
					<img 
						onClick={() => {
							inputRef.current.click();
						}}
						alt = "photo5" 
						style={{width:'16%', marginRight:'40%'}} 
						src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8DD1z%2FbtrIOSF0zp1%2FGoaATe4xkFtl8gZB8cuhQk%2Fimg.png"></img>
					<br/>
				<div>
					<Link style={{zIndex:'10', color:'black',textDecoration: 'none',marginLeft:'35%'}} to="/Seoul">서울 </Link>
					<Link style={{zIndex:'10', color:'black',textDecoration: 'none'}} to="/Busan">부산</Link>
					<Link style={{zIndex:'10', color:'black',textDecoration: 'none'}} to="/Jeju"> 제주</Link>
					<Link style={{zIndex:'10', color:'black',textDecoration: 'none'}} to="/Drama"> 드라마</Link>
				</div>
				</LowerIconsContainer>
				
				<ImageUploadContainer
					ref={inputRef}
					onChange={handleChangeFile}
					type="file"
					accept="image/*"
				/>
				{imgBase64 ? (
					<Image id="srcImg" src={imgBase64}></Image>
				) : (
					<div style={{ fontSize:'25px', height:'100%', width:'100%', textAlign:'center'}}
						onClick={() => {
							inputRef.current.click();
						}}
					>
						<br/><br/><br/><br/>
						GIVE ME YOUR PICTURE!
					</div>
				)}
			</ImageContainer>

			<AnalyzingContainer>
			{loading && result === null ? (
				<div style={{fontSize:'25px', textAlign:'center'}}>
					<Dots size={25} color="#224976" style={{textAlign:'center'}}></Dots>
					분석중...
				</div>
			) : null}
			</AnalyzingContainer>
		</Container>
	);
};

export default Seoul;