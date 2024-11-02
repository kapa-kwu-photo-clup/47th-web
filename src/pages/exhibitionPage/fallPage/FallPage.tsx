import React, { Suspense } from 'react';
import SubNavi from '../_components/subNavi';
const ImgWrapper = React.lazy(() => import('../_components/imgWrapper'));

export default function FallPage() {
  return (
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto lg:mt-[4.5rem]">
      <SubNavi />
      {/* Suspense 컴포넌트로 감싸서 로딩 중일 때 보여줄 컴포넌트를 지정 */}
      <Suspense fallback={<div>Loading...</div>}>
        <ImgWrapper season="가을" />
      </Suspense>
    </div>
  );
}
