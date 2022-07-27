import React ,{useEffect} from 'react'
import Axios from 'axios'
import Map from './Sections/Map'
import {API_URL,API_URL1, API_KEY,API_KEY1} from '../../Config'

function LandingPage(){
	useEffect(()=>{
		
		/*
		const endpoint = `${API_URL}galleryList?ServiceKey=${API_KEY}&arrange=A&MobileOS=ETC&MobileApp=AppTesting&_type=json&numOfRows=5`
		fetch(endpoint)//url
		.then(response => response.json())
		.then(response => console.log(response))
		*/
		for(let i=1;i<5;i++){
		const encodeStr=encodeURI("서울")
		const endpoint1 = `${API_URL}gallerySearchList?ServiceKey=${API_KEY}&arrange=A&pageNo=`+i+`&MobileOS=ETC&MobileApp=AppTesting&_type=json&numOfRows=50&keyword=`+encodeStr
		fetch(endpoint1)//url
		.then(response1 => response1.json())
		.then(response1 => console.log(response1))
		}
		
		const endpoint2 = `${API_URL1}metcoRegnVisitrDDList?ServiceKey=${API_KEY1}&numOfRows=10&pageNo=i&MobileOS=ETC&MobileApp=AppTesting&startYmd=20220513&endYmd=20220513&_type=json`
		fetch(endpoint2)
		.then(response2 => response2.json())
		.then(response2 => console.log(response2))
		
		const endpoint3 = `${API_URL1}locgoRegnVisitrDDList?ServiceKey=${API_KEY1}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTesting&startYmd=20210513&endYmd=2021513&_type=json`
		fetch(endpoint3)
		.then(response3 => response3.json())
		.then(response3 => console.log(response3))
		
	},[])
	
	return(
		<div>
			<Map/>
		</div>
	)
}
export default LandingPage