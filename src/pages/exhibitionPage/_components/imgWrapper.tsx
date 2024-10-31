import { useEffect, useState } from 'react';
import { pictureData } from '../../../assets/data/pictureData';
import ImageCard from './imgCard';
import Modal from './modal';

export interface Picture {
  index: number;
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

interface PictureData {
  index: number;
  season: string;
  flag: number;
  name: string;
  dept: string;
  camera: string;
  title: string;
  content: string;
  address: string;
}

export default function ImgWrapper({ season }: ImgWrapperProps) {
  const seasonImg = pictureData.filter(
    (item: PictureData): item is PictureData => item.season === season,
  );

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

  // 모달에서 이전, 다음 이미지 보여주기
  const handleBack = () => {
    if (selectedImage) {
      const currentIndex = seasonImg.findIndex(
        (item) => item.index === selectedImage.index,
      );
      const prevIndex =
        (currentIndex - 1 + seasonImg.length) % seasonImg.length;
      setSelectedImage(seasonImg[prevIndex]);
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = seasonImg.findIndex(
        (item) => item.index === selectedImage.index,
      );
      const nextIndex = (currentIndex + 1) % seasonImg.length;
      setSelectedImage(seasonImg[nextIndex]);
    }
  };

  // 모달 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex flex-wrap my-24">
        {seasonImg.map((item: PictureData) => (
          <ImageCard
            key={item.index}
            item={item}
            onClick={() => openModal(item)}
          />
        ))}
      </div>
      {selectedImage && (
        <Modal
          isOpen={selectedImage !== null}
          onClose={closeModal}
          image={selectedImage}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
    </>
  );
}
