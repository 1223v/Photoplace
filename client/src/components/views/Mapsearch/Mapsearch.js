import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../Ranking/SelectBox';
import Axios from 'axios';
//import SearchIcon from "../../asset/search_icon.png"
import './Mapsearch.css';

const OPTIONS = [
	{ value: 'latest', name: '최신순' },
	{ value: 'popularity', name: '인기순' },
];

const SelectWrapper = styled.div`
	display: flex;
	margin: 10px;
	margin-top: 5px;
	margin_bottom: 15px;
	width: 80%;
`;

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-top: 2%;
	margin-bottom: 50px;
`;
const InfoWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: space-around;
	flex-wrap: wrap;
	flex-direction: row;
	border-radius: 3px;
	width: 80%;
	height: 80vh;
	border: 1px solid black;
	margin: 2%;
	padding-top: 1%;
	padding-bottom: 1%;
	background: #ffffff;
`;

const SearchBar = styled.form`
	display: flex;
	font-size: 17px;
	flex-direction: row;
	background: rgba(211, 214, 237, 0.6);
	border: none;
	border-radius: 60px;
	width: 300px;
	height: 30px;
	padding: 0.5% 1% 0.5% 1%;
	margin_bottom: 2%;
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

function Mapsearch() {
	const [Text, setText] = useState('');
	const [SearchImage, setSearchImage] = useState([]);
	
	
	const onTextHandler = (event) => {
		setText(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		let body = {
			search: Text
		}
		Axios.post('https://korea-app.run.goorm.io/api/data/Searchpage',body)
		.then(response=>{
			console.log(response.data)
			setSearchImage(response.data)
		})
	};

	return (
		<div className="mapsearch">
			<PageWrapper>
				<SearchBar onSubmit={onSubmitHandler}>
					<Image
						src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fy1gw1%2FbtrHzpEvQmv%2FEuGrbEbuLbuozRHlP56jc1%2Fimg.png"
						alt="SearchIcon"
					></Image>
					<Input type="text" value={Text} onChange={onTextHandler} />
					<button type="submit">검색</button>
				</SearchBar>
				<SelectWrapper>
					<Select options={OPTIONS} defaultValue="latest"></Select>
				</SelectWrapper>
				
				
				
				
				
				<InfoWrapper></InfoWrapper>
			</PageWrapper>
		</div>
	);
}

export default Mapsearch;