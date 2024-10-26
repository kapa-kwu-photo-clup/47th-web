import React from 'react';
import { Picture } from './imgWrapper';
// import arrowBack from '../../../assets/images/svg/arrow/back/arrow_back_btn.svg';
// import arrowBackSpring from '../../../assets/images/svg/arrow/back/spring_arrow_back_btn.svg';
// import arrowBackSummer from '../../../assets/images/svg/arrow/back/summer_arrow_back_btn.svg';
// import arrowBackFall from '../../../assets/images/svg/arrow/back/fall_arrow_back_btn.svg';
// import arrowBackWinter from '../../../assets/images/svg/arrow/back/winter_arrow_back_btn.svg';
// import arrowNext from '../../../assets/images/svg/arrow/next/arrow_next_btn.svg';
// import arrowNextSpring from '../../../assets/images/svg/arrow/next/spring_arrow_next_btn.svg';
// import arrowNextSummer from '../../../assets/images/svg/arrow/next/summer_arrow_next_btn.svg';
// import arrowNextFall from '../../../assets/images/svg/arrow/next/fall_arrow_next_btn.svg';
// import arrowNextWinter from '../../../assets/images/svg/arrow/next/winter_arrow_next_btn.svg';
// import close from '../../../assets/images/svg/close/close_btn.svg';
// import closeSpring from '../../../assets/images/svg/close/close_spring_btn.svg';
// import closeSummer from '../../../assets/images/svg/close/close_summer_btn.svg';
// import closeFall from '../../../assets/images/svg/close/close_fall_btn.svg';
// import closeWinter from '../../../assets/images/svg/close/close_winter_btn.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Picture | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) return null; // 모달이 열리지 않거나 이미지가 없으면 null 반환

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          x
        </button>
        <div>{image.flag} 기</div>
        <div>{image.name}</div>
        <div>{image.title}</div>
        <div>{image.content}</div>
        {/* <img
          className="w-full h-auto mt-4"
          src={`../../../../${image.address}`}
          alt={image.title}
        /> */}
      </div>
    </div>
  );
};

export default Modal;
