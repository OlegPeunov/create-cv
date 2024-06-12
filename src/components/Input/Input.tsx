import { ReactNode } from 'react';
import * as S from './Input.styled';

export type InputType = {
  title: string;
  children?: ReactNode | undefined;
};

export const Input: React.FC<InputType> = props => {
  return (
    <S.ContentInputHolder>
      <S.EntryTitle>{props.title}</S.EntryTitle>
      <S.StyledInput placeholder={props.title} />
    </S.ContentInputHolder>
  );
};
