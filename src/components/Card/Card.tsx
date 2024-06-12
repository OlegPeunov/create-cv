import { ReactNode } from 'react';
import * as S from './Card.styled';

type CardType = {
  title: string;
  children?: ReactNode | undefined;
};

export const Card: React.FC<CardType> = props => {
  return (
    <>
      <S.BlockTitle>{props.title}</S.BlockTitle>
      <S.Block>{props.children}</S.Block>
    </>
  );
};
