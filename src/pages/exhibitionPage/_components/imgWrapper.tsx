// 전시 페이지 프리뷰 컴포넌트
import { useEffect, useState } from 'react';
import { pictureData } from '../../../assets/data/pictureData';
import ImageCard from './imgCard';
import Modal from './modal';

// 각 이미지 정보를 담은 Picture 타입
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

export default function ImgWrapper({ season }: ImgWrapperProps) {
  const seasonImg = pictureData.filter(
    (item: Picture): item is Picture => item.season === season,
  );

  const [selectedImage, setSelectedImage] = useState<Picture | null>(null); // 선택된 이미지
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부

  // 모달 상태별로 상태 변경
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
      // 선택된 이미지의 index를 찾아서 이전 이미지로 변경
      const currentIndex = seasonImg.findIndex(
        (item) => item.index === selectedImage.index,
      );
      // 이전 이미지가 없으면 마지막 이미지로 변경
      const prevIndex =
        (currentIndex - 1 + seasonImg.length) % seasonImg.length;
      // 이전 이미지로 변경
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

  // 모달 open시 body 스크롤 막기
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
        {seasonImg.map((item: Picture) => (
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
