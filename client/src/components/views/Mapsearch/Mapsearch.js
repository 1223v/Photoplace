import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Select from '../Ranking/SelectBox';
import '../../../index.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const OPTIONS = [
	{ value: 'latest', name: '최신순' },
	{ value: 'popularity', name: '인기순' },
];

const WholeWrapper = styled.div`
	font-family: 'main_font';
	background-color: #f2f2f2;
`;

const SelectWrapper = styled.div`
	display: flex;
	background-color: white;
	align-items: center;
`;

const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	width: 100%;
	padding-left: 20px;
	padding-bottom: 20px;
	margin-bottom: 5px;
	background-color: white;
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 5px;
	width: 100%;
	align-items: center;
	background-color: white;
	padding: 5px;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 5px;
	width: 100%;
	background-color: white;
`;

const Title = styled.div`
	font-size: 28px;
	margin-top: 8px;
	margin_bottom: 5px;
	margin-left: 8px;
	font-weight: bold;
`;
const SearchBar = styled.form`
	display: flex;
	font-size: 15px;
	background: #f2f2f2;
	border: none;
	border-radius: 10px;
	width: 90%;
	height: 35px;
	padding: 0.5% 1% 0.5% 1%;
	margin-top: 10px;
	align-items: center;
`;
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
	width: 40px;
	font: 10px;
`;

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
	const dragAreaRef = useRef(null);



	useEffect(() => {
		
		Axios.get('/api/data/seoulsmap').then((response) => {
			
			setSeoul(response.data);
		});
		Axios.get('/api/data/busanmap').then((response) => {
			
			setBusan(response.data);
		});
		Axios.get('/api/data/dramamap').then((response) => {
			
			setDrama(response.data);
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
	const SearchPage = (props) => {
		const SearchText = props.Text;
		if (props.isSearching) {
			return (
				
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
										dragConstraints={{ right: 0, left: -15000}}
										className="inner-carousel"
									>
										{SearchImage.map((array, index) => {
											return (
												<motion.div className="item7777" key={index}>
													<div>
														<img src={array.imageSrc} alt="" />
														<br />
														{array.title}
														<br />
														{array.content}
													</div>
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
	};

	return (
		<div>
			<br />
			<br />
			<br />
			<WholeWrapper>
				<SearchWrapper>
					<SearchBar onSubmit={onSubmitHandler}>
						<Input type="text" value={Text} onChange={onTextHandler} />
						<StyledButton type="submit">검색</StyledButton>
					</SearchBar>
					<SelectWrapper>
						<Select options={OPTIONS} defaultValue="latest"></Select>
					</SelectWrapper>
				</SearchWrapper>
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
											<motion.div className="item7777" key={index}>
												
													<img src={array.imageSrc} alt="" />
													<br />
													{array.title}
													<br />
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
												<img src={array.imageSrc} alt="" />
												<br />
												{array.title}
												<br />
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
									dragConstraints={{ right: 0, left: -15000 }}
									className="inner-carousel"
								>
									{Drama.map((array, index) => {
										return (
											<motion.div className="item7777" key={index}>
												<img src={array.imageSrc} alt="" />
												<br />
												{array.title}
												<br />
												{array.content}
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