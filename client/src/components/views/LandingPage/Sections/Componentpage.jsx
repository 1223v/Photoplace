import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ApexCharts from 'react-apexcharts';
import SlickComponent from './SliderImg';

import '../../../../index.css'

const AnalysisPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 80%;
	height: 80vh;
`;

const AnalysisTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
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



const LocTitle = styled.div`
	font-size: 25px;
	font-family: 'main_font';
	color: #ffcc00;
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
				<SlickComponent imageSrcs={SubimageSrces} nums={0}></SlickComponent>
				
			</AnalysisTitleWrapper>
			
			<LocTitle>{aicontent.aiSuccess.prediction}</LocTitle>

			<LocDetail>
				{SubContents}
			</LocDetail>
			<GraphWrapper>
				<BarChart></BarChart>
			</GraphWrapper>
		</AnalysisPageWrapper>
	);
}

