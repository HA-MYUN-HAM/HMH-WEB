import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  CameraIcon, 
  DefaultCheckIcon, 
  LeftArrowIcon, 
  SelectedCheckIcon 
} from '../../../assets/icon';
import { BackgroundImg } from '../../../assets/img';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

const EventGeneratePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
    
  const leftFn = () => {
    navigate('/');
  };

  const submitFn = () => {
    navigate('/img-generator');
  };

  return (
    <>
      <Header leftFn={leftFn} leftIcon={LeftArrowIcon} title='행사 추가'/>
      <EventGeneratePageLayout>
        <AIImgUpload type='button' onClick={submitFn}>
          <CameraIcon /><span>홍보물 생성하기</span>
        </AIImgUpload>
        <InputForm>
          <InputSection>
            <InputTitle>행사 제목*</InputTitle>
            <Input type="text" placeholder='제목 입력' required />
          </InputSection>
          <InputSection>
            <InputTitle>행사 일시*</InputTitle>
            <InputBox>
              <Input type="tel" placeholder='0000년' required />
              <Input type="tel" placeholder='00월' required />
              <Input type="tel" placeholder='00일' required />
            </InputBox>          
            <InputBox>
              <Input type="tel" placeholder='00시' required />
              <Input type="tel" placeholder='00분' required />
            </InputBox>          
          </InputSection>
          <InputSection>
            <InputTitle>행사 장소*</InputTitle>
            <Input type="text" placeholder='장소 입력' required />
          </InputSection>
          <InputSection>
            <InputTitle>행사 한 줄 소개*</InputTitle>
            <Input type="text" placeholder='ex. 새학기의 시작을 함께 준비해요!' required />
          </InputSection>
          <InputSection>
            <InputTitle>행사 정보</InputTitle>
            <TextareaInput placeholder='ex. 행사 구성 요소, 준비물, 주의사항 등' />
          </InputSection>
          <InputSection>
            <InputTitle>계좌 / 참가비*</InputTitle>            
            <InputBox>
              <Input type="text" placeholder='계좌' required />
              <Input type="tel" placeholder='참가비' required />
            </InputBox>          
          </InputSection>
          <InputSection>
            <InputTitle>문의번호*</InputTitle>            
            <Input type="tel" placeholder='010-0000-0000' required />
          </InputSection>
        </InputForm>
        <CheckBox $isSelected={isChecked} onClick={()=>{setIsChecked(!isChecked);}}>
          {isChecked ?  <SelectedCheckIcon /> : <DefaultCheckIcon />}메인 페이지에 공지사항으로 업로드합니다.
        </CheckBox>
        <Button text="신청하기" clickedFn={submitFn} />
      </EventGeneratePageLayout>
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

const InputBox = styled.div`
  display: flex;
  gap: 1.2rem;
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

const CheckBox = styled.button<{ $isSelected: boolean; }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  margin-bottom: 15.2rem;

  color: ${({ theme, $isSelected }) =>($isSelected ? theme.color.grey900 : theme.color.grey500)};
  ${({ theme }) => theme.fonts.body02};
`;
