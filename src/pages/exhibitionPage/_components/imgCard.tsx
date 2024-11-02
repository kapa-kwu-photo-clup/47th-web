// 개별 이미지 카드 컴포넌트
import React from 'react';
import { Picture } from './imgWrapper';

interface ImageCardProps {
  item: Picture; // 이미지 정보를 props로 받음
  onClick: () => void; // 클릭 핸들러를 props로 받음
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div className={`w-1/2 lg:w-1/4 relative lg:p-[1.35rem]`}>
      <img
        className="w-full h-full object-cover p-3 lg:hover:p-0 aspect-square lg:cursor-pointer"
        src={item.address}
        alt={`${item.season}-${item.flag}기-${item.name}-${item.title}`} // 겨울-42기-최승아-크리스마스트리
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
