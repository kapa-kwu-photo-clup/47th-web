import React, { useState } from 'react';
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

export default function ImgWrapper({ season }: ImgWrapperProps) {
  const seasonImg = pictureData.filter((item) => item.season === season);

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
        {seasonImg.map((item, index) => (
          <ImageCard key={index} item={item} onClick={() => openModal(item)} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </>
  );
}
