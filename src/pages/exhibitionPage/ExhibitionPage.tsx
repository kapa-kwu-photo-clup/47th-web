import { useEffect, useState } from 'react';

//전시회 공개전 페이지
export default function ExhibitionPage() {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const targetDate = new Date('2024-11-08T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft('전시회가 공개되었습니다!');
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남음`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" lg:w-3/4  lg:py-0 lg:px-0 px-5 mx-auto ">
      <div className="flex flex-col ">
        <div className=" mx-auto my-64 text-center">
          <p className="text-xl">전시 작품이 공개 되기 전입니다.</p>
          <p className="text-xl">11월 8일 공개됩니다.</p>
          <p className="text-xl">{timeLeft}</p>
        </div>
      </div>
    </div>
  );
}
