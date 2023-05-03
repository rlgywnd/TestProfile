import * as S from './style';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeTitle>Ji Seong Jae App</S.HomeTitle>
      <S.ClickDiv to={'/main'}>CLICK!</S.ClickDiv>
    </S.HomeContainer>
  );
};

export default Home;
