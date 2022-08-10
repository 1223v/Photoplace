import React, { useEffect, useState } from 'react';
import GridCards from '../commons/GridCards';
import { Row, Button } from 'antd';
import Axios from 'axios';
import Select from './SelectBox';
import styled from 'styled-components';

const SelectWrapper = styled.div`
	display: flex;
	width: 50%;
	background-color: white;
	align-items: right;
	font-family: 'main_font';
`;

const OPTIONS = [
	{ value: 'latest', name: '부산' },
	{ value: 'popularity', name: '서울' },
	{ value: 'latest', name: '음식' },
	{ value: 'popularity', name: '드라마' },
];

function Ranking() {
	const [Rankings, setRankings] = useState([]);

	useEffect(() => {
		Axios.get('https://korea-app.run.goorm.io/api/data/Ranking').then((response) => {
			setRankings(response.data);
		});
	}, []);

	return (
		<div>
			<br />
			<br />
			<br />
			<SelectWrapper>
				<Select options={OPTIONS} defaultValue="latest"></Select>
			</SelectWrapper>
			<div style={{ margin: '1rem auto', textAlign: 'center' }}>
				<hr />

				<Row>
					{Rankings.map((rank, index) => (
						<React.Fragment key={index}>
							<GridCards
								image={rank.imageSrc}	
								num={rank.num}
								title={rank.title}
								content={rank.content}
							/>
						</React.Fragment>
					))}
				</Row>
				<br />
				<br />
			</div>
		</div>
	);
}
export default Ranking;