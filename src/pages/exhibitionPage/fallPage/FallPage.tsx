import React, { Suspense } from 'react';
import SubNavi from '../_components/subNavi';
const ImgWrapper = React.lazy(() => import('../_components/imgWrapper'));

export default function FallPage() {
  return (
    <div className=" lg:w-3/4 lg:py-0 lg:px-0 px-5 mx-auto">
      <SubNavi />
      <Suspense fallback={<div>Loading...</div>}>
        <ImgWrapper season="가을" />
      </Suspense>
    </div>
  );
}
