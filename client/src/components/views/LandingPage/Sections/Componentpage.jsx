import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from 'react-redux';
//import ImagesComponent from "./ImagesComponent.js";
import './Componentpage.css';
import ApexCharts from 'react-apexcharts';
//import Detail from '../Detail/Detail'

const AnalysisPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 80%;
	height: 80vh;
`;

const AnalysisTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const GraphWrapper = styled.div`
	margin-top: 10px;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-content: center;
`;

const Title = styled.div`
	font-size: 30px;
	font-family: 'main_font';
`;

const Image = styled.img`
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 60px;
	width: 20%;
	height: 200px;
`;

const LocTitle = styled.div`
	font-size: 25px;
	font-family: 'main_font';
	color: #ffcc00;
`;

const LocDetail = styled.div`
	font-size: 15px;
	font-family: 'main_font';
`;

export default function Componentpage() {
	const aicontent = useSelector((state) => state.user);
	console.log(aicontent.aiSuccess);

	var data = [
		{
			data: [aicontent.aiSuccess.predictionper*100, aicontent.aiSuccess.predictionper1*100, aicontent.aiSuccess.predictionper2*100, aicontent.aiSuccess.predictionper3*100, aicontent.aiSuccess.predictionper4*100],
		},
	];
	var options = {
		chart: {
			type: 'bar',
			width: '80%',
			height: '60%',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 5,
				horizontal: true,
				distributed: true,
				dataLabels: {
					position: 'bottom',
				},
				colors: {
					backgroundBarColors: ['#eee'],
					backgroundBarOpacity: 1,
					backgroundBarRadius: 9,
				},
			},
		},
		tooltip: {
			enabled: false,
		},
		dataLabels: {
			enabled: true,
			textAnchor: 'start',
			style: {
				colors: ['#fff'],
			},
			formatter: function (val, opt) {
				return val + '%';
			},
			offsetX: 0,
		},
		colors: ['#146152', '#44803F', '#B4CF66', '#FFEC5C', '#FF5A33', '#FF9933', '#A1C7E0'],
		xaxis: {
			categories: [aicontent.aiSuccess.prediction, aicontent.aiSuccess.prediction1, aicontent.aiSuccess.prediction2, aicontent.aiSuccess.prediction3, aicontent.aiSuccess.prediction4],
			max: 100,
			lines: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
			labels: {
				style: {
					fontSize: '13px',
					fontWeight: 600,
					fontFamily: 'main_font',
				},
			},
		},
		legend: {
			show: false,
		},
		grid: {
			show: false,
		},
	};

	const BarChart = () => {
		return <ApexCharts series={data} options={options} type="bar" width="100%" height="100%" />;
	};

	return (
		<AnalysisPageWrapper>
			<AnalysisTitleWrapper>
				
				<Title>분석 결과</Title>
			</AnalysisTitleWrapper>
			<LocTitle>{aicontent.aiSuccess.prediction}</LocTitle>

			<LocDetail>
				젠틀몬스터가 블랙핑크 제니와 협업한 프로젝트 ‘JENTLE GARDEN: 젠틀가든’ 팝업
				공간으로, 젠틀몬스터와 제니가 함께 상상한 판타지 세계를 다양한 디오라마 설치물과
				화려한 꽃, 핑크빛 호수 등을 활용해 몽환적인 공간으로 재현했습니다.
			</LocDetail>
			<GraphWrapper>
				<BarChart></BarChart>
			</GraphWrapper>
		</AnalysisPageWrapper>
	);
}

/*
<Link to={{
	pathname: `/update/${this.state.article.id}`,
		state: { // 오.. 새 기술이다
        title: this.state.article.title,
        name: this.state.article.name,
        body: this.state.article.body
    }
}}>
	<button className="btn btn-secondary" style={btnStyle}>수정</button>
</Link>

//param 사용
<Link path={`/Detail/${array.num}`} params={{id: {array.num}}} onClick={click}>

<Link to={{pathname:`/Detail/${array.num}`},query:{id:{array.num}}} onClick={click}>
*/

//드래그 오왼만 되는
/*
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
								<motion.div className="item7777" key={array.image}>
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
			*/

/*
//wholeView div 안에 있는 애들!!
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
			
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			
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
			
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
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
			
			
			
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>


*/