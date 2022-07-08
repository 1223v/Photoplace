import React from 'react'
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import "./Componentpage.css";

//component 네모 만들고
function Componentpage() {
    const [width,setwidth] = useState(0);
    const dragAreaRef = useRef(null);
	let images = [
		"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png",
		"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png",
		"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png",
		"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png",
		"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0qPUV%2FbtrGbYaFMNG%2FdGuykZIHsDyqrrwtz4Ptk0%2Fimg.png",
		"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUpFy%2FbtrGF6SfaRi%2F2RBk5OaRvQD5FbuJtcCE70%2Fimg.png",
		
	]

    useEffect(() => {
        setwidth(dragAreaRef.current.scrollWidth - dragAreaRef.current.offsetWidth);
    },[]);

    return (
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
                   	{images.map((image) => {
                       	return(
                           		<motion.div className="item7777" key={image}>
                               		<img src={image} alt=""/>
									
								
                           		</motion.div>
                       	);
                    })}
               	</motion.div>
            </motion.div>
        </div>
		
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
                   	{images.map((image) => {
                       	return(
                           		<motion.div className="item7777" key={image}>
                               		<img src={image} alt=""/>
                           		</motion.div>
                       	);
                    })}
               	</motion.div>
				
            </motion.div>
        </div>	
			
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
                   	{images.map((image) => {
                       	return(
                           		<motion.div className="item7777" key={image}>
                               		<img src={image} alt=""/>
                           		</motion.div>
                       	);
                    })}
               	</motion.div>
            </motion.div>
        </div>
		
		</div>
    )
}

export default Componentpage