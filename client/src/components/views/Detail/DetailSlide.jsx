import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';
function Detailinfo(props) {
	const [Detailobject, setDetailobject] = useState([]);

	
	useEffect(() => {
		let body = {
			city: props.cityinfo,
		};
		
		if (body.city != null) {
			Axios.post('/api/data/detailSlide', body).then((response) => {
				
				setDetailobject(response.data);
				console.log(response.data);
			});
		}
	}, [props.cityinfo]);
	
		
	
     

	return (
		/*
		<div>
			<div className="conges_info_inner">
				<div className="d_cong">요일별 혼잡도</div>
				<div className="d_cong_expln">
					* 월-일 일주일 간 방문객 수를 나타낸 혼잡도입니다.
					*해당 지역의 방문객 
				</div>
				<div>
					<ApexCharts series={options.series} options={options} type="bar" width="100%" height="100%" />
				</div>
				
			</div>
		</div>
	);
	*/
}

