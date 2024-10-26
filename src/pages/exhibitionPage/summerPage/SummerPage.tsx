import SubNavi from '../_components/subNavi';
import ImgWrapper from '../_components/imgWrapper';

export default function SummerPage() {
  return (
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto">
      <SubNavi />
      <ImgWrapper season="여름" />
    </div>
  );
}
