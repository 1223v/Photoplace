import React, {useEffect} from 'react';
import {useShare} from '../Context/forShareModal';

function Share() {
	const {Title, Img, Description, Num} = useShare();
	
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://developers.kakao.com.sdk/js/kakao.js";
		script.async = true;
		document.body.appendChild(script);
		return () => document.body.removeChild(script);		
	}, []);
	
	const shareKakaoCustom = () => {	
		console.log("after share" + Img);
		console.log("after share" + Title);
		console.log("after share" + Description);
		console.log("after share" + Num);
		if(window.Kakao) {
			const kakao = window.Kakao;
			if(!kakao.isInitialized()) {
				kakao.init("88a1a10486c09c3e8ebff912acfccd68");
			}

			kakao.Link.sendCustom({
				templateId: 81118,
				templateArgs: {
					'like': 123,
					'share': 321,
					'view': 213,
					'title': Title,
					'num': Num,
					'description': Description,
					'image': Img
				}
			});			
		}
	};
	
	return (
		<center>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<img src="#" onError={shareKakaoCustom} />
		</center>
	);
}

export default Share;