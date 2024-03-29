import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '../../../index.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const WholeWrapper = styled.div`
	font-family: 'main_font';
	background-color: #f2f2f2;
	width: 100%;
`;

const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	width: 100%;
	padding-bottom: 20px;
	padding-top: 10px;
	margin-bottom: 3px;
	background-color: white;
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 3px;
	width: 100%;
	align-items: center;
	background-color: white;
	padding: 2px;
	box-sizing: border-box;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 3px;
	width: 100%;
	background-color: white;
`;

const Title = styled.div`
	font-size: 23px;
	margin-top: 10px;
	margin-bottom: 5px;
	margin-left: 8px;
	font-weight: bold;
`;
const SearchBar = styled.form`
	display: flex;
	font-size: 15px;
	background: #f2f2f2;
	border: none;
	border-radius: 10px;
	width: 320px;
	height: 35px;
	padding: 0.5% 1% 0.5% 1%;
	margin-top: 10px;
	align-items: center;
`;
const TagButton = styled.button`
	background-color: #fed06e;
	color: white;
	width: max-content;
	height: 25px;
	position: relative;
	padding: 0 10px 0 10px;
	margin-left: 10px;
	border: none;
	border-radius: 10px;
`;

const TagDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	background-color: white;
`;
const TagItem = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`
const TagContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	background-color: white;
	padding: 10px;
	margin-bottom: 3px;
	box-sizing: border-box;
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
	background-color: white;

	text-decoration: none;
`;

const StyledButton = styled.button`
	color: #666666;
	background-color: #f2f2f2;
	border: none;
	width: 50px;
	font: 10px;
`;

const ImgTitle = styled.div`
	color: #000000;
	font-size: 17px;
	font-weight: bold;
`;
const ImgContent = styled.div`
	color: #666666;
	font-size: 15px;
