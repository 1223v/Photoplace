import React, { useRef, useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Select from '../Ranking/SelectBox';
import '../LandingPage/Sections/Componentpage.css';
import Axios from 'axios';
//import SearchIcon from "../../asset/search_icon.png"
import './Mapsearch.css';
import {BiSearch} from "react-icons/bi"

const OPTIONS = [
	{ value: 'latest', name: '최신순' },
	{ value: 'popularity', name: '인기순' },
];

const SelectWrapper = styled.div`
	display: flex;
	width: 50%;
	background-color:white;
	align-items: center;
`;

const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content:space-between;
	align-content:center;
	align-item: center;
	width: 100%;
	padding-left:5%;
	padding-right:5px;
	padding-bottom:20px;
	margin-bottom:5px;
	background-color:white;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 100%;
  align-items:center;
  background-color:white;
  padding:5px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  width: 100%;
  background-color:white;
`;

const Title = styled.div`
  font-size: 28px;
  margin-top: 8px;
  margin_bottom: 5px;
  margin-left:8px;
  font-weight: bold;
`;
const SearchBar = styled.form`
	display: flex;
	font-size: 17px;
	flex-direction: row;
	background: #F2F2F2;
	border: none;
	border-radius: 10px;
	
	width: 90%;
	height: 35px;
	padding: 0.5% 1% 0.5% 1%;
	margin-top:10px;
	align-items: center;
`;

const Image = styled.img`
	margin-left: 1%;
	margin-right: 1%;
	width: 20px;
	height: 20px;
`;

const Input = styled.input`
	font-size: 14px;
	border: none;
	color: black;
	width: 90%;
	background: transparent;
	&:focus,
	&:active {
		outline: none;
	}
	&::placeholder {
		color: white;
	}
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 20%;
  flex-direction: row;
  
  border: none;
  background: rgba(255, 255, 255, 0.6);
  
  width: 100%;
  background-color:white;
 `;

const styledButton=styled.button`
 	font-color:lightgray;
 	background-color:white;
	border:none;
	width:20px;
	font:10px;
`;



function Mapsearch() {
	const [Text, setText] = useState('');
	const [SearchImage, setSearchImage] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [width, setwidth] = useState(0);
	const [Rankings,setRankings] = useState([]);
	const dragAreaRef = useRef(null);
	
	let items = [
		{
			num:1,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '장소이름1',
			loc_info: '주소1',
		},
		{
			num:2,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '장소이름2',
			loc_info: '주소2',
		},
		{
			num:3,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '명동 몰토 카페',
			loc_info: '서울 중구 명동길 73 3층',
		},
		{
			num:4,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '서울 젠틀몬스터 팝업스토어',
			loc_info: '서울 중구 소공로 63 신세계백화점 명동점 신관 1층',
		},
		{
			num:5,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '전주 한벽굴 - 스물다섯 스물하나 촬영지',
			loc_info: '전북 전주시 완산구 교동',
		},
		{
			num:6,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '부산 흰여울 문화마을 해변 터널',
			loc_info: '부산광역시 영도구 영선동4가',
		},
	];
	
	useEffect(() => {
		setwidth(dragAreaRef.current.scrollWidth - dragAreaRef.current.offsetWidth);
		Axios.get('/api/data/map')
		.then(response=> {
		//console.log(response.data)
		setRankings(response.data)
		
	})
	}, []);
	
	const onTextHandler = (event) => {
		setText(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		let body = {
			search: Text
		}
		Axios.post('/api/data/Searchpage',body)
		.then(response=>{
			console.log(response.data)
			setSearchImage(response.data)
			setIsSearching(true)
			if (Text === ""){
				setIsSearching(false)
			}
		})
	};
	const SearchPage = (props) => {
		const SearchText = props.Text;
		if (props.isSearching) {
				return(
					<InfoWrapper>
						<TitleWrapper>
							<Title>검색결과</Title>
						</TitleWrapper>
						<ItemWrapper>
							<div style={{ width: '100%', height: '250px' }} className="imagesRow">
								<motion.div
									ref={dragAreaRef}
									className="dragAreaRef"
									whileTap={{ cursor: 'grabbing' }}
								>
									<motion.div
										style={{ width: '100%', height: '100%' }}
										drag="x"
										dragConstraints={{ right: 0, left: -width }}
										className="inner-carousel"
									> 			
										{SearchImage.map((array) => {
											return(
												<motion.div
													className="item7777" s
													key={array.imageSrc}
												>
													<img src={array.imageSrc} alt="" />	
													<br/>
													{array.title}
													<br/>
													{array.content}									
												</motion.div>					
											);
										})}
									</motion.div>
								</motion.div>
							</div>
						</ItemWrapper>
				</InfoWrapper>
		);
		}
	}
 
	return (
		<div className="mapsearch">
			<br/>
			<br/>
			<br/>
			
			<SearchWrapper>
				<SearchBar onSubmit={onSubmitHandler}>
					<Input type="text" value={Text} onChange={onTextHandler} />
					<styledButton type="submit"><BiSearch></BiSearch></styledButton>
				</SearchBar>
				<SelectWrapper>
					<Select options={OPTIONS} defaultValue="latest"></Select>
				</SelectWrapper>
			</SearchWrapper>
				<SearchPage isSearching={isSearching}></SearchPage>
				<InfoWrapper>
					<TitleWrapper>
						<Title>야경</Title>
					</TitleWrapper>
					<ItemWrapper>
					<div style={{ width: '100%', height: '250px' }} className="imagesRow">
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					> 			
						{Rankings.map((array) => {
							return(
								<motion.div
									className="item7777" s
									key={array.imageSrc}
								>
									<img src={array.imageSrc} alt="" />	
									<br/>
									{array.title}
									<br/>
									{array.content}									
								</motion.div>					
							);
						})}
					
						
					</motion.div>
				</motion.div>
			</div>

					</ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper>
						<Title>놀이공원</Title>
					</TitleWrapper>
					<ItemWrapper>
					<div style={{ width: '100%', height: '250px' }} className="imagesRow">
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>						
						{items.map((array) => {
							return(
								<motion.div
									className="item7777" 
									key={array.image}
								>
									<img src={array.image} alt="" />	
									<br/>
									{array.loc_name}
									<br/>
									{array.loc_info}									
								</motion.div>					
							);
						})}
					
						
					</motion.div>
				</motion.div>
			</div>
					</ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper>
						<Title>포토존</Title>
					</TitleWrapper>
					<ItemWrapper>
					<div style={{ width: '100%', height: '250px' }} className="imagesRow">
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>						
						{items.map((array) => {
							return(
								<motion.div
									className="item7777" 
									key={array.image}
								>
									<img src={array.image} alt="" />	
									<br/>
									{array.loc_name}
									<br/>
									{array.loc_info}									
								</motion.div>					
							);
						})}
					
						
					</motion.div>
				</motion.div>
			</div>
					</ItemWrapper>
				</InfoWrapper>
			<br/>
			<br/>
			<br/>
		</div>
	);
}

export default Mapsearch;