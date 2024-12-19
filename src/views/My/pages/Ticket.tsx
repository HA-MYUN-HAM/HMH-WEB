import styled from '@emotion/styled';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ApproveIcon, LeftArrowIcon } from '../../../assets/icon';
import { AISampleImg2, BackgroundImg, BigTicketImg } from '../../../assets/img';
import Header from '../../../components/Header';
import { OutletContext } from '../type/myType';

const Ticket = () => {
  const { setCurrentTap } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const leftFn = () => {
    setCurrentTap('default');
    navigate(-1);

  };
    
  return (
    <TicketLayout>
      <Header leftFn={leftFn} leftIcon={LeftArrowIcon} title='티켓 조회'/>
      <TicketImg>
        <TicketInfoBox>
          <Title>가을맞이 자전거 모임</Title>
          <ImgBox>
            <AIImg src={AISampleImg2} alt='생성이미지' />
            <IconBox><ApproveIcon /></IconBox>
          </ImgBox>        
          <SubTitle>2024.10.17 19시00분 <br/> 신공학과 B101</SubTitle>
        </TicketInfoBox>        
        <TicketNumber>N.&ensp;23</TicketNumber>
      </TicketImg>            
    </TicketLayout>
  );
};

export default Ticket;

const TicketLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  width: 100dvw;
  height: 100dvh;

  background-image: url(${BackgroundImg});
  background-size: cover;
	${({ theme }) => theme.effect.boxDrop};
`;

const TicketImg = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

  height: 51rem;
	width: 29.3rem;
	padding: 6rem 0 2.8rem;

	background-image: url(${BigTicketImg});
  background-size: cover;
`;

const TicketInfoBox = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;

	width: 100%;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.grey900};
	${({ theme }) => theme.fonts.body01};
`;

const ImgBox = styled.div`
	width: calc(100% - 12rem);
	height: fit-content;
	margin-bottom: 1.2rem;
	position: relative;
`;

const AIImg = styled.img`
	width: 100%;
	border-radius: 16px;
	border: 0.1rem solid ${({ theme }) => theme.color.secondary};
`;

const IconBox = styled.div`
	position: absolute;
	bottom: -1.2rem;
	right: -1.2rem;

	border-radius: 99px;
	box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.25);
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.color.grey500};
	text-align: center;
	${({ theme }) => theme.fonts.body02};
`;

const TicketNumber = styled.span`
	color: ${({ theme }) => theme.color.secondary};
	${({ theme }) => theme.fonts.head01};
`;
