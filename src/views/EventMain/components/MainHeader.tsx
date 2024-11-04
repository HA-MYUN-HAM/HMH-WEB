import styled from "@emotion/styled";

const MainHeader = () => {
  return (
    <HeaderLayout>
      <Title>이화여자대학교 컴퓨터공학과</Title>
      <SubTitle>새 학기의 시작을 함께 준비해요!</SubTitle>
    </HeaderLayout>
  );
};

export default MainHeader;

const HeaderLayout = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  background: linear-gradient(45deg, #f6ccbd, #d0edb5);
  padding: 2rem;
  color: white;
  text-align: center;
  width: 100dvw;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.head02};
  margin-bottom: 1.2rem;
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.body04};
`;
