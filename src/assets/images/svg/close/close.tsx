import React from 'react';
import { ReactComponent as CloseBasic } from './close_btn.svg';
import { ReactComponent as CloseSpring } from './close_spring_btn.svg';
import { ReactComponent as CloseSummer } from './close_summer_btn.svg';
import { ReactComponent as CloseFall } from './close_fall_btn.svg';
import { ReactComponent as CloseWinter } from './close_winter_btn.svg';

// 계절에 따라 아이콘을 선택하는 함수
const getCloseIcon = (season: string) => {
  switch (season) {
    case 'spring':
      return <CloseSpring />;
    case 'summer':
      return <CloseSummer />;
    case 'fall':
      return <CloseFall />;
    case 'winter':
      return <CloseWinter />;
    default:
      return <CloseBasic />; // 기본 아이콘
  }
};

interface CloseProps {
  season?: string; // 계절을 prop으로 받을 수 있도록 설정
}

const Close: React.FC<CloseProps> = ({ season }) => {
  return (
    <div className="close">
      {getCloseIcon(season || '')} {/* season prop이 없으면 기본 아이콘 */}
    </div>
  );
};

export default Close;
