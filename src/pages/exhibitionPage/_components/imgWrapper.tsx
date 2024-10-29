import { useState } from 'react';
import { pictureData } from '../../../assets/data/pictureData';
import ImageCard from './imgCard';
import Modal from './modal'; // Modal 컴포넌트 임포트

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

// pictureData의 타입을 정의합니다.
interface PictureData {
  season: string;
  flag: number;
  name: string;
  dept: string;
  camera: string;
  title: string;
  content: string;
  address: string;
}

// pictureData의 타입을 명시합니다.
export default function ImgWrapper({ season }: ImgWrapperProps) {
  const seasonImg = pictureData.filter(
    (item: PictureData) => item.season === season,
  ); // item의 타입을 명시

  // 모달 상태 관리
  const [selectedImage, setSelectedImage] = useState<Picture | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: Picture) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-wrap my-24">
        {seasonImg.map(
          (
            item: PictureData,
            index: number, // item과 index의 타입을 명시
          ) => (
            <ImageCard
              key={index}
              item={item}
              onClick={() => openModal(item)}
            />
          ),
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </>
  );
}
