import React, { useState, useEffect } from 'react';
import { Picture } from './imgWrapper';

interface ImageCardProps {
  item: Picture;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  const [loading, setLoading] = useState(true);

  // 이미지 주소가 변경될 때 로딩 상태를 true로 설정하여 로딩 시작을 표시
  useEffect(() => {
    setLoading(true);
  }, [item.address]);

  // 이미지 로딩 성공 시 로딩 상태를 false로 변경
  const handleImageLoad = () => {
    setLoading(false);
  };

  // 이미지 로딩 실패 시 로딩 상태를 true로 변경
  const handleImageError = () => {
    setLoading(true);
  };

  return (
    <div
      className={`w-1/2 lg:w-1/4 relative lg:p-[1.35rem] ${
        loading ? 'animate-pulse' : ''
      }`}
    >
      <img
        className="w-full h-full object-cover p-3 lg:hover:p-0 transition-all duration-300 aspect-square lg:cursor-pointer"
        src={item.address}
        alt={`${item.season}-${item.flag}기-${item.name}-${item.title}`}
        onClick={onClick}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default ImageCard;
