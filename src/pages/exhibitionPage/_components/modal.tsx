import React, { useState } from 'react';
import { Picture } from './imgWrapper';
import CloseBtn from '../../../assets/images/svg/close/closeBtn';
import BackBtn from '../../../assets/images/svg/arrow/back/backBtn';
import NextBtn from '../../../assets/images/svg/arrow/next/nextBtn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Picture | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
  const [close, setClose] = useState('default');
  const [back, setBack] = useState('default');
  const [next, setNext] = useState('default');
  const [imgClass, setImgClass] = useState('w-auto h-auto');

  if (!isOpen || !image) return null; // 모달이 열리지 않거나 이미지가 없으면 null 반환

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;

    // 가로가 더 넓은 경우
    if (naturalWidth > naturalHeight) {
      setImgClass('w-full h-auto lg:h-[25rem] lg:w-auto');
    }
    // 세로가 더 넓은 경우
    else if (naturalHeight > naturalWidth) {
      setImgClass('w-2/3 h-auto lg:w-[25rem]');
    }
  };

  return (
    <div className="fixed inset-0 flex items-start mt-[4.25rem] lg:items-center justify-center bg-white lg:bg-gray_71 lg:bg-opacity-70">
      <div className="bg-white w-full h-full lg:w-3/4 lg:h-[47rem] flex flex-col items-center lg:justify-center px-2 relative overflow-y-auto">
        <button
          className="absolute top-2 right-0 lg:top-8 lg:right-8"
          onClick={onClose}
          onMouseEnter={() => setClose(image.season)}
          onMouseLeave={() => setClose('default')}
        >
          <CloseBtn season={close} />
        </button>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img
            className={`mt-24 lg:mt-0 ${imgClass}`}
            src={`../../../../${image.address}`}
            alt={image.title}
            onLoad={handleImageLoad}
          />
          <div className="w-full mt-10 lg:w-[19rem] lg:ml-10">
            <div className="flex items-center font-bold">
              <div
                className={`w-16 text-white px-2 py-1 text-xl mr-2 ${
                  image.season === '봄'
                    ? 'bg-springPink'
                    : image.season === '여름'
                    ? 'bg-summerGreen_01'
                    : image.season === '가을'
                    ? 'bg-fallPurple'
                    : 'bg-winterBlue'
                }`}
              >
                {image.flag} 기
              </div>
              <div className="text-xl">{image.name}</div>
            </div>
            <div className="text-4xl my-4">{image.title}</div>
            <div className="text-xl">{image.content}</div>
          </div>
        </div>
        <div className="absolute top-2 left-0 lg:top-auto lg:left-auto lg:right-8 lg:bottom-8 flex space-x-2">
          <button
            onMouseEnter={() => setBack(image.season)}
            onMouseLeave={() => setBack('default')}
          >
            <BackBtn season={back} />
          </button>
          <button
            onMouseEnter={() => setNext(image.season)}
            onMouseLeave={() => setNext('default')}
          >
            <NextBtn season={next} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
