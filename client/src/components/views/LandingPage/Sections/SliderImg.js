import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Slider from 'react-slick';
import './slick.css';

const Wrap = styled.div`
	position: relative;
	padding-bottom: 30px;
	overflow: hidden;
	.slick-slide {
		display: inline-block;
	}

	.slick-dots.slick-thumb {
		position: absolute;
		bottom: 0;
		left: 50%;
		padding: 0;
		margin: 0;
		list-style: none;
		transform: translate(-50%);

		li {
			position: relative;
			display: inline-block;

			&.slick-active {
				span {
					filter: none;
				}
			}
		}
	}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const Image1 = styled.img`
	width: 70%;
	height: 70%;
`;
const SlickItems = styled.div`
	width: 100%;
	height: 300px;
	text-align: center;

	img {
		max-width: 100%;
		height: 100%;
		vertical-align: top;
	}
`;

const SimpleSlider = ({ imageSrcs, nums }) => {
	const settings = {
		lazyLoad: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const [SecondImage, setSecondImage] = useState([]);
	let body = {
		nums: nums,
	};

	useEffect(() => {
		Axios.post('/api/data/ModalSlider', body).then((response) => {
			setSecondImage(response.data);
			
		});
	}, []);
	
	if (nums === 0) {
		return (
			<Wrap>
				<Slider {...settings}>
					<Image1 src={imageSrcs} alt="" />
					
				</Slider>
			</Wrap>
		);
	} else {
		return (
			<Wrap>
				<Slider {...settings}>
					<Image src={imageSrcs} alt="" />
					{SecondImage.map((item, index) => {
						return (
							<SlickItems key={index}>
								<Image src={item.imageSrc} alt="" />
							</SlickItems>
						);
					})}
				</Slider>
			</Wrap>
		);
	}
};

export default SimpleSlider;