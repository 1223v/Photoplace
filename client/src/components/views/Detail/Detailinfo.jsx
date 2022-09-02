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
			Axios.post('/api/data/detailsi', body).then((response) => {
				
				setDetailobject(response.data);
				console.log(response.data);
			});
		}
	}, [props.cityinfo]);
	
		
	
var options = {
          series: [{
          name: 'TEAM A',
          type: 'column',
		  data:[10,10,10,10,10,10,10],  
          //data: [Detailobject[0][0], Detailobject[0][1], Detailobject[0][2], Detailobject[0][3], Detailobject[0][4], Detailobject[0][5], Detailobject[0][6]]
        }, {
          name: 'TEAM B',
          type: 'area',
			data:[10,10,10,10,10,10,10],	
          //data: [Detailobject[1][0], Detailobject[1][1], Detailobject[1][2], Detailobject[1][3], Detailobject[1][4], Detailobject[1][5], Detailobject[1][6]]
        }],
          chart: {
          height: 550,
          type: 'line',
          stacked: false,
			  toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString()
            }
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          }
        },
        autoSelected: 'zoom' 
      },
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yaxis: {
		  opacity: [0, 0, 0],
          max: 2500,
          opposite: true,
		  labels: {
			show: false,
		}
        },
		dataLabels: {
			enabled: false,
		},

        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + "명";
              }
              return y;
        
            }
          }
        }
        };

     

	return (
		<div>
			<div className="d_cong">요일별 혼잡도</div>
			<div className="conges_info_inner">
				<div className="d_cong_expln">
					* 월-일 일주일 간 방문객 수를 나타낸 혼잡도입니다.
					*해당 지역의 방문객 
				</div>
				<div>
					<ApexCharts series={options.series} options={options} type="bar" width="100%" height="100%" />
				</div>

				{/*<div className="days">
					월&nbsp;&nbsp;&nbsp;&nbsp;화&nbsp;&nbsp;&nbsp;&nbsp;수&nbsp;&nbsp;&nbsp;&nbsp;목&nbsp;&nbsp;&nbsp;&nbsp;금&nbsp;&nbsp;&nbsp;&nbsp;토&nbsp;&nbsp;&nbsp;&nbsp;일
				</div>
				<div className="cong_circles">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Colorin style={{ color: `${Detailobject[0]}` }}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{ color: `${Detailobject[1]}` }}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{ color: `${Detailobject[2]}` }}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{ color: `${Detailobject[3]}` }}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{ color: `${Detailobject[4]}` }}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{ color: `${Detailobject[5]}` }}>.</Colorin>&nbsp;&nbsp;&nbsp;
					<Colorin style={{ color: `${Detailobject[6]}` }}>.</Colorin>
					<br />
					<br />
					<br />
					<br />
				</div>
				<br />
				<br />
				*/}
				
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