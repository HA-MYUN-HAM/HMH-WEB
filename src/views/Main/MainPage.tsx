import styled from '@emotion/styled';
import { ApproveIcon } from '../../assets/icon';

const MainPage = () => {
  return (
    <Container>
      테스트합니다.
      <ApproveIcon />
    </Container>
  );
};

export default MainPage;

const Container = styled.section`
 background-color: ${props => props.theme.color.secondary}`;

