/* global kakao */
import React, { useEffect } from 'react'



const Map=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.486021038352995, 126.80229974931666),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
	  
	var imageSrc = 'https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTNfMjA2/MDAxNTg0MDI3MzA1MTM1.ziQdHXjoSVpswgl7MkBXPOamMHIiKQKPpqjtQNkw6IMg.rkebY82ViYlYz83X1y5B7Fm6qyQkC2ZZlmHgRyJw1vAg.JPEG.d_hye97/1.jpg?type=w800', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    	 markerPosition  = new kakao.maps.LatLng(37.486021038352995, 126.80229974931666); 
    var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});
  marker.setMap(map);
	  
	  
	  var imageSrc1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhRk06-nfObLkWTnoLLflwUciu_lbjOzpufdZepvPEDQ9bhxI2uwmCqyH7QkOpxSOWYM&usqp=CAU', // 마커이미지의 주소입니다    
    imageSize1 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption1 = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
    	 markerPosition1  = new kakao.maps.LatLng(37.48537038266118, 126.81216094099648); 
    var marker1 = new kakao.maps.Marker({
    position: markerPosition1, 
    image: markerImage1 // 마커이미지 설정 
});
marker1.setMap(map);
	  
	  
	  var imageSrc2 = 'https://img.insight.co.kr/static/2020/09/22/700/97so3hz72p4nq982if5l.jpg', // 마커이미지의 주소입니다    
    imageSize2 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption2 = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
    	 markerPosition2  = new kakao.maps.LatLng(37.4829471177741 , 126.79612326284906); 
    var marker2 = new kakao.maps.Marker({
    position: markerPosition2, 
    image: markerImage2 // 마커이미지 설정 
});
marker2.setMap(map);
    }, [])


    return (
        <div>
        <div id="map" style={{width:"1530px", height:"670px"}}></div>
       
        </div>
    )
}

export default Map;