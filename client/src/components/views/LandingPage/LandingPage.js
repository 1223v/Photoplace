import React ,{useEffect} from 'react'
import Axios from 'axios'
import Map from './Sections/Map'
import {API_URL,API_URL1, API_KEY,API_KEY1} from '../../Config'

function LandingPage(){
	useEffect(()=>{
		Axios.get('https://korea-app.run.goorm.io/api/data/hello')
		.then(response=> console.log(response.data))
		
		const endpoint = `${API_URL}galleryList?ServiceKey=${API_KEY}&arrange=A&MobileOS=ETC&MobileApp=AppTesting&_type=json`
		
		fetch(endpoint)
		.then(response => response.json())
		.then(response => console.log(response))
		
		const endpoint1 = `${API_URL1}?ServiceKey=${API_KEY1}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTesting&_type=json`
		fetch(endpoint1)
		.then(response1 => response1.json())
		.then(response1 => console.log(response1))
	},[])
	
	return(
		<div>
			<Map/>
		</div>
	)
}
export default LandingPage