import React from 'react';
import { ReactComponent as ArrowBackBasic } from './arrow_back_btn.svg';
import { ReactComponent as ArrowBackSpring } from './spring_arrow_back_btn.svg';
import { ReactComponent as ArrowBackSummer } from './summer_arrow_back_btn.svg';
import { ReactComponent as ArrowBackFall } from './fall_arrow_back_btn.svg';
import { ReactComponent as ArrowBackWinter } from './winter_arrow_back_btn.svg';

// 계절에 따라 아이콘을 선택하는 함수
const getArrowBackIcon = (season: string) => {
  switch (season) {
    case 'spring':
      return <ArrowBackSpring />;
    case 'summer':
      return <ArrowBackSummer />;
    case 'fall':
      return <ArrowBackFall />;
    case 'winter':
      return <ArrowBackWinter />;
    default:
      return <ArrowBackBasic />; // 기본 아이콘
  }
};

interface ArrowBackProps {
  season?: string; // 계절을 prop으로 받을 수 있도록 설정
}

const ArrowBack: React.FC<ArrowBackProps> = ({ season }) => {
  return (
    <div className="arrow-back">
      {getArrowBackIcon(season || '')} {/* season prop이 없으면 기본 아이콘 */}
    </div>
  );
};

export default ArrowBack;
