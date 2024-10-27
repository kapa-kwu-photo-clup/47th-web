import close_btn from './close_btn_basic.svg';
import close_btn_spring from './close_btn_spring.svg';
import close_btn_summer from './close_btn_summer.svg';
import close_btn_fall from './close_btn_fall.svg';
import close_btn_winter from './close_btn_winter.svg';

const getCloseIcon = (season: string) => {
  switch (season) {
    case '봄':
      return <img src={close_btn_spring} />;
    case '여름':
      return <img src={close_btn_summer} />;
    case '가을':
      return <img src={close_btn_fall} />;
    case '겨울':
      return <img src={close_btn_winter} />;
    default:
      return <img src={close_btn} />; // 기본 아이콘
  }
};

interface CloseProps {
  season?: string;
}

const CloseBtn: React.FC<CloseProps> = ({ season }) => {
  return (
    <div>
      {getCloseIcon(season || '')} {/* season prop이 없으면 기본 아이콘 */}
    </div>
  );
};

export default CloseBtn;
