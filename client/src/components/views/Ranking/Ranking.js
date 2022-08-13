import React, { useState } from 'react';
import GridCards from '../commons/GridCards';
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
	{ value: 'Busan', name: '부산' },
	{ value: 'Seoul', name: '서울' },
	{ value: 'Food', name: '음식' },
	{ value: 'Drama', name: '드라마' },
];

function Ranking() {
	const [Rankings, setRankings] = useState([]);

		Axios.get('/api/data/Ranking').then((response) => {
			setRankings(response.data);
		});


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
				
				<br />
				<br />
			</div>
		</div>
	);
}
export default Ranking;