`;

function Mapsearch() {
	const [Text, setText] = useState('');
	const [SearchImage, setSearchImage] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [Seoul, setSeoul] = useState([]);
	const [Busan, setBusan] = useState([]);
	const [Drama, setDrama] = useState([]);
	const [Jeju, setJeju] = useState([]);
	const [Tagd, setTagd] = useState([]);
	const dragAreaRef = useRef(null);

	const [SeoulLength, setSeoulLength] = useState(0);
	const [BusanLength, setBusanLength] = useState(0);
	const [JejuLength, setJejuLength] = useState(0);
	const [DramaLength, setDramaLength] = useState(0);
	const [SearchLength, setSearchLength] = useState(0);
	const [TagLength, setTagLength] = useState(0);

	useEffect(() => {
		Axios.get('/api/data/seoulsmap').then((response) => {
			setSeoul(response.data);
			setSeoulLength(response.data.length);		
		});
		Axios.get('/api/data/busansmap').then((response) => {
			setBusan(response.data);
			
			setBusanLength(response.data.length);
		});
		Axios.get('/api/data/jejusmap').then((response) => {
			setJeju(response.data);
			setJejuLength(response.data.length);
		});
		Axios.get('/api/data/dramasmap').then((response) => {
			setDrama(response.data);
			setDramaLength(response.data.length);
		});
		Axios.get('/api/data/SearchPaged').then((response) => {
			setTagd(response.data);
			setTagLength(response.data.length);
		});
	}, []);
	
	let currentWidth = document.body.scrollWidth;
	let Search_width = 0;
	
	const onTextHandler = (event) => {
		setText(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		let body = {
			search: Text,
		};
		Axios.post('/api/data/Searchpagede', body).then((response) => {
			setSearchImage(response.data);
			setSearchLength(response.data.length);
			setIsSearching(true);
			if (Text === '') {
				setIsSearching(false);
			}
		});
	};
	const TagSearch = (e, params) => {
		setText(params);
		e.preventDefault();
		let body = {
			search: params,
		};
		Axios.post('/api/data/Searchpagede', body).then((response) => {
			setSearchImage(response.data);
			setSearchLength(response.data.length);
			setIsSearching(true);
			
		});
	};
	const TagPage = () => {
		return (
			<TagContainer>
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -105*TagLength/2+currentWidth }}
						className="inner-carousel"
					>
						<TagItem>
							<TagDiv style={{marginBottom: '5px'}}>
								{Tagd.slice(0, Tagd.length/2).map((array, index) => {
									return ( 
										<div key={index}>
											<TagButton
												onClick={(e) => {
													TagSearch(e, array.tag_1);
												}}
											>
												#{array.tag_1}
											</TagButton>
										</div>
									);
								})}
							</TagDiv>
							<TagDiv>
								{Tagd.slice(Tagd.length / 2, Tagd.length + 1).map((array, index) => {
									return ( 
										<div key={index}>
											<TagButton
												onClick={(e) => {
													TagSearch(e, array.tag_1);
												}}
											>
												#{array.tag_1}
											</TagButton>
										</div>
									);
								})}
							</TagDiv>
						</TagItem>
					</motion.div>
				</motion.div>
			</TagContainer>
		);
	};
	
	
	const SearchPage = (props) => {
		if (props.isSearching) {
			return (
				<div>
					<InfoWrapper>
						<TitleWrapper>
							<Title>검색결과</Title>
						</TitleWrapper>
						<ItemWrapper>
							<div style={{ width: '100%' }} className="imagesRow">
								<motion.div
									ref={dragAreaRef}
									className="dragAreaRef"
									whileTap={{ cursor: 'grabbing' }}
								>
									<motion.div
										style={{ width: '100%', height: '100%' }}
										drag="x"
										dragConstraints={{ right: 0, left: SearchLength*170 > currentWidth ? -170*SearchLength+currentWidth : 0 }}
										className="inner-carousel"
									>
										{SearchImage.map((array, index) => {
											return (
												<motion.div className="item7777" key={index}>
													<Link
														to={`/Detail/${array.num}`}
														style={{
															textDecoration: 'none',
															color: '#1E1E1E',
														}}
													>
														<div>
															<img src={array.imageSrc} alt="" />
															<br />
															<ImgTitle>{array.title}</ImgTitle>
															<ImgContent>{array.content}</ImgContent>
														</div>
													</Link>
												</motion.div>
											);
										})}
									</motion.div>
								</motion.div>
							</div>
						</ItemWrapper>
					</InfoWrapper>
				</div>
			);
		}
	};

	return (
		<div>
			<WholeWrapper style={{width: '100%'}}>
				<SearchWrapper>
					<SearchBar onSubmit={onSubmitHandler}>
						<Input type="text" value={Text} onChange={onTextHandler} />
						<StyledButton type="submit">검색</StyledButton>
					</SearchBar>
				</SearchWrapper>
				<TagPage></TagPage>
				<SearchPage isSearching={isSearching}></SearchPage>
				<InfoWrapper>
					<TitleWrapper>
						<Title>서울</Title>
					</TitleWrapper>
					<ItemWrapper>
						<div style={{ width: '100%' }} className="imagesRow">
							<motion.div
								ref={dragAreaRef}
								className="dragAreaRef"
								whileTap={{ cursor: 'grabbing' }}
							>
								<motion.div
									style={{ width: '100%', height: '100%' }}
									drag="x"
									dragConstraints={{ right: 0, left: -160*SeoulLength+currentWidth }}
									className="inner-carousel"
								>
									{Seoul.map((array, index) => {
										return (
											<motion.div
												className="item7777" key={index}
											>
												<Link
													to={`/Detail/${array.num}`}
													style={{
														textDecoration: 'none',
														color: '#1E1E1E',
													}}
												>
													<div>
														<img src={array.imageSrc} alt="" />
														<ImgTitle>
															{array.title}
														</ImgTitle>
														<ImgContent>{array.content}</ImgContent>
													</div>
												</Link>
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
						<Title>부산</Title>
					</TitleWrapper>
					<ItemWrapper>
						<div style={{ width: '100%' }} className="imagesRow">
							<motion.div
								ref={dragAreaRef}
								className="dragAreaRef"
								whileTap={{ cursor: 'grabbing' }}
							>
								<motion.div
									style={{ width: '100%', height: '100%' }}
									drag="x"
									dragConstraints={{ right: 0, left: -160*BusanLength+currentWidth }}
									className="inner-carousel"
								>
									{Busan.map((array, index) => {
										return (
											<motion.div className="item7777" key={index}>
												<Link
													to={`/Detail/${array.num}`}
													style={{
														textDecoration: 'none',
														color: '#1E1E1E',
													}}
												>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														<ImgTitle>{array.title}</ImgTitle>
														<ImgContent>{array.content}</ImgContent>
													</div>
												</Link>
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
						<Title>제주</Title>
					</TitleWrapper>
					<ItemWrapper>
						<div style={{ width: '100%' }} className="imagesRow">
							<motion.div
								ref={dragAreaRef}
								className="dragAreaRef"
								whileTap={{ cursor: 'grabbing' }}
							>
								<motion.div
									style={{ width: '100%', height: '100%' }}
									drag="x"
									dragConstraints={{ right: 0, left: -160*JejuLength+currentWidth }}
									className="inner-carousel"
								>
									{Jeju.map((array, index) => {
										return (
											<motion.div className="item7777" key={index}>
												<Link
													to={`/Detail/${array.num}`}
													style={{
														textDecoration: 'none',
														color: '#1E1E1E',
													}}
												>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														<ImgTitle>{array.title}</ImgTitle>
														<ImgContent>{array.content}</ImgContent>
													</div>
												</Link>
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
						<Title>드라마</Title>
					</TitleWrapper>
					<ItemWrapper>
						<div style={{ width: '100%' }} className="imagesRow">
							<motion.div
								ref={dragAreaRef}
								className="dragAreaRef"
								whileTap={{ cursor: 'grabbing' }}
							>
								<motion.div
									style={{ width: '100%', height: '100%' }}
									drag="x"
									dragConstraints={{ right: 0, left: -160*DramaLength+currentWidth }}
									className="inner-carousel"
								>
									{Drama.map((array, index) => {
										return (
											<motion.div className="item7777" key={index}>
												<Link
													to={`/Detail/${array.num}`}
													style={{
														textDecoration: 'none',
														color: '#1E1E1E',
													}}
												>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														<ImgTitle>{array.title}</ImgTitle>
														<ImgContent>{array.content}</ImgContent>
													</div>
												</Link>
											</motion.div>
										);
									})}
								</motion.div>
							</motion.div>
						</div>
					</ItemWrapper>
				</InfoWrapper>
			</WholeWrapper>

		</div>
	);
}

export default Mapsearch;