interface GoodsBoxProps {
  imgSrc: string;
  goodsName: string;
  goodsSubtitle: string;
  goodsPrice: string;
}

export default function GoodsBox({
  imgSrc,
  goodsName,
  goodsSubtitle,
  goodsPrice,
}: GoodsBoxProps) {
  return (
    <div className="flex flex-col p-5">
      <img className="object-cover aspect-square mb-4" src={imgSrc} />
      <p className="lg:text-xl text-lg font-bold mb-1">{goodsName}</p>
      <p className="lg:text-xl text-lg font-base mb-8">{goodsSubtitle}</p>
      <p className="lg:text-xl text-lg font-bold">{goodsPrice}</p>
    </div>
  );
}
