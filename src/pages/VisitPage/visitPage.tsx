import { useScrollToTop } from '../../hooks/useScrollToTop';
import Map from './__components/map';

export default function ComePage() {
  useScrollToTop();

  return (
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto lg:mt-[4.5rem]">
      <div className="flex flex-col gap-4 mb-5">
        <p className="text-5xl font-bold">레온 갤러리 구의</p>
        <Map
          center={{ lat: 37.5378952, lng: 127.0848809 }}
          zoom={15}
          address="서울 광진구 자양로18길 25 지하1층"
          buildingName="레온갤러리 구의 플레이스라운드"
        />
        <div className="mt-16">
          <p className="text-4xl">서울 광진구 자양로18길 25 지하1층</p>
          <p className="text-xl text-gray_71 py-9">
            회장 김성근 42기 T. 010-4848-0405
          </p>
          {/* line */}
          <div className="bg-summerGreen_01 h-[0.125rem]"></div>
        </div>

        <div className="border-b-2 border-lightGray lg:flex lg:py-8">
          <div className="text-4xl mt-8 lg:mt-0 lg:w-72">
            지하철로 오실 경우
          </div>
          <div className="my-8 lg:my-0">
            <div className="text-xl font-bold mb-1">
              구의역 (2호선) 1번 출구
            </div>
            <div className="text-xl text-gray_71">
              1번 출구로 나와서 더벤티 지나 우측 골목 이용 (도보 3분 거리)
            </div>
          </div>
        </div>
        <div className="border-b-2 border-lightGray lg:flex lg:py-8">
          <div className="text-4xl  lg:w-72">버스로 오실 경우</div>
          <div className="my-8 lg:my-0">
            <div className="text-xl font-bold mb-1">
              광진구청 정류장(05148) 이용
            </div>
            <div className="text-xl text-gray_71">
              303, 2221, 2311, 3216, 3220
            </div>
          </div>
        </div>
        <div className="lg:flex lg:py-8">
          <div className="text-4xl  lg:w-72">자동차로 오실 경우</div>
          <div className="my-8 lg:my-0">
            <div className="text-xl font-bold mb-1">자양로 18길 25</div>
            <span className="text-xl text-gray_71">
              <span className="text-[#ff3838]">
                전시장 주차가 불가능합니다.&nbsp;
              </span>
              가급적 대중교통 이용를 부탁드립니다.
              <br />
            </span>
            <span className="text-xl text-gray_71">
              자동차로 오실 경우 근처&nbsp;
              <span className="lg:text-[#ff3838]">
                구의1동 공영주차장(서울 광진구 자양로18길 78)을
                이용부탁드립니다. 30분 ₩1,200
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
