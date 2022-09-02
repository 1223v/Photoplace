import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '../../../index.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// const Tags = [
// 	{num: 1, Tagname: '롯데월드'},
// 	{num: 2, Tagname: '부산'},
// ]
const WholeWrapper = styled.div`
	font-family: 'main_font';
	background-color: #f2f2f2;
`;


const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	width: 100%;
	padding-bottom: 20px;
	padding-top:10px;
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
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 3px;
	width: 100%;
	background-color: white;
`;

const Hr = styled.hr`
	margin-bottom: 0.4em;
`
const Title = styled.div`
	font-size: 23px;
	margin-top:10px;
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
	background-color: #FED06E;
	color: white;
	width: max-content;
	height: 25px;
	position: relative;
	padding: 0 10px 0 10px;
	margin-left: 10px;
	border: none;
	border-radius: 10px;
`;

const TagContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 45px;
	background-color: white;
	padding: 10px;
	margin-bottom: 3px;
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	background-color: white;
	justify-content: center;
`
/*
const Image = styled.img`
	margin-left: 1%;
	margin-right: 1%;
	width: 20px;
	height: 20px;
`;
*/

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
	color : #000000;
	font-size:17px;
	font-weight:bold;
`
const ImgContent = styled.div`
	color: #666666;
	font-size:15px;
`
/*
const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
	flex-direction: column;
	position: relative;
	font-family: 'loadingpage_font';
	@media (min-width: 800px) {
		width: 600px;
		height: 100vh;
		/* border:1px solid #95afc0; */
		/* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; 
`;
*/


function Mapsearch() {
	const [Text, setText] = useState('');
	const [SearchImage, setSearchImage] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [Seoul, setSeoul] = useState([]);
	const [Busan, setBusan] = useState([]);
	const [Drama, setDrama] = useState([]);
	const [Jeju, setJeju] = useState([]);
	const [Tag, setTag] = useState([]);
	const dragAreaRef = useRef(null);


	useEffect(() => {
		
		Axios.get('/api/data/seoulsmap').then((response) => {
			
			setSeoul(response.data);
		});
		Axios.get('/api/data/busansmap').then((response) => {
			setBusan(response.data);
		});
		Axios.get('/api/data/dramasmap').then((response) => {
			setDrama(response.data);
		});
		Axios.get('/api/data/jejusmap').then((response) => {
			setJeju(response.data);
		});
		Axios.get('/api/data/SearchPage').then((response) => {
			setTag(response.data);
			console.log(response.data);
		});
	}, []);

	const onTextHandler = (event) => {
		setText(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		let body = {
			search: Text,
		};
		Axios.post('/api/data/Searchpage', body).then((response) => {
			
			setSearchImage(response.data);
			setIsSearching(true);
			if (Text === '') {
				setIsSearching(false);
			}
		});
	};
	const TagSearch = (e, params) => {
		console.log(params);
		setText(params);
		e.preventDefault();
		let body = {
			search: params,
		};
		Axios.post('/api/data/Searchpage', body).then((response) => {
			setSearchImage(response.data);
			setIsSearching(true);
		});
	}
	const TagPage = () => {
		return(
			<TagContainer>
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -12300 }}
						className="inner-carousel"
					>
						{Tag.map((array, index) => {
							return(
								<div key={index}>
									<TagButton onClick={(e) => {TagSearch(e, array.tag_1)}}>#{array.tag_1}</TagButton>
								</div>
							);
						})}
					</motion.div>
				</motion.div>
			</TagContainer>
		)
	}
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
										dragConstraints={{ right: 0, left: -1000}}
										className="inner-carousel"
									>
										{SearchImage.map((array, index) => {
											return (
												<motion.div className="item7777" key={index}>
													<Link to={`/Detail/${array.num}`}>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														<ImgTitle>
															{array.title}
														</ImgTitle>
														<ImgContent>
															{array.content}
														</ImgContent>
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
			
			<WholeWrapper>
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
									dragConstraints={{ right: 0, left: -12300 }}
									className="inner-carousel"
								>
									{Seoul.map((array, index) => {
										return (
											<motion.div className="item7777" key={index} style={{width: 'fit-content', textalign: 'center'}}>
												<Link to={`/Detail/${array.num}`} style={{ textDecoration:'none', color:'#1E1E1E' }}>
													<div>
														<img src={array.imageSrc} alt=""/>
														<ImgTitle style={{width: 'max-content'}}>
															{array.title}
														</ImgTitle>
														<ImgContent>
															{array.content}
														</ImgContent>
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
									dragConstraints={{ right: 0, left: -15000 }}
									className="inner-carousel"
								>
									{Busan.map((array, index) => {
										return (
											<motion.div className="item7777" key={index}>
												<Link to={`/Detail/${array.num}`} style={{ textDecoration:'none', color:'#1E1E1E' }}>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														<ImgTitle>
															{array.title}
														</ImgTitle>
														<ImgContent>
															{array.content}
														</ImgContent>
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
									dragConstraints={{ right: 0, left: -12300 }}
									className="inner-carousel"
								>
									{Jeju.map((array, index) => {
										return (
											<motion.div className="item7777" key={index}>
												<Link to={`/Detail/${array.num}`} style={{ textDecoration:'none', color:'#1E1E1E' }}>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														<ImgTitle>
															{array.title}
														</ImgTitle>
														<ImgContent>
															{array.content}
														</ImgContent>
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
									dragConstraints={{ right: 0, left: -12300 }}
									className="inner-carousel"
								>
									{Drama.map((array, index) => {
										return (
											<motion.div className="item7777" key={index}>
												<Link to={`/Detail/${array.num}`} style={{ textDecoration:'none', color:'#1E1E1E' }}>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														<ImgTitle>
															{array.title}
														</ImgTitle>
														<ImgContent>
															{array.content}
														</ImgContent>
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
			<br />
			<br />
			<br />
		</div>
	);
}

export default Mapsearch;