import { useScrollToTop } from '../../hooks/useScrollToTop';

export default function ComePage() {
  useScrollToTop();

  return (
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto">
      <div className="flex flex-col gap-4 mb-5">
        <p className="text-5xl font-bold">레온 갤러리 구의</p>
      </div>
    </div>
  );
}
