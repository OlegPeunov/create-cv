import { ReactNode } from 'react';
import * as S from './FormItem.styled';

export type FormItemType = {
  title: string;
  children?: ReactNode | undefined;
};

export const FormItem: React.FC<FormItemType> = props => {
  return (
    <S.FormItem>
      <S.EntryTitle>{props.title}</S.EntryTitle>
      {props.children}
    </S.FormItem>
  );
};
