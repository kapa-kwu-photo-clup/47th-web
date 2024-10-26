import React from 'react';
import { ReactComponent as ArrowNextBasic } from './arrow_next_btn.svg';
import { ReactComponent as ArrowNextSpring } from './spring_arrow_next_btn.svg';
import { ReactComponent as ArrowNextSummer } from './summer_arrow_next_btn.svg';
import { ReactComponent as ArrowNextFall } from './fall_arrow_next_btn.svg';
import { ReactComponent as ArrowNextWinter } from './winter_arrow_next_btn.svg';

// 계절에 따라 아이콘을 선택하는 함수
const getArrowNextIcon = (season: string) => {
  switch (season) {
    case 'spring':
      return <ArrowNextSpring />;
    case 'summer':
      return <ArrowNextSummer />;
    case 'fall':
      return <ArrowNextFall />;
    case 'winter':
      return <ArrowNextWinter />;
    default:
      return <ArrowNextBasic />; // 기본 아이콘
  }
};

interface ArrowNextProps {
  season?: string; // 계절을 prop으로 받을 수 있도록 설정
}

const ArrowNext: React.FC<ArrowNextProps> = ({ season }) => {
  return (
    <div className="arrow-next">
      {getArrowNextIcon(season || '')} {/* season prop이 없으면 기본 아이콘 */}
    </div>
  );
};

export default ArrowNext;
