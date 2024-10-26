import { pictureData } from '../../../assets/data/pictureData';

export interface Picture {
  season: string;
  flag: number;
  name: string;
  dept: string;
  camera: string;
  title: string;
  content: string;
  address: string;
}

interface ImgWrapperProps {
  season: string;
}

export default function ImgWrapper({ season }: ImgWrapperProps) {
  const seasonImg = pictureData.filter((item) => item.season === season);

  return (
    <div className="flex flex-wrap my-24">
      {seasonImg.map((item, index) => (
        <div key={index} className={`w-1/2 lg:w-1/4 relative lg:p-[1.35rem]`}>
          <img
            className="w-full h-full object-cover p-3 lg:hover:p-0 aspect-square"
            src={`../../../../${item.address}`}
            alt={`${item.season}-${item.flag}기-${item.name}-${item.title}`}
          />
        </div>
      ))}
    </div>
  );
}
