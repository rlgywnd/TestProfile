import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backGif from '../assets/background.gif';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: none;
  background: url(${backGif}) center no-repeat;
  background-size: cover;
  /* background-size: cover; */
  /* background-color: rgb(245, 245, 245); */
`;
export const HomeTitle = styled.div`
  font-size: 30px;
  margin-top: 200px;
  margin-bottom: 30px;
  font-weight: bold;
`;
export const ClickDiv = styled(Link)`
  font-size: 30px;
  text-decoration-line: none;
  color: #4285f4;
  font-weight: bold;
  :hover {
    transition: all 0.2s linear;
    font-size: 33px;
    color: red;
  }
  :not(:hover) {
    transition: all 0.2s linear;
  }
`;
