import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CameraIcon, LeftArrowIcon } from '../../../assets/icon';
import { BackgroundImg } from '../../../assets/img';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import ImageModal from '../component/ImageModal';
import { InputValue } from '../constants/InputValue';

const EventGeneratePage = () => {
  const [activateModal, setActivateModal] = useState(false);
  const navigate = useNavigate();

  const leftFn = () => {
    navigate('/');
  };

  const openModalFn = () => {
    setActivateModal(true);
  };
  
  return (
    <>
      <Header leftFn={leftFn} leftIcon={LeftArrowIcon} title='행사 생성' />
      <EventGeneratePageLayout>
        <AIImgUpload type='button' onClick={openModalFn}>
          <CameraIcon /><span>홍보물 생성하기</span>
        </AIImgUpload>
        <InputForm>
          {InputValue.map((section, index) => (
            <InputSection key={index}>
              <InputTitle>{section.title}</InputTitle>
              {section.type === 'textarea' ? (
                <TextareaInput placeholder={section.placeholder} />
              ) : (
                <Input 
                  name={section.title}                      
                  type={section.type} 
                  placeholder={section.placeholder} 
                  required={section.required} 
                />
              )}
            </InputSection>
          ))}
        </InputForm>
        <Button text="생성하기" clickedFn={leftFn} />
      </EventGeneratePageLayout>
      {activateModal && <ImageModal />}
    </>
  );
};

export default EventGeneratePage;

const EventGeneratePageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  width: 100dvw;
`;

const AIImgUpload = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 20rem;
  height: 20rem;
  border-radius: 6px;

  background-image: url(${BackgroundImg});
  background-size: cover;
  color: ${({ theme }) => theme.color.grey900};
  ${({ theme }) => theme.fonts.small02};
  ${({ theme }) => theme.effect.boxDrop};
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  padding: 1.2rem 2.4rem;
`;

const InputSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InputTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.fonts.body01};
`;

const Input = styled.input`
  width: 100%;
  padding: 1.6rem;
  flex: 1;

  border: 0.1rem solid ${({ theme }) => theme.color.grey300};
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.grey900};
  ${({ theme }) => theme.fonts.body02};

  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.color.primary};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.grey500};
  }
`;

const TextareaInput = styled.textarea`
  padding: 1.6rem;
  width: 100%;
  height: 12rem;
  resize: none;

  border: 0.1rem solid ${({ theme }) => theme.color.grey300};
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.grey900};
  ${({ theme }) => theme.fonts.body02};

  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.color.primary};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.grey500};
  }
`;
