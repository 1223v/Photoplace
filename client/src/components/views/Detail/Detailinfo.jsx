import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import styled from 'styled-components';

function Detailinfo(props) {
	
	const [Detailobject,setDetailobject] =useState([]);
	
	useEffect(()=>{
		let body={
			city: props.cityinfo
		};
		
		if(body.city != null){
		Axios.post('/api/data/detailsi',body)
		.then((response)=>{
			
			console.log("응당 되야 맞지",response.data)
			setDetailobject(response.data)
		});
		}
	
		
	},[])
	
	
	return (
		<div>
			<div className="conges_info_inner">
				<div className="d_cong">요일별 혼잡도</div>
				<div className="d_cong_expln">
					* 월-일 일주일 간 방문객 수를 나타낸 혼잡도입니다.
				</div>

				<div className="days">
					월&nbsp;&nbsp;&nbsp;&nbsp;화&nbsp;&nbsp;&nbsp;&nbsp;수&nbsp;&nbsp;&nbsp;&nbsp;목&nbsp;&nbsp;&nbsp;&nbsp;금&nbsp;&nbsp;&nbsp;&nbsp;토&nbsp;&nbsp;&nbsp;&nbsp;일
				</div>
				<div className="cong_circles">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Colorin style={{color: `${Detailobject[0]}`}}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{color: `${Detailobject[1]}`}}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{color: `${Detailobject[2]}`}}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{color: `${Detailobject[3]}`}}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{color: `${Detailobject[4]}`}}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{color: `${Detailobject[5]}`}}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{color: `${Detailobject[6]}`}}>.</Colorin>
					<br />
					<br />
					<br />
					<br />
				</div>
				<br />
				<br />
			</div>
		</div>
	);
}

export default Detailinfo;

const Colorin = styled.div`
	
	height: 15px;
	font-weight: 900;
	font-size: 40px;
	line-height: 48px;
	text-align: center;
	
`;


