import next_btn from './next_btn_basic.svg';
import next_btn_spring from './next_btn_spring.svg';
import next_btn_summer from './next_btn_summer.svg';
import next_btn_fall from './next_btn_fall.svg';
import next_btn_winter from './next_btn_winter.svg';

const getNextIcon = (season: string) => {
  switch (season) {
    case '봄':
      return <img src={next_btn_spring} />;
    case '여름':
      return <img src={next_btn_summer} />;
    case '가을':
      return <img src={next_btn_fall} />;
    case '겨울':
      return <img src={next_btn_winter} />;
    default:
      return <img src={next_btn} />; // 기본 아이콘
  }
};

interface NextProps {
  season?: string;
}

const NextBtn: React.FC<NextProps> = ({ season }) => {
  return (
    <div>
      {getNextIcon(season || '')} {/* season prop이 없으면 기본 아이콘 */}
    </div>
  );
};

export default NextBtn;
