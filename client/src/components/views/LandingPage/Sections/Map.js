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
    var markerPosition  = new kakao.maps.LatLng(37.486021038352995, 126.80229974931666); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
        <div id="map" style={{width:"1530px", height:"670px"}}></div>
       
        </div>
    )
}

export default Map;