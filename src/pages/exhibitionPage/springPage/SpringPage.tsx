import React, { Suspense } from 'react';
import SubNavi from '../_components/subNavi';

// 동적으로 컴포넌트 로딩
const ImgWrapper = React.lazy(() => import('../_components/imgWrapper'));
export default function SpringPage() {
  return (
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto">
      <SubNavi />
      <Suspense fallback={<div>Loading...</div>}>
        <ImgWrapper season="봄" />
      </Suspense>
    </div>
  );
}
