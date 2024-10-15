import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <Container>
      테스트합니다.
    </Container>
  );
};

export default MainPage;

const Container = styled.section`
 background-color: ${props => props.theme.color.secondary}`;

