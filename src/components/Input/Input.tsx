import * as S from './Input.styled';
import { InputType } from '../types';

export const Input: React.FC<InputType> = props => {
  return (
    <S.ContentInputHolder>
      <S.EntryTitle>{props.title}</S.EntryTitle>
      <S.StyledInput placeholder={props.title} />
    </S.ContentInputHolder>
  );
};
