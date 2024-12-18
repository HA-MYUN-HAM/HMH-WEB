import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import CheckBox from './CheckBox';

const ImageStyle = ['3D 일러스트', '2D 일러스트', '밝음', '어두움'];

const ImageModal = () => {
  const navigate = useNavigate();

  const generateFn = () => {
    navigate('/image-generate');
  };

  const portalContent = (
    <ModalLayout>
      <ModalContainer>
        <Title>AI 홍보물 이미지 생성</Title>
        <CheckList>{ImageStyle.map((item)=>(<CheckBox key={item} content={item}/>))}</CheckList>
        <TextareaInput placeholder='(선택 사항) 이미지에 반영하고 싶은 내용을 입력해주세요.' />    
        <Button type="button" onClick={generateFn}>
          이미지 생성하기
        </Button>
      </ModalContainer>
    </ModalLayout>
  );
    
  return createPortal(
    portalContent,
    document.getElementById('root') as HTMLElement,
  );};

export default ImageModal;

const ModalLayout = styled.section`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 999;
  padding: 0 3.2rem;

  width: 100dvw;
  height: 100dvh;

  background-color: rgb(0 0 0 / 42%);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  
  height: fit-content;
  width: 100%;
  padding: 2.4rem 1.6rem;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.color.white};
`;
  
const Title = styled.p`
  color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.fonts.body01};
`;

const CheckList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 1.6rem 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.effect.boxDrop};
  ${({ theme }) => theme.fonts.head05};
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
