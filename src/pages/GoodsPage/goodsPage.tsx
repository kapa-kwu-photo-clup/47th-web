import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useMediaQuery } from 'react-responsive';
import GoodsImg from '../../assets/images/jpg/goodsImg.jpg';
import GoodsImgMobile from '../../assets/images/jpg/GoodsImgMobile.jpg';
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
        <div className=" flex flex-wrap gap-[2.625rem] justify-center mb-40">
          <GoodsBox
            imgSrc={GoodsImg}
            goodsName="2025 미니 달력"
            goodsSubtitle="사계절을 담은 달력"
            goodsPrice="5,000원"
          />
          <GoodsBox
            imgSrc={GoodsImg}
            goodsName="필름 키링"
            goodsSubtitle="달랑달랑 필름 키링"
            goodsPrice="500원"
          />
          <GoodsBox
            imgSrc={GoodsImg}
            goodsName="엽서"
            goodsSubtitle="전시작을 담은 엽서"
            goodsPrice="무료"
          />
          <GoodsBox imgSrc="" goodsName="" goodsSubtitle="" goodsPrice="" />
        </div>
      </div>
    </>
  );
}
