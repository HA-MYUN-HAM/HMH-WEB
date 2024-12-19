import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { LeftArrowIcon } from '../../../assets/icon';
import { BackgroundImg, SpinnerGIF } from '../../../assets/img';
import Header from '../../../components/Header';
import ImgResult from '../../My/components/ImgResult';


const ImageGeneratePage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 24000);
  
    return () => clearTimeout(timer); 
  }, []);

  const leftFn = () => {
    navigate('/event-generate');
  };

  return (
    <ImageGeneratePageLayout>
      <Header leftFn={leftFn} leftIcon={LeftArrowIcon} title='홍보물 이미지 생성'/>
      <SpinnerBox>
        {loading ? 
          <>
            <img src={SpinnerGIF} alt='로딩_스피너'/>
            <span>이미지를 생성하고 있어요!</span>
          </>          
          : <ImgResult />}
      </SpinnerBox> 
    </ImageGeneratePageLayout>
  );
};

export default ImageGeneratePage;

const ImageGeneratePageLayout = styled.main`
  display: flex;
  flex-direction: column;

  width: 100dvw;
  height: 100dvh;

  background-image: url(${BackgroundImg});
  background-size: cover;
`;

const SpinnerBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.head03};
`;
