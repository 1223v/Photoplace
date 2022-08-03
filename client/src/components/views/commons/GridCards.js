import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'antd';
import styled from 'styled-components';

function GridCards(props) {
const Image = styled.div`
	background-image: url(${props.image});
	background-size: 300px 320px;
	width: 300px;
	height: 320px;
	margin-left: 10px;
	margin-bottom: 10px;
	border-radius: 7px;
	border: 2px solid #ffd700;
	display:inline-block;
	
`;

const Imgtext = styled.div`
	
    text-align: left;
  flex-direction: column;
  color: white;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Single Day', cursive;
  color: #d12659;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 17px #fff, 0 0 17px #f2ee1f,
    0 0 17px #f2ee1f, 0 0 17px #f2ee1f, 0 0 17px #f2ee1f, 0 0 17px #f2ee1f;
`;
	
const Imgtext2 = styled.div`
	
  text-align: left;
  flex-direction: column;
  color: white;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Single Day', cursive;
  
`;

const Numtext = styled.div`
	
    text-align: left;
  flex-direction: column;
  
  
  color: white;
  font-size: 55px;
  font-weight: bold;
  font-family: 'Single Day', cursive;
  color: #d12659;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 17px #fff, 0 0 17px #f2ee1f,
    0 0 17px #f2ee1f, 0 0 17px #f2ee1f, 0 0 17px #f2ee1f, 0 0 17px #f2ee1f;
`;


	return (
		
		<Link to={`/Detail/${props.num}`} state={{ num: props.num }}>
			<Image alt={props.title}>
				<Numtext>#{props.num}</Numtext>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<Imgtext>&nbsp;#{props.title}</Imgtext>
				<Imgtext2>&nbsp;{props.content}</Imgtext2>
				
				
				
			</Image>
		</Link>
			
	);
}
export default GridCards;