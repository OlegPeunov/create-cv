import * as S from './InputBlock.styled';
import { InputBlockType } from '../types';

function InputBlock(props: InputBlockType) {
  return (
    <S.ContentInputHolder>
      <S.EntryTitle>{props.title}</S.EntryTitle>
      <S.StyledInput placeholder={props.title} />
    </S.ContentInputHolder>
  );
}

export default InputBlock;
