import * as S from '../Block.styled';
import { CardType } from '../types';

function Card(props: CardType) {
  return (
    <>
      <S.BlockTitle>{props.title}</S.BlockTitle>
      <S.Block>{props.children}</S.Block>
    </>
  );
}

export default Card;
