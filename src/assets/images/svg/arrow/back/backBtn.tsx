import back_btn from './back_btn_basic.svg';
import back_btn_spring from './back_btn_spring.svg';
import back_btn_summer from './back_btn_summer.svg';
import back_btn_fall from './back_btn_fall.svg';
import back_btn_winter from './back_btn_winter.svg';

const getBackIcon = (season: string) => {
  switch (season) {
    case '봄':
      return <img src={back_btn_spring} />;
    case '여름':
      return <img src={back_btn_summer} />;
    case '가을':
      return <img src={back_btn_fall} />;
    case '겨울':
      return <img src={back_btn_winter} />;
    default:
      return <img src={back_btn} />; // 기본 아이콘
  }
};

interface BackProps {
  season?: string;
}

const BackBtn: React.FC<BackProps> = ({ season }) => {
  return (
    <div className="w-12">
      {getBackIcon(season || '')} {/* season prop이 없으면 기본 아이콘 */}
    </div>
  );
};

export default BackBtn;
