import * as S from './Card.styled';
import { CardType } from '../types';

export const Card: React.FC<CardType> = props => {
  return (
    <>
      <S.BlockTitle>{props.title}</S.BlockTitle>
      <S.Block>{props.children}</S.Block>
    </>
  );
};

