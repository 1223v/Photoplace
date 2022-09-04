import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ApexCharts from 'react-apexcharts';
import SlickComponent from './SliderImg';

import '../../../../index.css'

const AnalysisPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 2%;
	justify-content: center;
`;

const InfoContainerDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 4%
`

const AnalysisImg = styled.img`
	display: flex;
	width: 30%;
	border-radius: 15px;
`
const GraphWrapper = styled.div`
	margin-top: 2%;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-content: center;
`;

const Title = styled.div`
	font-size: 25px;
	font-weight: bold;
	font-family: "main_font";
`;

const LocWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	margin-left: 4%;
`;

const LocTitle = styled.div`
	font-size: 25px;
	font-family: 'main_font';
	color: #ffcc00;
	margin-bottom: 10px;
`;

const LocDetail = styled.div`
	font-size: 15px;
	font-family: 'main_font';
`;

export default function Componentpage({SubContents,SubimageSrces}) {
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
			width: '70%',
			height: '50%',
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
					backgroundBarColors: ['#848484'],
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
			<div>
				<Title>분석 결과</Title>
			</div>
			<InfoContainerDiv>
				<AnalysisImg src={SubimageSrces} ></AnalysisImg>
				<LocWrapper>
					<LocTitle>{aicontent.aiSuccess.prediction}</LocTitle>
					<LocDetail>
						{SubContents}
					</LocDetail>
				</LocWrapper>
			</InfoContainerDiv>
			<GraphWrapper>
				<BarChart></BarChart>
			</GraphWrapper>
		</AnalysisPageWrapper>
	);
}

