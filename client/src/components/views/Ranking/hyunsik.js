import React, { useEffect, useState } from 'react';
import GridCards from '../commons/GridCards';
import { Row, Button } from 'antd';

function Ranking() {
	const [Rankings, setRankings] = useState([]);
	

	useEffect(() => {
		//Axios.get('https://korea-app.run.goorm.io/api/data/Ranking')
		//.then(response => {
		//setRankings(response.data)	
		//})
	}, []);


	
	return (
		<div style={{ width: '100%', margin: '0' }}>
			<div style={{ width: '85%', margin: '1rem auto' }}>
				<h2>Ranking</h2>
				<hr />
				<Row gutter={[16, 16]}>
					{Rankings.map((rank, index) => (
						<React.Fragment key={index}>
							<GridCards
								image={rank.imageSrc}
								num={rank.num}
								title={rank.title}
							/>
						</React.Fragment>
					))}
				</Row>
			</div>
		</div>
	);
}
export default Ranking;