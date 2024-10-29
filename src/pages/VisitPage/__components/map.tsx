import { useEffect } from 'react';

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  useEffect(() => {
    // 네이버 맵이 로드되었을 때만 초기화
    if (typeof naver !== 'undefined' && naver.maps) {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(center.lat, center.lng),
        zoom: zoom,
      });

      // 마커 추가
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(center.lat, center.lng), // 마커의 위치
        map: map, // 마커를 추가할 지도
      });
    }
  }, [center, zoom]);

  return <div id="map" className="w-full lg:h-[45rem] h-48" />;
};

export default Map;
