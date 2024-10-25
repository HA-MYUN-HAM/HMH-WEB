import styled from '@emotion/styled';

const EventPage = () => {
  return (
    <MyPageLayout>
      <div>1번</div>
      <div>2번</div>
      <div>3번</div>
      <div>4번</div>
    </MyPageLayout>
  );
};

export default EventPage;

const MyPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  
  width: 100dvw;
  height: 100dvh;
`;

