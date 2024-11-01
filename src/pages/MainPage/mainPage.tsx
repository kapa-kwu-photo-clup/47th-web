import { useMediaQuery } from 'react-responsive';
import Lottie, { Options } from 'react-lottie';
import mainWebAnimation from '../../assets/images/lottie/47th-main-web.json';
import mainMobileAnimation from '../../assets/images/lottie/47th-main-mobile.json';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export default function MainPage() {
  useScrollToTop();

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: isLargeScreen ? mainWebAnimation : mainMobileAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto lg:mt-[4.5rem]">
      <div className="flex flex-col gap-20">
        <Lottie options={defaultOptions} isClickToPauseDisabled />
        <div className="flex flex-col gap-16 text-center mt-20">
          <p className="text-2xl font-bold">인사말</p>
          <p className="text-lg leading-10">
            자연은 계절마다 색을 바꾸며 새로운 이야기를 들려줍니다.
            <br /> 봄의 생명력 넘치는 시작, 여름의 뜨거운 열정,
            <br /> 가을의 황금빛 낭만,그리고 겨울의 순백의 세계까지.
            <br /> 이번 &lt;FOUR SEASONS&gt; 사진전은 자연의 변화 속에서
            <br />매 순간 새롭게 펼쳐지는 아름다움을 담아냈습니다.
            <br /> 계절이 지닌 아름다운 이야기를 부원들의 작품 속에서 발견하며
            <br /> 자연과 하나가 되는 특별한 시간을 가질 수 있습니다.
          </p>
          <p className="text-lg leading-10">
            사진을 통해 전해지는 자연의 모습은
            <br />
            단순히 시각적인 즐거움을 넘어, 감동과 추억을 선사해 줍니다.
            <br />
            또한 쉽게 지나칠 수 있는 일상 속 자연의 순간을 <br />
            발견하게 하고 새롭게 경험하게 해 줄 것입니다.
            <br /> 사계절의 변화무쌍한 아름다움과 함께 각 계절을 오롯이 담아낸{' '}
            <br />이 전시에서 자연이 전하는 이야기를 들어 보세요.
          </p>
          <p className="text-xl font-semibold">2024년 카파일동</p>
        </div>
      </div>
    </div>
  );
}
