import { useEffect } from 'react';

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
  address: string;
  buildingName: string;
}

const Map: React.FC<MapProps> = ({ center, zoom, address, buildingName }) => {
  useEffect(() => {
    if (typeof naver !== 'undefined' && naver.maps) {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(center.lat, center.lng),
        zoom: zoom,
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(center.lat, center.lng), // 마커의 위치
        map: map,
      });

      // 정보창 생성
      const infoWindow = new naver.maps.InfoWindow({
        content: `
    <div class="text-center p-2 bg-white">
      <div class="font-semibold">${buildingName}</div>
      <div class="text-sm text-gray_bd">${address}</div>
    </div>
  `,
        borderColor: '#b2d35a',
      });

      // 마커 클릭 시 정보창 표시
      naver.maps.Event.addListener(marker, 'click', () => {
        infoWindow.open(map, marker.getPosition());
      });
    }
  }, [center, zoom, address, buildingName]);

  return <div id="map" className="w-full lg:h-[45rem] h-48" />;
};

export default Map;