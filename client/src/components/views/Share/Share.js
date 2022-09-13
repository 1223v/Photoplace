import React, {useEffect} from 'react';
import Loading from '../Loading/Loading';

function Share() {
	
	let img = "";
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://developers.kakao.com.sdk/js/kakao.js";
		script.async = true;
		document.body.appendChild(script);
		return () => document.body.removeChild(script);		
		
	}, []);
	
	const shareKakaoCustom = () => {	
		let url = document.URL;
		let parse = url.split('&');
		let title = decodeURI(parse[1]);
		let num = parse[2];
		let desc = decodeURI(parse[3]);
		img = decodeURI(atob(parse[4]));

		if(window.Kakao) {
			const kakao = window.Kakao;
			if(!kakao.isInitialized()) {
				kakao.init("88a1a10486c09c3e8ebff912acfccd68");
			}

			kakao.Link.sendCustom({
				templateId: 81118,
				templateArgs: {
					'title': title,
					'num': num,
					'description': desc,
					'image': img
				}
			});			
		}
	};
	
	return (
		<div>
			<Loading></Loading>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<img src="#" onError={shareKakaoCustom} />
		
		
		</div>
	);
}

export default Share;