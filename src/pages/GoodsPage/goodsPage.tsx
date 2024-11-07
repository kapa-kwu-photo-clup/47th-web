import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useMediaQuery } from 'react-responsive';
import GoodsImg from '../../assets/images/jpg/goodsImg.jpg';
import GoodsImgMobile from '../../assets/images/jpg/goodsImgMobile.jpg';
import KiringImg from '../../assets/images/jpg/키링썸네일.jpg';
import PostcardImg from '../../assets/images/jpg/엽서썸네일.jpg';
import CalendarImg from '../../assets/images/jpg/달력썸네일.jpg';
import GoodsBox from './_components/goodsBox';
export default function GoodsPage() {
  useScrollToTop();

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <img
        className="w-full mb-[4.5rem]"
        src={isLargeScreen ? GoodsImg : GoodsImgMobile}
      />
      <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto">
        <div className=" flex flex-wrap mb-40">
          <div className="lg:w-1/4 w-1/2 lg:mb-0 mb-11">
            <GoodsBox
              imgSrc={CalendarImg}
              goodsName="2025 미니 달력"
              goodsSubtitle="사계절을 담은 달력"
              goodsPrice="6,000원"
            />
          </div>
          <div className="lg:w-1/4 w-1/2 lg:mb-0 mb-11">
            <GoodsBox
              imgSrc={KiringImg}
              goodsName="필름 키링"
              goodsSubtitle="달랑달랑 필름 키링"
              goodsPrice="1,000원"
            />
          </div>
          <div className="lg:w-1/4 w-1/2 lg:mb-0 mb-11">
            <GoodsBox
              imgSrc={PostcardImg}
              goodsName="엽서"
              goodsSubtitle="전시작을 담은 엽서"
              goodsPrice="무료"
            />
          </div>{' '}
        </div>
      </div>
    </>
  );
}
