import * as S from './style';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeTitle>Ji Seong Jae App</S.HomeTitle>
      <S.ClickDiv to={'/main'}>CLICK!</S.ClickDiv>
    </S.HomeContainer>
  );
};

export default Home;
