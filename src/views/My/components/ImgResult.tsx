import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { AISampleImg } from '../../../assets/img';
import Button from '../../../components/Button';


const ImgResult = () => {
  const navigate = useNavigate();
  const submitFn = () => {
    navigate('/img-generator');
  };

  return (
    <>
      <AIImg src={AISampleImg} alt='생성이미지' />
      <Button text="등록하기" clickedFn={submitFn} />   
    </>
  );
};

export default ImgResult;

const AIImg = styled.img`
	width: calc(100% - 3.6rem);
	margin: -8rem 1.8rem 0 1.8rem;

	border-radius: 16px;
`;
