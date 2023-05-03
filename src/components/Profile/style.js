import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NameBox = styled.div`
  margin-bottom: 30px;
`;
export const AgeBox = styled.div`
  margin-bottom: 30px;
`;
export const PhoneBox = styled.div`
  margin-bottom: 60px;
`;

export const InputDiv = styled.div`
  display: flex;
  padding: 0 15px 0 10px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  input {
    font-size: 20px;
    border: none;
    :focus {
      outline: none;
    }
  }
  div {
    cursor: pointer;
  }
`;
export const BtnDiv = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: #4285f4;
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 50px;
  cursor: pointer;
  :hover {
    transition: all 0.2s linear;
    background-color: gray;
  }
  :not(:hover) {
    transition: all 0.2s linear;
  }
`;
export const RefreshDiv = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
`;

export const ResultDiv = styled.div`
  /* border: 1px solid red; */
  width: 300px;
  height: 100px;
  display: -webkit-box;
  justify-content: center;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
