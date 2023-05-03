import { useForm } from 'react-hook-form';
import * as S from './style';
import { BsEraser } from 'react-icons/bs';
import { FiRefreshCcw } from 'react-icons/fi';
import { useState } from 'react';

const Profile = () => {
  const [result, setResult] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({ mode: 'onChange' });

  const onValid = (data) => {
    console.log('data : ', data);
    if (!watch('name') || !watch('age') || !watch('phone')) {
      setResult('입력내용 다쓰고 눌러 씨바라');
    } else {
      setResult(
        `내 이름 ${data.name}(이)고 \n ${data.age}세 이며\n 연락처는 ${data.phone}입니다`
      );
    }
  };

  return (
    <S.ProfileContainer>
      <form onSubmit={handleSubmit(onValid)}>
        <S.NameBox>
          <S.InputDiv>
            <input type='name' placeholder='name' {...register('name')} />
            {watch('name') ? (
              <div
                onClick={() => {
                  setValue('name', '');
                }}
              >
                <BsEraser color='black' />
              </div>
            ) : (
              <></>
            )}
          </S.InputDiv>
        </S.NameBox>
        <S.AgeBox>
          <S.InputDiv>
            <input type='age' placeholder='age' {...register('age')} />
            {watch('age') ? (
              <div
                onClick={() => {
                  setValue('age', '');
                }}
              >
                <BsEraser color='black' />
              </div>
            ) : (
              <></>
            )}
          </S.InputDiv>
        </S.AgeBox>
        <S.PhoneBox>
          <S.InputDiv>
            <input type='phone' placeholder='phone' {...register('phone')} />
            {watch('phone') ? (
              <div
                onClick={() => {
                  setValue('phone', '');
                }}
              >
                <BsEraser color='black' />
              </div>
            ) : (
              <></>
            )}
          </S.InputDiv>
        </S.PhoneBox>
        <S.BtnDiv type='submit'>등록</S.BtnDiv>
        <S.RefreshDiv
          onClick={() => {
            setResult('');
            setValue('name', '');
            setValue('age', '');
            setValue('phone', '');
          }}
        >
          <FiRefreshCcw size='25' />
        </S.RefreshDiv>
      </form>
      <S.ResultDiv>{result}</S.ResultDiv>
    </S.ProfileContainer>
  );
};

export default Profile;
