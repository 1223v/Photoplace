import React from 'react';
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./ImagesComponent.css";

let locationName = [];
let information = [];

function ImagesComponent(props){	
	
	locationName = props.location;	
	information = props.info;
	
	//location : 장소 이름
	//info : 위치 정보
	
	return(
		<div>
			{locationName.map((name) => {
				console.log({name});
				return(
					<div className="locationName">
						{name}								
					</div>
				);
			})}
			
			{information.map((info) => {
				return(	
					<div className="information">
						{info}
					</div>
				);
			})}
			{information.map((item) => {
				return(	
					<div className="information">
						{info}
					</div>
				);
			})}
		</div>
			
	)
	
}

export default ImagesComponent