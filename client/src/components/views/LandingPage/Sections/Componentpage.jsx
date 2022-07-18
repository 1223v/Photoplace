import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Axios from 'axios'
//import ImagesComponent from "./ImagesComponent.js";
import './Componentpage.css';
//import Detail from '../Detail/Detail'

function Componentpage() {
	
	//const[Click, setClick]=useState(false);
	//const click=()=>{
	//	setClick(true)
	//}
	
	
	const [width, setwidth] = useState(0);
	const dragAreaRef = useRef(null);
	
	Axios.get('https://korea-app.run.goorm.io/api/data/Componentpage')
		.then(response=> console.log(response.data))
	
	let items = [
		{
			num:1,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '장소이름1',
			loc_info: '주소1',
		},
		{
			num:2,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '장소이름2',
			loc_info: '주소2',
		},
		{
			num:3,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '명동 몰토 카페',
			loc_info: '서울 중구 명동길 73 3층',
		},
		{
			num:4,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '서울 젠틀몬스터 팝업스토어',
			loc_info: '서울 중구 소공로 63 신세계백화점 명동점 신관 1층',
		},
		{
			num:5,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			loc_name: '전주 한벽굴 - 스물다섯 스물하나 촬영지',
			loc_info: '전북 전주시 완산구 교동',
		},
		{
			num:6,
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			loc_name: '부산 흰여울 문화마을 해변 터널',
			loc_info: '부산광역시 영도구 영선동4가',
		},
	];
	

	useEffect(() => {
		setwidth(dragAreaRef.current.scrollWidth - dragAreaRef.current.offsetWidth);
	}, []);

	
	return (	
		<div style={{ width: '100%', height: '100%' }} className="wholeView">
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
			
			
			
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			
		</div>
		
	
	);
}

export default Componentpage;

/*
<Link to="/Detail" className="detail-link" onClick>
										
									<Link/>
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