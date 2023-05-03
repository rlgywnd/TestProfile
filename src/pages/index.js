import * as S from './style';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeTitle>이거 눌러서 드가셈</S.HomeTitle>
      <S.ClickDiv to={'/main'}>CLICK!</S.ClickDiv>
    </S.HomeContainer>
  );
};

export default Home;
