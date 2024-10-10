export default function ExhibitionPage() {
  return (
    <div>
      <p>exhibitionpage</p>
      <p>계절</p>
      <div className=" w-full flex flex-row">
        <div className=" w-full bg-springPink">
          <p>봄</p>
        </div>
        <div className=" w-full bg-summerGreen_01">
          <p>여름</p>
        </div>
        <div className=" w-full bg-fallPurple">
          <p>가을</p>
        </div>
        <div className=" w-full bg-winterBlue">
          <p>겨울</p>
        </div>
      </div>
    </div>
  );
}
