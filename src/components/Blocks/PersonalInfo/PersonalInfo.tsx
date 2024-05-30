import * as S from '../BlockComponents/BlockStyles/Block.styled';

function FormPersonalInfo() {
  return (
    <>
      <S.BlockTitle>Персональная информация</S.BlockTitle>
      <S.Block>
        <S.EntryTitle>Фио</S.EntryTitle>
        <S.StyledInput placeholder="Фио" />
        <S.EntryTitle>Место жительства</S.EntryTitle>
        <S.StyledInput placeholder="Место жительства" />
        <S.EntryTitle>Номер телефона</S.EntryTitle>
        <S.StyledInput placeholder="Номер телефона" />
      </S.Block>
    </>
  );
}

export default FormPersonalInfo;
