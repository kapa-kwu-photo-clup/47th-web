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

  if (!isOpen || !image) return null; // 모달이 열리지 않거나 이미지가 없으면 null 반환

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray_71 bg-opacity-70">
      <div className="bg-white lg:w-3/4 lg:h-[47rem] flex flex-col items-center">
        <button
          className="self-end mr-8 mt-8"
          onClick={onClose}
          onMouseEnter={() => setClose(image.season)}
          onMouseLeave={() => setClose('default')}
        >
          <CloseBtn season={close} />
        </button>
        <div className="flex justify-center items-center">
          <img
            className="w-[25rem]"
            src={`../../../../${image.address}`}
            alt={image.title}
          />
          <div className="w-[19rem] ml-10">
            <div className="flex items-center  font-bold">
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
        <div className="self-end mr-8 mb-8">
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
