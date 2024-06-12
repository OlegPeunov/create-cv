import * as S from './InputBlock.styled';
import { InputBlockType } from '../types';

export function InputBlock(props: InputBlockType) {
  return (
    <S.ContentInputHolder>
      <S.EntryTitle>{props.title}</S.EntryTitle>
      <S.StyledInput placeholder={props.title} />
    </S.ContentInputHolder>
  );
}
