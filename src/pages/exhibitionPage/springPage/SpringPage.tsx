import SubNavi from '../_components/subNavi';
import imgSrc from '../../../assets/images/webp/1봄_42기_김성근_전자재료공학과.webp';
export default function SpringPage() {
  return (
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto">
      <SubNavi />
      <p>봄</p>
      <img src={imgSrc} alt="봄" />
      {/* 사진 import 예시임 지우셈 */}
    </div>
  );
}
