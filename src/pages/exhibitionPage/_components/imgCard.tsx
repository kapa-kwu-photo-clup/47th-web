import React from 'react';
import { Picture } from './imgWrapper';

interface ImageCardProps {
  item: Picture;
  onClick: () => void; // 클릭 핸들러를 props로 받음
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div className={`w-1/2 lg:w-1/4 relative lg:p-[1.35rem]`}>
      <img
        className="w-full h-full object-cover p-3 lg:hover:p-0 transition-all duration-300 aspect-square lg:cursor-pointer"
        src={item.address} // 이미지 주소를 props로 받음
        alt={`${item.season}-${item.flag}기-${item.name}-${item.title}`}
        onClick={onClick} // 클릭 이벤트 추가
      />
    </div>
  );
};

export default ImageCard;
