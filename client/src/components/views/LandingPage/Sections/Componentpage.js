import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

//import ImagesComponent from "./ImagesComponent.js";
import './Componentpage.css';

function Componentpage() {
	const [width, setwidth] = useState(0);
	const dragAreaRef = useRef(null);

	let images = [
		'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
		'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
		'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
		'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
		'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
		'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
	];
	
	let loc_name = [
		"장소이름1",
		"장소이름2",
		"명동 몰토 카페",
		"서울 젠틀몬스터 팝업스토어",
		"전주 한벽굴 - 스물다섯 스물하나 촬영지",
		"부산 흰여울 문화마을 해변 터널"		
	]
	
	let loc_info = [
		"주소1",
		"주소2",
		"서울 중구 명동길 73 3층",
		"서울 중구 소공로 63 신세계백화점 명동점 신관 1층",
		"전북 전주시 완산구 교동",
		"부산광역시 영도구 영선동4가"
	]
	/*
	let items = [
		{
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			name: '장소이름1',
			info: '주소1',
		},

		{
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			name: '장소이름2',
			info: '주소2',
		},

		{
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			name: '명동 몰토 카페',
			info: '서울 중구 명동길 73 3층',
		},

		{
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			name: '서울 젠틀몬스터 팝업스토어',
			info: '서울 중구 소공로 63 신세계백화점 명동점 신관 1층',
		},

		{
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png',
			name: '전주 한벽굴 - 스물다섯 스물하나 촬영지',
			info: '전북 전주시 완산구 교동',
		},

		{
			image:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png',
			name: '부산 흰여울 문화마을 해변 터널',
			info: '부산광역시 영도구 영선동4가',
		},
	];
	*/
		
	/*
	let { image } = this.items;
	
	for(let i=0;i<items.length;i++){
		items[i].image
		items[i].name
		items[i].info
	}
	*/

	useEffect(() => {
		setwidth(dragAreaRef.current.scrollWidth - dragAreaRef.current.offsetWidth);
	}, []);

	//<ImagesComponent location={loc_name} info={loc_info}/>
	//<ImagesComponent items={items}/>

	return (
		
		<div style={{ width: '100%', height: '100%' }}>
			
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
						{images.map((image) => {
							return (
								<motion.div className="item7777" key={image}>
									<img src={image} alt="" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>
			
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
						{images.map((image) => {
							return (
								<motion.div className="item7777" key={image}>
									<img src={image} alt="" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>
			
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
						{images.map((image) => {
							return (
								<motion.div className="item7777" key={image}>
									<img src={image} alt="" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>
			
			
		</div>
		/*
		<div style = {{width:"100%", height: "60%"}}>
		
		<div style = {{width:"100%", height: "100%"}}>			
            <motion.div 
               	ref={dragAreaRef}
               	className="dragAreaRef"
               	whileTap={{cursor: "grabbing"}}
            >
               	<motion.div style = {{width:"100%", height: "100"}}
                   	drag="x"
                   	dragConstraints={{ right: 0, left: -width }}
                   	className="inner-carousel"
               	>
				

					{ items.map((item,i) => {
							
                    	  	return(
                           		<motion.div className="items" key={i}>
									<img src={item[i].image} alt=""/>
                           		</motion.div>
                       	);
                    })}
										 
										 
					
					
					
				
               	</motion.div>
				
            </motion.div>
        </div>	
		
		</div>
		*/
	);
}

export default Componentpage;