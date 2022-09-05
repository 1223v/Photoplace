import React, { useRef, useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function DetailSlide(props) {
	const [DetailImgs, setDetailImgs] = useState([]);
	const dragAreaRef = useRef(null);
	
	useEffect(() => {
		let body = {
			city: props.cityinfo,
		};
		
		if (body.city != null) {
			Axios.post('/api/data/detailSlide', body).then((response) => {
				
				setDetailImgs(response.data);
				console.log(response.data);
			});
		}
	}, [props.cityinfo]);
	
	return (
		<div style={{marginTop: '10px'}}>
			<div style={{ width: '100%'}} className="photos">
				<motion.div
					ref={dragAreaRef}
					className="dragAreaRef"
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						style={{ width: '100%', height: '100%' }}
						drag="x"
						dragConstraints={{ right: 0, left: -650 }}
						className="inner-carousel"
					>
						{DetailImgs.map((array, index) => {
							return (
								<motion.div className="item7777" key={index}>
									<div>
										<img src={array.IMG_URL} alt="" />
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
				<br/>
			</div>
		</div>
	);

}

export default DetailSlide;

