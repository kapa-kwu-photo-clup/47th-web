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
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto">
      <div className="flex flex-col gap-40">
        <Lottie options={defaultOptions} />

        <p className=" text-center ">
          인사말 <br />
        </p>
      </div>
    </div>
  );
}
